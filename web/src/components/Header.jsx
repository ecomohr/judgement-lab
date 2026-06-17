export default function Header() {
  return (
    <header style={styles.header}>
      <div>
        <h1 style={styles.title}>Judgment Lab</h1>
        <p style={styles.subtitle}>
          Teach AI how to evaluate things the way you would.
        </p>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "16px",
    borderBottom: "1px solid #e5e5e5",
    marginBottom: "20px",
  },
  title: {
    margin: 0,
    fontSize: "28px",
    fontWeight: 700,
  },
  subtitle: {
    margin: "4px 0 0",
    color: "#666",
    fontSize: "14px",
  },
};