import React from "react";

function ProjectInfo() {
  const projectStages = ["Research", "Design", "Prototype"];

  return (
    <section className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto w-full text-white max-md:mt-10 max-md:max-w-full">
        <h1 className="text-4xl max-md:max-w-full">
          <span className="text-6xl font-bold text-white leading-[96px]">
            Cradle High
          </span>{" "}
          <br />
          <span className="text-white">School Portal & Website</span>
        </h1>
        <nav className="flex gap-5 justify-between mt-9 max-w-full text-xl whitespace-nowrap w-[372px]">
          {projectStages.map((stage, index) => (
            <div key={index}>{stage}</div>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default ProjectInfo;