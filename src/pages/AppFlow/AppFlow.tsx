import React from 'react';
import FlowBox from './FlowBox';
import VerticalFlow from './VerticalFlow';

function AppFlow() {
  const adminFlowItems = ['Admins', 'Users', 'Academic', 'Financial'];
  const studentFlowItems = ['Students', 'Academic', 'Transcript', 'Uploads'];

  return (
    <main className="flex overflow-hidden flex-col px-20 pt-16 pb-60 bg-zinc-950 max-md:px-5 max-md:pb-24">
      <section className="flex flex-col self-center w-full text-4xl text-white max-w-[1632px] max-md:max-w-full">
        <h1 className="self-start text-6xl font-bold max-md:text-4xl">
          App Flow
        </h1>
        <p className="mt-5 text-4xl max-md:max-w-full">
          The app flow aims to deliver a seamless and intuitive user experience, enabling effortless navigation, easy access to features, and efficient task completion.
        </p>
        <div className="flex flex-wrap items-start self-center mt-32 max-w-full text-center w-[978px] max-md:mt-10">
          <FlowBox text="School Website" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba1f4b683e013c1db44cbc580132404e94f58f4a7e861a69f1d861b461969a23?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain shrink-0 mt-14 max-w-full aspect-[23.26] stroke-[1px] stroke-white w-[138px] max-md:mt-10" />
          <div className="flex flex-col self-stretch max-md:max-w-full">
            <FlowBox text="Super Admin Portal" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc2d167ed0f171195d09330eb7f2bf52281fcc308401b58ca7fdd980e486c559?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain self-center w-1.5 aspect-[0.06] stroke-[1px] stroke-white" />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between self-center mt-24 ml-7 max-w-full text-center w-[1087px] max-md:mt-10">
          <FlowBox text="Login" extraClasses="px-16 whitespace-nowrap" />
          <FlowBox text="User Creation" extraClasses="px-9" />
        </div>
      </section>
      <div className="flex gap-5 justify-between mt-24 max-md:flex-col max-md:items-stretch max-md:gap-0">
        <VerticalFlow items={adminFlowItems} className="ml-36 max-md:ml-2.5" />
        <section className="flex z-10 flex-col self-center mt-0 max-w-full w-[804px] max-md:mt-10">
          <div className="flex flex-wrap gap-5 justify-between items-end self-end max-w-full text-4xl text-center text-white whitespace-nowrap w-[712px]">
            <div className="flex flex-col items-center mt-24 max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3366227fc4721fe58f04024e445e49b367ffeb87cbbbf02b86a7bb90ba774eb5?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain w-1.5 aspect-[0.06] stroke-[1px] stroke-white" />
              <FlowBox text="Teachers" extraClasses="px-9" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47151f0d281ff36a1812d5a7c03caf2bc468456d20cac24d2db0c2383efefea8?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain w-px aspect-[0.01] stroke-[1px] stroke-white" />
            </div>
            <div className="flex flex-col items-center mt-24 max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3366227fc4721fe58f04024e445e49b367ffeb87cbbbf02b86a7bb90ba774eb5?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain w-1.5 aspect-[0.06] stroke-[1px] stroke-white" />
              <FlowBox text="Parents" extraClasses="px-14" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47151f0d281ff36a1812d5a7c03caf2bc468456d20cac24d2db0c2383efefea8?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain w-px aspect-[0.01] stroke-[1px] stroke-white" />
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc2d167ed0f171195d09330eb7f2bf52281fcc308401b58ca7fdd980e486c559?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain shrink-0 self-start w-1.5 aspect-[0.06] stroke-[1px] stroke-white" />
          </div>
          <FlowBox text="Dashboard" extraClasses="px-16 self-center w-[848px] max-md:max-w-full" />
          <div className="self-center max-w-full w-[622px]">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center text-4xl text-center text-white whitespace-nowrap max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47151f0d281ff36a1812d5a7c03caf2bc468456d20cac24d2db0c2383efefea8?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain w-px aspect-[0.01] stroke-[1px] stroke-white" />
                  <FlowBox text="Student" extraClasses="px-12" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47151f0d281ff36a1812d5a7c03caf2bc468456d20cac24d2db0c2383efefea8?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain w-px aspect-[0.01] stroke-[1px] stroke-white" />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center text-4xl text-center text-white whitespace-nowrap max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47151f0d281ff36a1812d5a7c03caf2bc468456d20cac24d2db0c2383efefea8?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain w-px aspect-[0.01] stroke-[1px] stroke-white" />
                  <FlowBox text="Student" extraClasses="px-12" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47151f0d281ff36a1812d5a7c03caf2bc468456d20cac24d2db0c2383efefea8?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain w-px aspect-[0.01] stroke-[1px] stroke-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-center max-w-full w-[622px]">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-4xl text-center text-white whitespace-nowrap max-md:mt-10">
                  <FlowBox text="Class" extraClasses="px-16" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47151f0d281ff36a1812d5a7c03caf2bc468456d20cac24d2db0c2383efefea8?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain self-center w-px aspect-[0.01] stroke-[1px] stroke-white" />
                  <FlowBox text="Uploads" extraClasses="px-12" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47151f0d281ff36a1812d5a7c03caf2bc468456d20cac24d2db0c2383efefea8?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain self-center w-px aspect-[0.01] stroke-[1px] stroke-white" />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-4xl text-center text-white whitespace-nowrap max-md:mt-10">
                  <FlowBox text="Payments" extraClasses="px-8" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a48c856a8cb1469e02f366dcf0c79a6807f46428599d7c8474e41f22bc9ab46?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain self-center w-px aspect-[0] stroke-[1px] stroke-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <VerticalFlow items={studentFlowItems} className="mr-36 max-md:mr-2.5" />
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/20378122888e6b08e9d2259c57e56bfaf48650d103079b0961308556ee6990a6?placeholderIfAbsent=true&apiKey=82abcb2e8ceb4ef8b305aa097e031da3" alt="" className="object-contain z-10 mt-0 ml-64 w-1.5 aspect-[0.04] stroke-[1px] stroke-white max-md:ml-2.5" />
      <FlowBox text="Communication" extraClasses="px-16 self-center mt-0 w-[848px] max-md:max-w-full" />
    </main>
  );
}

export default AppFlow;