import React, {Component, PropTypes} from "react";
import { browserHistory } from 'react-router';
import axios from 'axios';
import querystring from 'querystring';


class Match extends Component{
	constructor( props ) {
		super( props );
		this.state = {
			matchConfirm : "CONFIRM"
		};
	}

	render(){
		console.log("MATCHCONFIRM: ", this.state.matchConfirm);
		const match = [
			{
				mentorName: "Justin",
				mentorEmail: "Justin@gmail.com",
				teachingTopic: "DSA",
				students: ["Iliass, Jung, Luis, Quan"],
				img_path: "/c805236406941d2ba6b9398291266281.png"
			},
			{
				mentorName: "Justin",
				mentorEmail: "Justin@gmail.com",
				teachingTopic: "DSA",
				students: ["Iliass, Jung, Luis, Quan"],
				img_path: "/c805236406941d2ba6b9398291266281.png"
			},
			{
				mentorName: "Justin",
				mentorEmail: "Justin@gmail.com",
				teachingTopic: "DSA",
				students: ["Iliass, Jung, Luis, Quan"],
				img_path: "/c805236406941d2ba6b9398291266281.png"
			},
			{
				mentorName: "Justin",
				mentorEmail: "Justin@gmail.com",
				teachingTopic: "DSA",
				students: ["Iliass, Jung, Luis, Quan"],
				img_path: "/c805236406941d2ba6b9398291266281.png"
			},


		];

		const notifyMentors = () => {
			this.setState({ matchConfirm: "DONE" });

			axios.post("/api/email",
				querystring.stringify({
				from: "edtrack@googlegroups.com",
				to: "edtrack2017@gmail.com",
				students: "Iliass, Jung, Luis, Quan",
				teachingTopic: "DSA",
			})
			);

		};

		return (
			<div className="row" style={{height: "100%"}}>

					<div > {/*LEFT PANEL*/}
						<div className="col s8" style={DashStyles}>
							<div>
								<h1>Mentor Groups </h1>
							</div>

							{ /*MENTOR GROUPS CARDS*/

								match.map( (mentor, i) => (
									<center key={i} style={cardContainer}>
										<div id ="mentorCard" className="card horizontal" >

											<div className="card-image" style={cardItem}>

												<figure style={imgProfile}>
													<img src="/a4660052d5b6fee6192db0b5aeede812.png" />
													<figcaption>{mentor.mentorName}</figcaption>
												</figure>

											</div>

											<div  className="card-stacked" style={cardItem}>
												<div className="card-content">
													<p className="header" id="students">{mentor.students}
													</p>
												</div>
											</div>

											<div  className="card-stacked" style={cardItem}>
												<div className="card-content">
													<p>Topic</p>
													<p className="header" id="teachingTopic">
														<strong>{mentor.teachingTopic}</strong>
													</p>
												</div>
											</div>


										</div>
									</center>
								))
							}

						</div>


						{/*RIGHT PANEL*/}
						<div className="col s4" style={rightPaneStyles}>

							{
								this.state.matchConfirm === "CONFIRM" ? (
									<div>
										<center style={{width: "100%"}}>
											<h2 style={matchH2Tag}>Before we notify your mentors, do you approve of these groups ?
											</h2>
										</center>

										<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={notifyMentors} >Yes, Notify Mentors
												<i className="material-icons right">send</i>
										</button>
										<br/><br/>
										<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={()=>browserHistory.push(`/instructor/1`)} >Back
												<i className="material-icons right">send</i>
										</button>
									</div>

								) : (

									<div>
										<center style={{width: "100%"}}>
											<h2 style={matchH2Tag}><strong>Done !</strong>We sent your mentors an email with all the info they'll need.</h2>
										</center>

										<button className="btn waves-effect waves-light" id="btnMatch" type="button" onClick={()=>browserHistory.push(`/instructor/1`)} >Return Home
												<i className="material-icons right">send</i>
										</button>
									</div>
								)
							}


						</div>

					</div>

			</div>
		);
	}

}



let cardContainer = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
}

let cardItem = {

}

// let cardImg = {
// 	height: "80px",
// 	width: "auto",
// 	backgroundColor: "#545F7A",
// 	borderRadius: "50%"
// };

// let cardTitle = {
// 	color: "#545F7A",
// 	flex:"2"
// };


// let cardHeader = {
// 	display: "flex"
// };


let DashStyles = {
	backgroundColor: "white",
	color: "#545F7A",
	height: "100%",
	minHeight: "100vh"
};

// let cardContent = {
// 	fontColor: "#545F7A",
// 	backgroundColor: "#3F485D",
// 	width: "100%",
// 	height: "175px"
// };
// let listStyle = {
// 	marginTop: "70px",
// 	height: "560px",
// 	overflow: "auto"
// };

let rightPaneStyles = {
	// display: "flex",
	// flexDirection: "column",
	// justifyContent: "center",
	width: "317px",
	height: "84px",
	fontFamily: "Rubik",
	fontSize: "24px",
	lineHeight: "28px",
	color: "#545F7A",
	margin: "auto",
};

let imgProfile = {
	height: "150px",
	width: "150px",
	float: "left",
};

let matchH2Tag = {
	fontWeight: "200"
};



export default Match;
