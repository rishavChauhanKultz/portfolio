import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";

import { Fade } from "react-reveal";

import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
	return (
		<section className="">
			<Container>
				<Fade bottom duration={1000} distance="40px">
					<div className="d-flex p-4">
						<div>
							<div className="">
								<i className="" />
							</div>
						</div>
						<div className="">
							<h4 className=""></h4>
						</div>
					</div>
					<Row className="row-grid align-items-center">
						{experience.map((data, i) => {
							return <ExperienceCard key={i} data={data} />;
						})}
					</Row>
				</Fade>
			</Container>
		</section>
	);
};

export default Experience;
