"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";

export const Header: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleDarkModeChange = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  const homeButtonClickHandler = () => {
    // navigate("/");
  };

  const logoSrc = `/ghibli-logo-${isDarkMode ? "dark" : "light"}.svg`;

  return (
    <div className="flex w-full">
      <div className="flex w-full justify-between">
        <button color="inherit" onClick={homeButtonClickHandler}>
          I ♡ Ghibli
        </button>

        <div className="flex flex-row gap-4">
          <Image src={logoSrc} alt="Studio Ghibli logo" width={80} height={80} />

          <div className="mt-10 flex flex-col">
            <span>Studio Ghibli</span>
            <span> スタジオジブリ</span>
          </div>
        </div>

        <div className="col flex items-center">
          <button color="inherit" onClick={undefined}>
            sign in
          </button>
        </div>
      </div>
    </div>
  );
};
