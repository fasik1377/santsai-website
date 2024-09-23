import React from "react";

function IconGroup() {
  return (
    <div className="flex gap-5 self-start ml-3 max-md:ml-2.5">
      <div className="flex shrink-0 w-10 h-10 bg-white rounded-full" />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/98482bc6b301737d84de9d93e3794d80ca95490f26858d85247de00418cf943a?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3"
        alt=""
        className="object-contain shrink-0 self-start aspect-[1.13] w-[34px]"
      />
      <div className="flex shrink-0 w-10 h-10 bg-white" />
    </div>
  );
}

export default IconGroup;