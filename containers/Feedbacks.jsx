import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import { Fade } from "react-reveal";

const Feedbacks = () => {
	return (
		<section className="">
			<Container>
				<Fade bottom duration={1000} distance="40px">
					<div className="">
						<div>
							<div className="">
								<i className="" />
							</div>
						</div>
						<div className="">
							<h4 className="">
								
							</h4>
						</div>
					</div>
					<Row className="row-grid align-items-center">
						{feedbacks.map((data, i) => {
							return (
								<Col key={i} lg={6}>
									<FeedbackCard data={data} />
								</Col>
							);
						})}
					</Row>
				</Fade>
			</Container>
		</section>
	);
};

export default Feedbacks;
