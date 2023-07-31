import React from "react";
import Artist from "../components/Artist";
import Album from "../components/Album";

const Home = () => {
	return (
		<div className="container overflow-y-scroll overflow-x-hidden">
			<div className="flex overflow-x-scroll overflow-y-hidden gap-4">
				<Artist name={"Alex"} surname={"Adams"} avatar={"/icons/erp.svg"} />
				<Artist name={"Alex"} surname={"Adams"} avatar={"/icons/erp.svg"} />
				<Artist name={"Alex"} surname={"Adams"} avatar={"/icons/erp.svg"} />
				<Artist name={"Alex"} surname={"Adams"} avatar={"/icons/erp.svg"} />
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<img src={"/icons/preview.svg"} alt="" />
					<div>
						<h4 className="text-medium">#SPOTIFYWRAPPED</h4>
						<h2 className="demi-bold">Your 2021 in review</h2>
					</div>
				</div>
				<div className="flex gap-4 overflow-x-scroll"></div>
			</div>
			<h3 className="demi-bold">Editor’s picks</h3>
			<div className="flex gap-4 overflow-x-scroll overflow-y-hidden pt-3">
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={"/icons/erp.svg"}
				/>
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={"/icons/erp.svg"}
				/>
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={"/icons/erp.svg"}
				/>
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={"/icons/erp.svg"}
				/>
			</div>
		</div>
	);
};

export default Home;
