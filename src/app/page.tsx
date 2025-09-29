import styles from "./page.module.css";
import OpenAI from "openai";

export default async function Home() {
  const client = new OpenAI();
  const response = await client.responses.create({
    model: "gpt-4",
    input:
      "Suggest some beginner exercises for someone with mild back pain that can be done at home without equipment.",
  });

  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <h1>Response</h1>
      <p>{response.output_text}</p>
    </div>
  );
}
