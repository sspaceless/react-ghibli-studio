import Image from "next/image";
import { FC } from "react";

type MovieCardProps = {
  id: string;
  title: string;
  originalTitle: string;
  originalTitleRomanised: string;
  description: string;
  imageSrc: string;
  bannerSrc: string;
};

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
    description.length > 301 ? `${description.match(/^.{301}\w*/)}...` : description;

  return (
    <div className="bg-white text-celadon flex flex-col gap-4 rounded-xl sm:flex-row">
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
      <div className="flex flex-col justify-center p-4 pt-0 sm:pl-0 sm:pt-4">
        <span className="text-3xl">{title}</span>
        <span className="text-xl">{originalTitle}</span>
        <span className="text-xl">{originalTitleRomanised}</span>
        <span>{previewDescription}</span>
      </div>
    </div>
  );
};
