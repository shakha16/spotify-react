import { useState } from "react";
import Artist from "./components/Artist";
import Album from "./components/Album";

function App() {
	return (
		<>
			<div className="wrapper">
				<div className="w-[200px] bg-red-500 h-[200px]"></div>
				<div className="w-[200px] bg-blue-500 h-[200px]"></div>
				<Artist />
				<Album/>
			</div>
		</>
	);
}

export default App;
