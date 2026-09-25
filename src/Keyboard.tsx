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

export function Keyboard() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-2">
      {KEYS.map((letter, index) => (
        <button
          key={index}
          className="
            w-full
            aspect-square
            border-[3px] border-black
            bg-transparent
            p-2
            text-4xl
            font-bold
            uppercase
            text-black
            hover:bg-[hsl(200,100%,75%)]
            focus:bg-[hsl(200,100%,75%)]
            disabled:opacity-30
          "
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
