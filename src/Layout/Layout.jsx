import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { MdOutlinePause } from "react-icons/md";
import { BiBluetooth } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import Song from "../components/Song";

export const playerCTX = createContext({ tracks: [], songIdx: 0 });

export default function Layout() {
	const [token, setToken] = useState(null);
	const [player, setPlayer] = useState(null);
	const [tracks, setTracks] = useState({ arr: [], idx: 0 });
	const [currentTrack, setCurrentTrack] = useState(null);
	const [openPLayer, setOpenPlayer] = useState(false);
	const [play, setPLay] = useState(false);

	const setSong = (data) => {
		setCurrentTrack(data.tracks[data.songIdx]);
		setTracks({ arr: data.tracks, idx: data.songIdx });
		setPLay(true);
	};

	console.log(play);

	useEffect(() => {
		const audio = document.getElementById("player");

		if (audio) {
			if (play) {
				audio.play();
			} else {
				audio.pause();
			}

			audio.onended = () => {
				console.log(tracks.arr.length, tracks.idx);

				if (tracks.arr.length === tracks.idx + 1) {
					console.log(tracks.arr);
					setTracks({ arr: tracks.arr, idx: 0 });
					setCurrentTrack(tracks.arr[0]);
					audio.src = tracks.arr[0].preview_url;
				} else {
					setTracks({ arr: tracks.arr, idx: tracks.idx + 1 });
					setCurrentTrack(tracks.arr[tracks.idx + 1]);
					audio.src = tracks.arr[tracks.idx].preview_url;
				}
			};
		}
	});

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

	// console.log(currentTrack);

	return (
		<playerCTX.Provider value={{ player, setSong }}>
			<div className="relative pb-[100px]">
				<main className="overflow-scroll">
					<Outlet />
					<Song isOpen={openPLayer} close={setOpenPlayer} track={currentTrack} />
				</main>
				{!openPLayer ? (
					<>
						<div className="fixed bottom-14 left-4 right-4 h-20 bg-[#3A0E17] rounded-lg">
							<div className="w-full h-full flex items-center justify-between p-5">
								<img
									src={
										currentTrack?.album?.images[0].url || "/images/song.png"
									}
									alt=""
									className="w-[37px] h-[37px]"
								/>
								<div
									onClick={() => setOpenPlayer(!openPLayer)}
									className="w-[90%] h-full flex flex-col items-start justify-between px-2"
								>
									<marquee>{currentTrack?.name}</marquee>
								</div>
								<div className="flex items-center gap-1">
									<BiBluetooth size={30} color="#17B54E" />
									<div onClick={() => setPLay(!play)} >
										{play ? (
											<MdOutlinePause size={40} />
											) : (
											<FaPlay size={25} />
										)}
									</div>
								</div>
							</div>
						</div>
						<footer className="w-full fixed bottom-0 bg-black h-14 flex items-center">
							<div className="container flex justify-around">
								<div className="cursor-pointer flex flex-col justify-center items-center">
									<img src={"/icons/home.svg"} alt="" />
									<h3 className="footer-text">Home</h3>
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
				<audio src={currentTrack?.preview_url} id="player"></audio>
			</div>
		</playerCTX.Provider>
	);
}
