import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Song from "./pages/Song";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout/>} >
					<Route index element={<Home/>} />
					<Route path="/:id" element={<Playlist/>} />
				</Route>
				<Route path="/f" element={<Song/>}/>
			</Routes>
		</>
	);
}

export default App;
