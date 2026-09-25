const HEAD = (
  <div
    key="head"
    className="absolute top-8 -right-4 h-10 w-10 rounded-full border-8 border-black"
  />
);

const BODY = (
  <div key="body" className="absolute top-16 right-0 h-20 w-2 bg-black" />
);

const RIGHT_ARM = (
  <div
    key="right-arm"
    className="absolute top-20 -right-17.5 h-2 w-20 origin-left-bottom -rotate-30 bg-black"
  />
);

const LEFT_ARM = (
  <div
    key="left-arm"
    className="absolute top-20 -right-px h-2 w-20 origin-right-bottom rotate-30 bg-black"
  />
);

const RIGHT_LEG = (
  <div
    key="right-leg"
    className="absolute top-43 -right-14 h-2 w-20 origin-left-bottom rotate-60 bg-black"
  />
);

const LEFT_LEG = (
  <div
    key="left-leg"
    className="absolute top-43 -right-4 h-2 w-20 origin-right-bottom -rotate-60 bg-black"
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  nubmerOfGuesses: number;
};

export function HangmanDrawing({ nubmerOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, nubmerOfGuesses)}

      <div className="absolute top-0 right-0 ml-24 h-10 w-2 bg-black" />

      <div className="ml-24 h-2 w-40 bg-black" />

      <div className="ml-24 h-62.5 w-2 bg-black" />

      <div className="h-2 w-50 bg-black" />
    </div>
  );
}
