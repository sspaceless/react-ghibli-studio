"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export const Logo: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const darkLogoSrc = `/ghibli-logo-dark.svg`;
  const lightLogoSrc = `/ghibli-logo-dark.svg`;

  return (
    <div className="flex flex-row items-center gap-4">
      {resolvedTheme === "dark" ? (
        <Image src={darkLogoSrc} alt="Studio Ghibli logo" width={36} height={36} />
      ) : (
        <Image src={lightLogoSrc} alt="Studio Ghibli logo" width={36} height={36} />
      )}

      <div className="flex flex-col items-start justify-center">
        <span>Studio Ghibli</span>
        <span>スタジオジブリ</span>
      </div>
    </div>
  );
};
