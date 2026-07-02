import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Judgement Lab", path: "/judgement-lab" },
  { name: "Snake", path: "/snake-game" },
  { name: "Path Generator", path: "/path-generator" },
  // { name: "About", path: "/about" },
];

export default function HomePage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">E Lab</div>

        <div className="nav-links">
          {tabs.map((tab) => (
            <a key={tab.name} href={tab.path}>
              {tab.name}
            </a>
          ))}
        </div>
      </nav>

      <main className="hero">
        <h1>Welcome to E Lab</h1>

        <p>
          A collection of projects, experiments, random ideas, and things that
          seemed interesting enough to build.
        </p>

        <div className="cards">
          <Link to="/judgement-lab" className="card featured">
            <h2>{"[WIP] Judgement Lab"}</h2>
            <p>
              Create the simplest possible workspace for testing and improving AI prompts.
            </p>
          </Link>

          <div className="card">
            <Link to="/snake-game">
              <h2>{"[WIP] SnaEK"}</h2>
              <p>
                Building the game.
              </p>
            </Link>
          </div>

          <div className="card">
            <Link to="/path-generator">
              <h2>{"[WIP] Path Generator"}</h2>
              <p>
                A pedestrian's guide to buidling the best path!
              </p>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}