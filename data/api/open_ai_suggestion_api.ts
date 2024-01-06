"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function movieSuggestion(term: string) {
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
  return {
    body:
      movieSuggestionCompletion.choices[0].message?.content || "No Suggestion",
  };
}
