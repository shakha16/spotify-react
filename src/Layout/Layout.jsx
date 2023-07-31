import { Outlet } from "react-router-dom";

export default function Layout(props) {
	return (
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
                <Outlet/>    
            </main>
			<footer className="w-full fixed bottom-5 bg-black cu">
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
		</div>
	);
}
