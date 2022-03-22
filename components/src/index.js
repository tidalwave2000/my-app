import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";

import ApprovalCard from "./ApprovalCard";
import { faker } from "@faker-js/faker";

const App = () => {
	return (
		<div className=" ui container comments">
			<ApprovalCard>
				<div>
					<h1> Warning!!</h1>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>

			<ApprovalCard>
				{/* Call CommentDetial */}
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Sam"
					timeAgo="Today at 4:45PM"
					commentText=" Nice Blog "
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Alex"
					timeAgo="Today at 2:00PM"
					commentText=" This post is the most "
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Jane"
					timeAgo="Yesterday at 5:00PM"
					commentText=" Mind blowing blog post"
				/>
			</ApprovalCard>
		</div>
	);
};
//start adding components

ReactDom.render(<App />, document.querySelector("#root"));
