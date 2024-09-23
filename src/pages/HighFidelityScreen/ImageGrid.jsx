import React from "react";
import ImageColumn from "./ImageColumn";

function ImageGrid() {
  const leftColumnImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/46d5a6e2855a8944a31e215547e7f7e38d7f7e8ac2f019e4595820c689fb989f?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3", aspectRatio: "square" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f0a1402c12b3bf6746ecba2b173cc89b0f21c00c92815637c9dbc2057d164dc?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3", aspectRatio: "[0.77]" },
  ];

  const rightColumnImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4986b8092cb988a24781fa07511d43439bf9a8a338ff17a320a7fd5a3edc881a?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3", aspectRatio: "[0.86]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69a08702e3275bfb309e7ec0426df9a0db5442939a1bcd11fc8198e5ba62bd0e?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3", aspectRatio: "[0.86]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7b48c1a77de592d757197260e534c1cdcea8b3ebb82215456b03e5f24d9b6b6?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3", aspectRatio: "[0.86]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b126c224fbee27e95c30e49ecb9cf4644636d581fb09477bb3a909e53439d35e?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3", aspectRatio: "[0.86]" },
  ];

  return (
    <div className="mt-14 mb-0 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <ImageColumn images={leftColumnImages} className="w-[32%]" />
        <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <ImageColumn images={rightColumnImages.slice(0, 2)} className="w-6/12" />
                <ImageColumn images={rightColumnImages.slice(2)} className="w-6/12 ml-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;