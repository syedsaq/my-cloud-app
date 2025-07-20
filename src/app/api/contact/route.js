// src/app/api/contact/route.js
import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {
    await dbConnect();

    const data = await request.json();
    console.log("📩 Incoming Contact Data:", data);

    const saved = await Contact.create(data);

    return Response.json({ success: true, contact: saved }, { status: 201 });
  } catch (err) {
    console.error("❌ API Error:", err);
    return Response.json({ success: false, error: err.message }, { status: 400 });
  }
}


// export async function GET() {
//   try {
//     await dbConnect();
//     const feedbacks = await Contact.find().sort({ createdAt: -1 });
//     return Response.json(feedbacks);
//   } catch (error) {
//     console.error(error);
//     return new Response("Error fetching feedback", { status: 500 });
//   }
// }
export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 6;
  const search = searchParams.get('search') || '';

  const query = {
    $or: [
      { name: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } },
      { message: { $regex: search, $options: 'i' } },
    ],
  };

  const total = await Contact.countDocuments(query);
  const feedbacks = await Contact.find(query)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 }); // optional: sort by newest

  return NextResponse.json({
    feedbacks,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}
export async function DELETE(req) {
  await dbConnect();
  const { id } = await req.json();
  await Contact.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted successfully" });
}

// PUT (edit) feedback
export async function PUT(req) {
  await dbConnect();
  const { id, name, email, message } = await req.json();
  const updated = await Contact.findByIdAndUpdate(id, { name, email, message }, { new: true });
  return NextResponse.json(updated);
}
