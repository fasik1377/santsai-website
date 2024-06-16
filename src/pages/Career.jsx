import React from "react";
import Secheader from "./common/Secondaryheader";
import CheckIcon from '@material-ui/icons/Check';


const Life = (props) => {
	return(
		<div className="d-flex align-items-center mb-4">
			<span className="career_life"><CheckIcon /></span>
			<span className="d-flex flex-column">
				<h5>{props.ltitle}</h5>
				<p className="small text-muted">{props.ldesc}</p>
			</span>
		</div>
	);
};


const Positions = (props) => {
	return(		
		<div className="d-flex justify-content-between align-items-center mb-3">
			<span className="d-flex flex-column">
				<p className="mb-0">{props.ptitle}</p>
				<p className="small text-muted">{props.pcity}</p>
			</span>
			<span>
				<button className="btn btn_custom mr-4">Apply</button>
			</span>
		</div>
	);
};

const Career = () => {
	return(

		<>
			<Secheader 
				sectitle="We Are Hiring!" 
				//secdesc="Work at Lorem Ipsum. Your career starts here." 
			/>

			<section>
				<div className="container mx-auto py-5 col-lg-10 col-xl-9">
					<div className="mb-5 text-center">
						<h2 className="display-6 mb-1">Open Positions</h2>
						<p className="text-muted">We see collaboration, growth and great work in your future. For the time being there is no open position</p>
					</div>
				</div>
			</section>


		</>
	);
};

export default Career;