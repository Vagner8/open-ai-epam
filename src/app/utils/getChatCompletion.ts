import OpenAI from "openai";

interface ChatParams {
  temperature?: number;
  top_p?: number;
  max_tokens?: number;
  n?: number;
  frequency_penalty?: number;
  seed?: number;
}

export const getChatCompletion = async (
  prompt: string,
  parameters: ChatParams = {}
) => {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const response = await client.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt },
    ],
    temperature: parameters.temperature ?? 0.7,
    top_p: parameters.top_p ?? 1,
    max_tokens: parameters.max_tokens ?? 150,
    n: parameters.n ?? 1,
    frequency_penalty: parameters.frequency_penalty ?? 0,
  });

  if (response.choices.length === 1) return response.choices[0].message.content;
  return response.choices.map((c) => c.message.content);
};
