export default function PromptBox({ prompt, setPrompt }) {
  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>
        How should AI evaluate these examples?
      </h3>

      <textarea
        style={styles.textarea}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: Review creator applications for authenticity, audience fit, and likelihood of success..."
      />
    </div>
  );
}

const styles = {
  wrapper: {
    marginBottom: "20px",
  },
  title: {
    marginBottom: "8px",
  },
  textarea: {
    width: "100%",
    minHeight: "120px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    resize: "vertical",
  },
};