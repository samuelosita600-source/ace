import { NextResponse } from "next/server";
import chatEngine from "@/engines/chat";

export async function POST(request: Request) {
  try {
      const body = await request.json();

          const response = await chatEngine.sendMessage(body.message);

              return NextResponse.json(response);
                } catch (error) {
                    console.error(error);

                        return NextResponse.json(
                              {
                                      message: "Something went wrong.",
                                            },
                                                  {
                                                          status: 500,
                                                                }
                                                                    );
                                                                      }
                                                                      }