import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Start from "./pages/Start";
Start
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout/>} >
					<Route index element={<Home/>} />
				</Route>
						<Route path="start" element={<Start/>}/>
			</Routes>
			
		</>
	);
}

export default App;
