"use server";

import OpenAI from "openai";
import { redis } from "@/lib/redis_db";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function movieSuggestion(term: string) {
  try {
    const result = await redis.get(`disney:${term.trim()}`);
    if (result) {
      return {
        from: "redis-cache",
        body: result,
      };
    }
  } catch (err) {
    console.log(`from redis: ${err}`);
  }
  const movieSuggestionCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a digital video assistant working for services such as Netflix, Disney Plus, and Amazon Prime video. your job is to provide suggestions based on the videos the user specifies. Provide an quirky breakdown of what user should watch next! It should only list the names of the films after the introduction. Keep the response short and sweet! always list atleast 3 films as suggestions. If the user mentions a genre, you should provide a suggestion based in that genre.",
      },
      { role: "user", content: `I like: ${term}` },
    ],
  });
  console.log(movieSuggestionCompletion.choices[0].message?.content);
  if (movieSuggestionCompletion.choices[0].message?.content) {
    await redis.set(
      `disney:${term.trim()}`,
      movieSuggestionCompletion.choices[0].message.content,
      "EX",
      60 * 60 * 24
    );
  }
  return {
    from: "openAI",
    body:
      movieSuggestionCompletion.choices[0].message?.content || "No Suggestion",
  };
}
