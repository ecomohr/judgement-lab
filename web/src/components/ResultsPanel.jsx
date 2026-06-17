export default function ResultsPanel({ results }) {
  return (
    <div style={styles.wrapper}>
      <h3>Results</h3>

      {results.length === 0 ? (
        <p style={styles.empty}>No results yet.</p>
      ) : (
        results.map((r, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.header}>
              Example {i + 1}
            </div>

            <pre style={styles.pre}>
              {r}
            </pre>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    marginTop: "20px",
  },
  empty: {
    color: "#888",
    fontStyle: "italic",
  },
  card: {
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "10px",
    background: "#fafafa",
  },
  header: {
    fontWeight: 600,
    marginBottom: "6px",
  },
  pre: {
    margin: 0,
    whiteSpace: "pre-wrap",
    fontSize: "13px",
  },
};