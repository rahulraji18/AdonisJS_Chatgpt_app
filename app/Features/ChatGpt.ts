// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

export default async function ChatGpt(
  language: string,
  numberOfQuestions: number
) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `generate ${numberOfQuestions} questions of ${language} programming language with options in [{question: "", options:[], answer:""}] json format like api response otherwise return empty array []`,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  return chatCompletion.choices[0].message.content;
}
