import React from 'react';
// import AppFlow from './AppFlow/AppFlow'
import CradleHighSchool from "./CradleHighSchool/CradleHighSchool"
import HighFidelityScreen from './HighFidelityScreen/HighFidelityScreen'
import ProblemStatement from './ProblemStatement/ProblemStatement'
import ThankYouPage from './ThankYouPage/ThankYouPage'


function CaseStudy({ icon, alt, username }) {
  return (
    <div >
        {/* <AppFlow /> */}
        {/* <CradleHighSchool />
        <HighFidelityScreen/> */}
        <ProblemStatement/>
        <ThankYouPage/>
     
    </div>
  );
}

export default CaseStudy;