import React from "react";
import "./App.css";

function App() {
  const text = "Welcome to the AI powered Chatbot!";

  return (
    <div className="app-container">
      <h1 className="welcome-text">
        {text.split("").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
          </span>
        ))}
      </h1>
      <AboutPage></AboutPage>
      <MyButton />
    </div>
  );
}
function MyButton() {
  return <button>Submit</button>;
}

function AboutPage() {
  return (
    <>
      <h2>About Page</h2>
      <p>
        Hello
        <br />
        How are you?
      </p>
    </>
  );
}

export default App;
