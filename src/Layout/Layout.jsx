import { Children } from "react";
import vector from "../img/Vector.svg";
import time from "../img/time.svg";
import settings from "../img/settings.svg";
import home from "../img/home.svg";
import search from "../img/search.svg";
import library from "../img/library.svg";

export default function Layout(props) {
	return (
		<div className="relative">
			<header className="pt-[25px] pb-4">
				<div className="container flex items-center justify-between">
					<h1 className="text">Recently played</h1>
					<div className="flex items-center gap-[22px] bo">
						<img src={vector} alt="" />
						<img src={time} alt="" />
						<img src={settings} alt="" />
					</div>
				</div>
			</header>
			<main>{props.children}</main>
			<footer className="w-full fixed bottom-5">
				<div className="container flex justify-around">
					<div className="flex flex-col justify-center items-center">
						<img src={home} alt="" />
						<h3>Home</h3>
					</div>
					<div className="flex flex-col justify-center items-center">
						<img src={search} alt="" />
						<h3>Search</h3>
					</div>
					<div className="flex flex-col justify-center items-center">
						<img src={library} alt="" />
						<h3>Library</h3>
					</div>
				</div>
			</footer>
		</div>
	);
}
