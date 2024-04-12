import Image from "next/image";
import { FC } from "react";

import { MovieCardProps } from "./types";

export const MovieCard: FC<MovieCardProps> = ({
  id,
  title,
  originalTitle,
  originalTitleRomanised,
  description,
  imageSrc,
  bannerSrc,
}) => {
  const previewDescription =
    description.length > 301
      ? `${description.match(/^.{301}\w*/)}...`
      : description;

  return (
    <div className="rounded-xl flex flex-col sm:flex-row gap-4 bg-white text-celadon">
      <div className="sm:hidden">
        <Image
          src={bannerSrc}
          alt={`${id}-banner`}
          className="rounded-t-xl"
          width={1000}
          height={1000}
        />
      </div>
      <div className="hidden sm:block sm:min-w-[300px] lg:min-w-[400px]">
        <Image
          src={imageSrc}
          alt={`${id}-image`}
          className=" rounded-l-xl"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col p-4 sm:pl-0 pt-0 sm:pt-4 justify-center">
        <span className="text-3xl">{title}</span>
        <span className="text-xl">{originalTitle}</span>
        <span className="text-xl">{originalTitleRomanised}</span>
        <span>{previewDescription}</span>
      </div>
    </div>
  );
};
