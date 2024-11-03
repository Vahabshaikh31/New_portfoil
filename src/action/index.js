"use server";
import mailjet from "node-mailjet";

export const EmailSender = async (email, message) => {
  try {
    // Create Mailjet client with your public and private API keys
    const client = mailjet.apiConnect(
      process.env.MJ_APIKEY_PUBLIC, // Mailjet public API key
      process.env.MJ_APIKEY_PRIVATE // Mailjet private API key
    );

    // Configure the email request
    const request = client.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: email,
            Name: email,
          },
          To: [
            {
              Email: "svahab33@gmail.com", // Your own email to receive messages
              Name: "Abdulvahab",
            },
          ],
          Subject: "New message from your website",
          TextPart: message,
          HTMLPart: `<p>${message}</p>`,
        },
      ],
    });

    // Send the email and await the response
    await request;

    // Return success message
    return { ok: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { ok: false, error: "Failed to send email" };
  }
};
