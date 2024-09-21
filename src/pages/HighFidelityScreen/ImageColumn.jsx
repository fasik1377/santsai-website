import React from "react";

function ImageColumn({ images, className }) {
  return (
    <div className={`flex flex-col ${className} max-md:ml-0 max-md:w-full`}>
      <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image.src}
            alt=""
            className={`object-contain w-full rounded-xl aspect-${image.aspectRatio} ${
              index > 0 ? "mt-7" : ""
            } max-md:max-w-full`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageColumn;