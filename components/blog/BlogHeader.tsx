import Image from "next/image";
import { Authors, allAuthors } from "../Authors";

export const BlogHeader = ({
  authors,
  title,
  description,
  date,
}: {
  authors: (keyof typeof allAuthors)[];
  title: string;
  description?: string;
  date?: string;
}) => (
  <div className="flex flex-col gap-1 items-center my-10 text-center">
    <span className="text-primary/60">{date}</span>

    <h1 className="text-3xl font-bold leading-snug">{title}</h1>
    <p className="text-primary/60 text-xl">{description}</p>
    <Authors authors={authors} />
  </div>
);
