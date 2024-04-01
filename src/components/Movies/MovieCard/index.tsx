import propTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import { FC } from "react";
import { MovieCardProps } from "./types";
import Image from "next/image";

export const MovieCard: FC<MovieCardProps> = ({
  title,
  originalTitle,
  originalTitleRomanised,
  description,
  posterUrl,
}) => {
  const previewDescription =
    description.length > 301
      ? `${description.match(/^.{301}\w*/)}...`
      : description;

  return (
    <Grid container item xs={12} md={9} xl={6}>
      <div className="grid grid-cols-1 sm:grid-cols-2 p-4 m-4">
        <div className="w-full">
          <Image src={posterUrl} alt="poster" width={500} height={500} />
        </div>
        <div className="flex items-center">
          <div className="flex p-4 flex-col gap-2">
            <span>{title}</span>
            <span>{originalTitle}</span>
            <span>{originalTitleRomanised}</span>
            <span>{previewDescription}</span>
          </div>
        </div>
      </div>
    </Grid>
  );
};
