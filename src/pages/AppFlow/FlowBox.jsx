import React from 'react';

function FlowBox({ text, extraClasses = '' }) {
  return (
    <div className={`px-10 py-7 rounded-3xl border border-white border-solid bg-zinc-300 bg-opacity-20 max-md:px-5 ${extraClasses}`}>
      {text}
    </div>
  );
}

export default FlowBox;