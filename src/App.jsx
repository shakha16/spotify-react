import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Playlist from "./pages/Playlist";
import IndiePop from "./pages/IndiePop";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="/:id" element={<Playlist />} />
					<Route path="IndiePop" element={<IndiePop />} />
				</Route>
				<Route path="start" element={<Start />} />
			</Routes>
		</>
	);
}

export default App;
