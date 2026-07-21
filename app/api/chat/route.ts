import { NextResponse } from "next/server";
import chatManager from "@/engines/chat";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await chatManager.sendMessage({
      userId: body.userId ?? "anonymous",
      message: body.message,
      conversationId: body.conversationId,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
