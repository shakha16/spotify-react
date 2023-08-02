import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout/>} >
					<Route index element={<Home/>} />
					<Route path="/:id" element={<Playlist/>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
