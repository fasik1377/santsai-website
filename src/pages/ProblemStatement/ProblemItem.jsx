import React from 'react';

function ProblemItem({ number, description }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col text-white max-md:mt-10">
        <div className="px-12 text-4xl whitespace-nowrap rounded-3xl border border-white border-solid bg-zinc-300 bg-opacity-20 h-[113px] w-[113px] max-md:px-5">
          {number}
        </div>
        <p className="mt-14 text-xl max-md:mt-10">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProblemItem;