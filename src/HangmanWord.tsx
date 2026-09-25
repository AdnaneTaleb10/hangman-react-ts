type HangmanWord = {
  reveal: boolean;
  guessedLetter: string[];
  wordToGuess: string;
};

export function HangmanWord({
  reveal = false,
  guessedLetter,
  wordToGuess,
}: HangmanWord) {
  return (
    <div className="flex gap-[.15em] font-mono text-5xl font-bold uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          className={`${!guessedLetter.includes(letter) && reveal ? "border-b-4 border-red-500" : "border-b-4 border-black"}`}
        >
          <span
            className={`${guessedLetter.includes(letter) || reveal ? "visible" : "invisible"} ${!guessedLetter.includes(letter) && reveal ? "text-red-500" : "black"}`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
