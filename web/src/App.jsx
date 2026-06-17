import { useState } from "react";
import Header from "./components/Header";
import PromptBox from "./components/PromptBox";
import ExamplesList from "./components/ExamplesList";
import ResultsPanel from "./components/ResultsPanel";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [examples, setExamples] = useState([""]);
  const [results, setResults] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <Header />

      <PromptBox prompt={prompt} setPrompt={setPrompt} />

      <ExamplesList
        examples={examples}
        setExamples={setExamples}
      />

      <ResultsPanel results={results} />
    </div>
  );
}