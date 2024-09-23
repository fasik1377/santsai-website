import React from 'react';
import ProblemItem from './ProblemItem';

const problemItems = [
  {
    number: '1',
    description: 'The previous school portal had a poorly structured design, making every task tedious. As a result, teachers often resorted to using manual methods for academic documentation.'
  },
  {
    number: '2',
    description: 'Teachers need a user-friendly solution that enables them to easily upload and organize their teaching resources within the portal, streamlining their workflow and enhancing productivity.'
  },
  {
    number: '3',
    description: 'School portal lacks integrated payment system, hampering efficiency and user experience. A seamless solution is needed to streamline transactions and improve financial management.'
  }
];

function ProblemStatement() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-60 bg-zinc-950 max-md:px-5 max-md:py-24">
      <div className="flex flex-col w-full max-w-[1632px] max-md:max-w-full">
        <h1 className="self-start text-6xl font-bold text-white max-md:text-4xl">
          Problem
        </h1>
        <p className="mt-6 text-4xl text-white max-md:max-w-full">
          The objective of the problem statement is to highlight the deficiencies or challenges within the existing system that need to be addressed.
        </p>
        <div className="mt-40 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {problemItems.map((item, index) => (
              <ProblemItem key={index} number={item.number} description={item.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemStatement;