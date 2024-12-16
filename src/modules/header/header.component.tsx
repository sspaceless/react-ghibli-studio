import Image from "next/image";
import { Logo } from "~/shared/components/logo.component";
import { ModeToggle } from "~/shared/components/mode-toggle.component";

export const Header: React.FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
      <button color="inherit">I ♡ Ghibli</button>
      <Logo />
      <ModeToggle />
    </div>
  );
};
