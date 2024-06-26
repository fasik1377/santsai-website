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
				secdesc="Work at Lorem Ipsum. Your career starts here." 
			/>

			<section>
				<div className="container mx-auto py-5 col-lg-10 col-xl-9">
					<div className="mb-5 text-center">
						<h2 className="display-6 mb-1">Open Positions</h2>
						<p className="text-muted">We see collaboration, growth and great work in your future.</p>
					</div>
					<div className="row col-lg-10 m-auto">
						<div className="col-md-5 mb-4">
							<div className="hdrcolor h5">Front-End Developer </div>
							<hr width="40%" />
							<Positions 
								ptitle="Senior Front-End Developer"
								pcity="Full Time · Remote"
							/>
							<Positions 
								ptitle="Junior Front-End Developer"
								pcity="Full Time · Remote"
							/>
						</div>
						<div className="col-md-5 mb-4 offset-lg-1">
							<div className="hdrcolor h5">Back-End Developer</div>
							<hr width="40%" />
							<Positions 
								ptitle="Senior Back-End Developer"
								pcity="Full Time · Remote"
							/>
						</div>
						<div className="col-md-5">
							<div className="hdrcolor h5">Graphic Designer</div>
							<hr width="40%" />
							<Positions 
								ptitle="UI/UX Designer"
								pcity="Full Time · Remote"
							/>
							<Positions 
								ptitle="Full-Stack Developer"
								pcity="Full Time · Remote"
							/>
							<Positions 
								ptitle="Social Media Manager"
								pcity="Full Time · Remote"
							/>
						</div>
						<div className="col-md-5 offset-lg-1">
							<div className="hdrcolor h5">Mobile App Developer</div>
							<hr width="40%" />
							<Positions 
								ptitle="Flutter Developer"
								pcity="Full Time · Remote"
							/>
							<Positions 
								ptitle="Reat Native Developer"
								pcity="Full Time · Remote"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-light">
				<div className="container mx-auto py-5 col-lg-10 col-xl-9">
					<div className="mb-5 text-center">
						<h2 className="display-6 mb-1">Life Here</h2>
						<p className="text-muted">We anticipate great work, growth, and cooperation from you in the future.</p>
					</div>
					<div className="row col-lg-10 m-auto">
						<div className="col-md-6">
							<Life ltitle="Personality" ldesc="A great programmer cares about your product. They are positive, willing to go the distance to get the job done and bring their best everyday." />
							<Life ltitle="Professional Development" ldesc="A professional development plan creates actionable strategies or steps to expand your skills or enhance your career performance." />
						</div>
						<div className="col-md-6">
							<Life ltitle="Occasional Parties" ldesc="It usually implies a relaxed and friendly atmosphere where guests can wear whatever they feel comfortable and appropriate for the occasion" />
							<Life ltitle="Flexible hours" ldesc="This concept is common in the software development industry, where professionals can adjust their start and end times of the workday to better fit personal commitments or to work when they feel most productive." />
						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default Career;