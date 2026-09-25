export function HangmanWord() {
  const word = "test";
  const guessedLetter = ["t", "e"];

  return (
    <div className="flex gap-[.25em] text-8xl text-bold uppercase font-mono">
      {word.split("").map((letter, index) => (
        <span key={index} className="border-b-8">
          <span
            className={`${guessedLetter.includes(letter) ? "visible" : "invisible"}`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
