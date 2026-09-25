import { useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";

function App() {
  const [wordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  console.log(wordToGuess);

  return (
    <div className="my-0 mx-auto flex max-w-200 flex-col items-center gap-8">
      <div className="text-center text-4xl">Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
    </div>
  );
}

export default App;
