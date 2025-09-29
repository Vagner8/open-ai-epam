import styles from "./page.module.css";
import { getChatCompletion } from "./utils/getChatCompletion";

export default async function Home() {
  const prompt = "Give me 3 fun facts about space.";
  const parameters = {
    temperature: 0.9,
    top_p: 0.95,
    max_tokens: 100,
    n: 3,
    frequency_penalty: 0.2,
  };

  const responses = await getChatCompletion(prompt, parameters);

  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <h1>Response</h1>
      <p>{responses}</p>
    </div>
  );
}
