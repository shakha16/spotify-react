import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


export const context = createContext('')

export default function Layout() {
	const [token, setToken] = useState(null);
	const [text, setText] = useState('HOME')

	const chageText = (newText) => {
		setText(newText)
	}

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

		setToken(token)
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

	console.log(text);

	return (
		<context.Provider value={{text, chageText}} >
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
				<main>
					<Outlet />
				</main>
				<footer className="w-full fixed bottom-5 bg-black cu">
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
			</div>
		</context.Provider>
	);
}
