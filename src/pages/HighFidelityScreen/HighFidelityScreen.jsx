import React from "react";
import ImageGrid from "./ImageGrid";
import IconGroup from "./IconGroup";

function HighFidelityScreen() {
  return (
    <main className="flex overflow-hidden flex-col pt-44 pb-28 bg-zinc-950 max-md:py-24">
      <h1 className="self-start ml-36 text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl">
        High Fidelity Screen
      </h1>
      <section className="flex flex-col justify-center items-center px-20 py-48 mt-16 w-full border-white border-solid bg-zinc-950 border-[3px] rounded-[100px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col -mb-9 w-full max-w-[1632px] max-md:mb-2.5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d93a0d34-0400-4d0d-a167-19801ba463b0?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3"
            alt="High fidelity screen preview"
            className="object-contain w-full aspect-[0.82] bg-zinc-600 bg-opacity-50 rounded-[50px] max-md:max-w-full"
          />
          <div className="flex flex-col px-16 py-24 mt-24 w-full border-white border-solid bg-zinc-600 bg-opacity-50 border-[3px] rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <IconGroup />
            <ImageGrid />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HighFidelityScreen;