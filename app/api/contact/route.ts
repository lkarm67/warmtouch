import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const {
            name,
            phone,
            service,
            location,
            message,
        } = await req.json();

        // Перевіряємо обов'язкові поля
        if (!name || !phone || !service) {
            return Response.json(
                {
                    success: false,
                    error: 'Заповніть обов’язкові поля',
                },
                { status: 400 }
            );
        }

        // 1. Відправляємо email
        const emailResult = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'fsdkl04@gmail.com',
            subject: `Нова заявка WarmTouch — ${service}`,
            html: `
                <h2>🔥 Нова заявка з сайту WarmTouch</h2>

                <p><strong>Ім'я:</strong> ${name}</p>

                <p><strong>Телефон:</strong> ${phone}</p>

                <p><strong>Послуга:</strong> ${service}</p>

                <p><strong>Населений пункт:</strong> ${
                    location || 'Не вказано'
                }</p>

                <p><strong>Повідомлення:</strong></p>

                <p>${message || 'Не вказано'}</p>
            `,
        });

        console.log('EMAIL RESULT:', emailResult);

        // 2. Відправляємо повідомлення в Telegram
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
            throw new Error('Telegram environment variables не знайдені');
        }

        const telegramMessage = `
🔥 НОВА ЗАЯВКА WARMTOUCH

👤 Ім'я: ${name}

📞 Телефон: ${phone}

🔥 Послуга: ${service}

📍 Населений пункт: ${
            location || 'Не вказано'
        }

💬 Повідомлення:
${message || 'Не вказано'}
        `.trim();

        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage,
                }),
            }
        );

        const telegramResult = await telegramResponse.json();

        console.log('TELEGRAM RESULT:', telegramResult);

        if (!telegramResult.ok) {
            throw new Error('Помилка відправки Telegram');
        }

        // Якщо все успішно
        return Response.json({
            success: true,
        });
    } catch (error) {
        console.error('CONTACT FORM ERROR:', error);

        return Response.json(
            {
                success: false,
                error: 'Помилка відправки заявки',
            },
            { status: 500 }
        );
    }
}