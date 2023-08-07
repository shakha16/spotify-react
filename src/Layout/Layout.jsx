import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { MdOutlinePause } from "react-icons/md";
import { BiBluetooth } from "react-icons/bi";
import Song from "../components/Song";

export const context = createContext("");

export default function Layout() {
	const [token, setToken] = useState(null);
	const [text, setText] = useState("HOME");
	const [openPLayer, setOpenPlayer] = useState(false);

	const chageText = (newText) => {
		setText(newText);
	};

	const client_id = "f2e286ece2574ad6b334b55d03764483";
	const REDIRECT_URI = "http://localhost:5173";
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
	const RESPONSE_TYPE = "token";

	useEffect(() => {
		const hash = window.location.hash;
		let token = window.localStorage.getItem("token");

		if (!token && hash) {
			token = hash
				.substring(1)
				.split("&")
				.find((elem) => elem.startsWith("access_token"))
				.split("=")[1];

			window.location.href = "";
			window.localStorage.setItem("token", token);
		}

		setToken(token);
	}, []);

	if (!token) {
		return (
			<a
				href={`${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-library-read`}
			>
				<button>log in</button>
			</a>
		);
	}

	return (
		<context.Provider value={{ text, chageText }}>
			<div className="relative">
				<header className="pt-[25px] pb-4">
					<div className="container flex items-center justify-between">
						<h1 className="text">Recently played</h1>
						<div className="flex items-center gap-[22px] bo">
							<img src={"/icons/Vector.svg"} alt="" />
							<img src={"/icons/time.svg"} alt="" />
							<img src={"/icons/settings.svg"} alt="" />
						</div>
					</div>
				</header>
				<main className="overflow-scroll">
					<Outlet />
					<Song isOpen={openPLayer} close={setOpenPlayer} />
				</main>
				{!openPLayer ? (
					<>
						<div className="fixed bottom-14 left-4 right-4 h-20 bg-[#3A0E17] rounded-lg">
							<div className="w-full h-full flex items-center justify-between p-5">
								<img src="/images/song.png" alt="" />
								<div
									onClick={() => setOpenPlayer(!openPLayer)}
									className="w-[90%] h-full flex flex-col items-start justify-between px-2"
								>
									<marquee>
										From Me to You - Mono / Remastered
									</marquee>
									<span className="player2 text-[#17B54E] flex items-center gap-2">
										<img
											src="/icons/bluetooth.svg"
											alt=""
										/>
										BEATSPILL+
									</span>
								</div>
								<div className="flex items-center gap-1">
									<BiBluetooth size={30} color="#17B54E" />
									<MdOutlinePause size={40} />
								</div>
							</div>
						</div>
						<footer className="w-full fixed bottom-0 bg-black h-14 flex items-center">
							<div className="container flex justify-around">
								<div className="cursor-pointer flex flex-col justify-center items-center">
									<img src={"/icons/home.svg"} alt="" />
									<h3 className="footer-text">{text}</h3>
								</div>
								<div className="cursor-pointer flex flex-col justify-center items-center">
									<img src={"/icons/search.svg"} alt="" />
									<h3 className="footer-text">Search</h3>
								</div>
								<div className="cursor-pointer flex flex-col justify-center items-center">
									<img src={"/icons/library.svg"} alt="" />
									<h3 className="footer-text">Library</h3>
								</div>
							</div>
						</footer>
					</>
				) : null}
			</div>
		</context.Provider>
	);
}
