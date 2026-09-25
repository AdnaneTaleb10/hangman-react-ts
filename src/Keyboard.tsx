const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  disabled,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(55px,1fr))] gap-2">
      {KEYS.map((letter, index) => {
        const isActive = activeLetters.includes(letter);
        const isInActive = inactiveLetters.includes(letter);

        return (
          <button
            key={index}
            onClick={() => addGuessedLetter(letter)}
            disabled={isInActive || isActive || disabled}
            className={`
  aspect-square
  w-full
  border-2 border-black
  p-1
  text-3xl
  font-bold
  uppercase
  ${
    disabled
      ? "bg-transparent text-black opacity-30 hover:bg-transparent"
      : isActive
        ? "bg-[hsl(200,100%,50%)] text-white"
        : isInActive
          ? "bg-transparent text-black opacity-30"
          : "bg-transparent text-black hover:bg-[hsl(200,100%,75%)] focus:bg-[hsl(200,100%,75%)]"
  }
`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
