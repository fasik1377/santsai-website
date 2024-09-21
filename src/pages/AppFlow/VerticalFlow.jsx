import React from 'react';
import FlowBox from './FlowBox';

function VerticalFlow({ items, className }) {
  return (
    <div className={`flex flex-col items-center mt-24 max-w-full text-4xl text-center text-white whitespace-nowrap w-[254px] max-md:mt-10 ${className}`}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3366227fc4721fe58f04024e445e49b367ffeb87cbbbf02b86a7bb90ba774eb5?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain w-1.5 aspect-[0.06] stroke-[1px] stroke-white" />
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <FlowBox text={item} extraClasses="px-6 self-stretch" />
          {index < items.length - 1 && (
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47151f0d281ff36a1812d5a7c03caf2bc468456d20cac24d2db0c2383efefea8?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain w-px aspect-[0.01] stroke-[1px] stroke-white" />
          )}
        </React.Fragment>
      ))}
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/351b06a9e495f5fe33d77ac6d4c58487c3002ae9e7ffc90ffb285468549c0472?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain w-1.5 aspect-[0.04] stroke-[1px] stroke-white" />
    </div>
  );
}

export default VerticalFlow;