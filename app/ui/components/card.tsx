import Image from "next/image";
import pic from '../../../public/assets/illustration-article.svg';
import User from "./user";

export function Card() {
  return (
    <div className="flex flex-col gap-4 p-2 rounded-xl min-h-fit border-black bg-white w-[300px] border drop-shadow-custom-md ">
      <Image
        src={pic}
        width={300}
        height={150}
        alt="img-pic"
        className="rounded-xl"
      />
      <hgroup>
        <h1 className="text-sm px-3 py-1 rounded-md w-fit bg-custom-yellow">Learning</h1>
        <h6 className="text-sm text-neutral-600">Published 21 Dec 2023</h6>
      </hgroup>
      <h1 className="text-lg text-black font-bold">HTML & CSS Fondation</h1>
      <p className="text-neutral-600 text-xs">These languages are the backbone of every website, defining structure, content, and presentation.</p>
      <User name="Greg Hooper"/>
    </div>
  );
}