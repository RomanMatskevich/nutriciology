import { Image as ImageType } from "@/types";
import Image from "next/image";
export default function ReviewBlock({ img }: { img: ImageType }) {
  return (
    <div className="rounded-lg p-5 text-green bg-green flex flex-col justify-center">
      <Image
        src={process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + img.url}
        alt={img.alternativeText || ""}
        width={img.width || 200}
        height={img.height || 200}
      />
    </div>
  );
}
