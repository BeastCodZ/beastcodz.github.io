import InteractiveTerminal from "./Terminal";

export default function TerminalPage() {
  return (
    <>
    <div className="flex flex-col items-center justify-center mt-4 mb-4 z-1">
        <h1 className="text-3xl font-bold text-[#00FFCC]">
          {" "}
          beastcodz.github.io{" "}
        </h1>
        <p className="text-lg font-semibold text-[#00FFCC]">
          Like the manual? Try the Terminal.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <InteractiveTerminal />
      </div>
    </>
  );
}