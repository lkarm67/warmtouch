import { NextResponse } from "next/server";

export async function GET() {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        return NextResponse.json(
            { error: "Telegram environment variables не знайдені" },
            { status: 500 }
        );
    }

    const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: "🔥 WarmTouch\n\nТестове повідомлення від сайту.\nTelegram-бот працює! ✅",
            }),
        }
    );

    const data = await response.json();

    return NextResponse.json(data);
}