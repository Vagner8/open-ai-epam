import styles from "./page.module.css";
import OpenAI from "openai";

export default async function Home() {
  const developerMessage = "You are a health coach and fitness trainer.";
  const userMessage =
    "Provide me advice on what exercises should I do for my back pain?";

  const client = new OpenAI();
  const response = await client.responses.create({
    model: "gpt-4",
    input: userMessage,
    instructions: developerMessage,
  });

  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <h1>Response</h1>
      <p>{response.output_text}</p>
    </div>
  );
}
