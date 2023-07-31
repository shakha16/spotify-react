import { useState } from "react";
import one from "./img/one.svg";
import two from "./img/two.svg";
import three from "./img/three.svg";
import four from "./img/four.svg";
import preview from "./img/preview.svg";
import first from "./img/first.svg";
import second from "./img/second.svg";
import pre from "./img/pre.svg";
import rep from "./img/rep.svg";
import erp from "./img/erp.svg";
import Artist from "./components/Artist";
import Album from "./components/Album";

function App() {
	return (
		<div className="container overflow-y-scroll overflow-x-hidden">
			<div className="flex overflow-x-scroll overflow-y-hidden gap-4">
				<Artist name={"Alex"} surname={"Adams"} avatar={rep} />
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={rep}
				/>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<img src={preview} alt="" />
					<div>
						<h4 className="text-medium">#SPOTIFYWRAPPED</h4>
						<h2 className="demi-bold">Your 2021 in review</h2>
					</div>
				</div>
				<div className="flex gap-4 overflow-x-scroll"></div>
			</div>
			<h3 className="demi-bold">Editor’s picks</h3>
			<div className="flex gap-4 overflow-x-scroll pt-3">
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={rep}
				/>
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={rep}
				/>
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={rep}
				/>
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={rep}
				/>
			</div>
		</div>
	);
}

export default App;
