import Image from "next/image";
import { FC } from "react";

import { MovieCardProps } from "./types";

export const MovieCard: FC<MovieCardProps> = ({
  id,
  title,
  originalTitle,
  originalTitleRomanised,
  description,
  imageUrl,
  bannerUrl,
}) => {
  const previewDescription =
    description.length > 301
      ? `${description.match(/^.{301}\w*/)}...`
      : description;

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white text-celadon sm:flex-row">
      <div className="sm:hidden">
        <Image
          src={bannerUrl}
          alt={`${id}-banner`}
          className="rounded-t-xl"
          width={1000}
          height={1000}
        />
      </div>
      <div className="hidden sm:block sm:min-w-[300px] lg:min-w-[400px]">
        <Image
          src={imageUrl}
          alt={`${id}-image`}
          className=" rounded-l-xl"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-center p-4 pt-0 sm:pl-0 sm:pt-4">
        <span className="text-3xl">{title}</span>
        <span className="text-xl">{originalTitle}</span>
        <span className="text-xl">{originalTitleRomanised}</span>
        <span>{previewDescription}</span>
      </div>
    </div>
  );
};
