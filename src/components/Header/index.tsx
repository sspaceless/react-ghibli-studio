"use client";

import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { FC, useEffect, useState } from "react";

export const Header: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { data } = useSession();

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

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
        <Button color="inherit" onClick={homeButtonClickHandler}>
          I ♡ Ghibli
        </Button>

        <div className="flex flex-row gap-4">
          <Image
            src={logoSrc}
            alt="Studio Ghibli logo"
            width={80}
            height={80}
          />

          <div className="mt-10 flex flex-col">
            <span>Studio Ghibli</span>
            <span> スタジオジブリ</span>
          </div>
        </div>

        {data?.user?.image && (
          <div>
            <Image
              alt="user-photo"
              src={data.user.image}
              width={50}
              height={50}
            />
          </div>
        )}

        <div className="flex items-center">
          <Button
            color="inherit"
            startIcon={<GoogleIcon />}
            onClick={() => {
              signIn("google");
            }}
            fullWidth
          >
            sign in
          </Button>
        </div>
      </div>
    </div>
  );
};
