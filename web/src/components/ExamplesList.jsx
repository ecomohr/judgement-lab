export default function ExamplesList({
  examples,
  setExamples
}) {
  const addExample = () =>
    setExamples([...examples, ""]);

  const updateExample = (i, value) => {
    const next = [...examples];
    next[i] = value;
    setExamples(next);
  };

  const removeExample = (i) => {
    setExamples(examples.filter((_, idx) => idx !== i));
  };

  return (
    <div>
      <h3>Test Examples</h3>

      {examples.map((ex, i) => (
        <div key={i}>
          <textarea
            value={ex}
            onChange={(e) =>
              updateExample(i, e.target.value)
            }
          />

          <button onClick={() => removeExample(i)}>
            Remove
          </button>
        </div>
      ))}

      <button onClick={addExample}>
        + Add Example
      </button>
    </div>
  );
}