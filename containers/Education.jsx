import React from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";

const Education = () => {
	return (
		<section className="">
			<Container>
				<div className="">
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
					{educationInfo.map((info) => {
						return (
							<Col
								className="order-lg-1"
								lg="6"
								key={info.schoolName}
							>
								<EducationCard education={info} />
							</Col>
						);
					})}
				</Row>
			</Container>
			<div className="separator separator-bottom separator-skew zindex-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						className="fill-white"
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div>
		</section>
	);
};

export default Education;
