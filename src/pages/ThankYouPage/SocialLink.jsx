import React from 'react';

function SocialLink({ icon, alt, username }) {
  return (
    <div className="flex gap-10 items-center mt-12 max-w-full whitespace-nowrap w-[666px] max-md:mt-10">
      <img loading="lazy" src={icon} alt={alt} className="object-contain shrink-0 my-auto aspect-square w-[50px]" />
      <div className="flex-auto w-[549px] max-md:max-w-full">
        {username}
      </div>
    </div>
  );
}

export default SocialLink;
