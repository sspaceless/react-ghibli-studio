import Image from "next/image";
import { FC } from "react";
import { Card } from "~/shared/components/ui/card";

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
  bannerSrc,
}) => {
  const previewDescription =
    description.length > 100 ? `${description.match(/^.{100}\w*/)}...` : description;

  return (
    <Card className="text-celadon max-h flex max-h-96 w-full max-w-80 flex-col gap-4 overflow-hidden">
      <Image src={bannerSrc} alt={`${id}-banner`} className="rounded-t-xl" width={320} height={0} />

      <div className="flex flex-col justify-center p-4 pt-0">
        <span className="text-xl">{title}</span>
        <span className="text-xl">{originalTitle}</span>
        {/* <span className="text-xl">{originalTitleRomanised}</span> */}
        <span>{previewDescription}</span>
      </div>
    </Card>
  );
};
