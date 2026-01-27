import type { FunctionalComponent } from "preact";

const Header: FunctionalComponent = () => {
  return (
    <header className="flex items-center gap-2">
      <span className="text-xs font-medium text-slate-700 uppercase tracking-wide">
        Tokens
      </span>
      <div className="flex-1 h-[1px] bg-slate-300" />
    </header>
  );
};

export default Header;
