const HEAD = (
  <div className="absolute top-12.5 -right-5 h-12.5 w-12.5 rounded-full border-10 border-black" />
);

const BODY = <div className="absolute top-24 right-0 h-25 w-2.5 bg-black" />;

const RIGHT_ARM = (
  <div className="absolute top-30 -right-22 h-2.5 w-25 origin-left-bottom -rotate-30 bg-black" />
);

const LEFT_ARM = (
  <div className="absolute top-30 -right-px h-2.5 w-25 origin-right-bottom rotate-30 bg-black" />
);

const RIGHT_LEG = (
  <div className="absolute top-58 -right-17.5 h-2.5 w-25 origin-left-bottom rotate-60 bg-black" />
);

const LEFT_LEG = (
  <div className="absolute top-58 -right-5 h-2.5 w-25 origin-right-bottom -rotate-60 bg-black" />
);

export function HangmanDrawing() {
  return (
    <div className="relative">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className="absolute h-12.5 w-2.5 bg-black ml-30 top-0 right-0" />
      <div className="h-2.5 w-50 bg-black ml-30" />
      <div className="h-100 w-2.5 bg-black ml-30" />
      <div className="h-2.5 w-62.5 bg-black" />
    </div>
  );
}
