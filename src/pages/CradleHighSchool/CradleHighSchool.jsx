import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";

function CradleHighSchool() {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-16 pb-32 bg-zinc-950 max-md:px-5 max-md:pb-24">
      <div className="flex flex-col w-full max-w-[1635px] max-md:max-w-full">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default CradleHighSchool;