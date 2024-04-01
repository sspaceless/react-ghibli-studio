"use client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import logoDark from "../../assets/ghibli-logo-dark.svg";
import logoLight from "../../assets/ghibli-logo-light.svg";
// import { useAuth, useUser } from 'reactfire';
// import { useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
import StyledMenu from "../UI/StyledMenu";

export const Header: FC = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const trigger = useScrollTrigger();
  // const navigate = useNavigate();

  // const auth = useAuth();
  // const user = useUser();
  // const { data: userData } = user;

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
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

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const homeButtonClickHandler = () => {
    // navigate("/");
  };

  const signInButtonClickHandler = () => {
    // navigate("/authentication");
  };

  const signOutButtonClickHandler = async () => {
    // console.log("asd");
    // try {
    //   await signOut(auth);
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const userData = {
    photoURL: "",
    displayName: "",
  };

  const menu = userData ? (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={userData.displayName} src={`${userData.photoURL}`} />
        </IconButton>
      </Tooltip>
      <StyledMenu
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={signOutButtonClickHandler}>
          <span>Sign out</span>
        </MenuItem>
      </StyledMenu>
    </>
  ) : (
    <Button color="inherit" onClick={signInButtonClickHandler}>
      Sign in
    </Button>
  );

  return (
    <div className="flex w-full">
      <div className="flex justify-between w-full">
        <Button color="inherit" onClick={homeButtonClickHandler}>
          I ♡ Ghibli
        </Button>

        <div className="flex flex-row gap-4">
          <Image
            src={isDarkMode ? logoDark : logoLight}
            alt="Studio Ghibli logo"
            width={80}
            height={80}
          />

          <div className="flex flex-col mt-10">
            <span>Studio Ghibli</span>
            <span> スタジオジブリ</span>
          </div>
        </div>

        {menu}
      </div>
    </div>
  );
};
