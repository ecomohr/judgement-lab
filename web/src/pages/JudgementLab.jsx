import { useState } from "react";
import JudgementLabHeader from "../components/JudgementLabHeader";
import PromptBox from "../components/PromptBox";
import ExamplesList from "../components/ExamplesList";
import ResultsPanel from "../components/ResultsPanel";

export default function JudgementLab() {
  const [prompt, setPrompt] = useState("");
  const [examples, setExamples] = useState([""]);
  const [results, setResults] = useState([]);

  return (
    <div style={{ padding: 20 }}>
      <JudgementLabHeader />

      <PromptBox prompt={prompt} setPrompt={setPrompt} />

      <ExamplesList
        examples={examples}
        setExamples={setExamples}
      />

      <ResultsPanel results={results} />
    </div>
  );
}