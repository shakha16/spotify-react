import React, { useEffect, useState } from "react";
import Artist from "../components/Artist";
import Album from "../components/Album";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
	const [playlists, setPlaylists] = useState([])

	useEffect(() => {
		const token = window.localStorage.getItem('token')

		if(token) {
			const getSaveds = async () => {
				const res = await axios.get("https://api.spotify.com/v1/me/playlists?limit=50&offset=0", {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				if(res.status === 200 || res.status === 201) return res.data?.items

			}

			getSaveds()
				.then(res => setPlaylists(res))
		}


	}, []);

	console.log(playlists);

	return (
		<div className="container overflow-y-scroll overflow-x-hidden">
			<div className="flex overflow-x-scroll overflow-y-hidden gap-4">
				{
					playlists.length > 0 ? (
						playlists.map(item => <Link to={`/${item.id}`} key={item.id} ><Artist name={item.name} surname={""} avatar={item.images[0].url} /></Link>)
					) :
					"loading..."
				}
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<img src={"/icons/preview.svg"} alt="" />
					<div>
						<h4 className="text-medium">#SPOTIFYWRAPPED</h4>
						<h2 className="demi-bold">Your 2021 in review</h2>
					</div>
				</div>
				<div className="flex gap-4 overflow-x-scroll"></div>
			</div>
			<h3 className="demi-bold">Editor's picks</h3>
			<div className="flex gap-4 overflow-x-scroll overflow-y-hidden pt-3">
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={"/icons/erp.svg"}
				/>
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={"/icons/erp.svg"}
				/>
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={"/icons/erp.svg"}
				/>
				<Album
					title={"Ed Sheeran, Big Sean, Juice WRLD, Post Malone"}
					avatar={"/icons/erp.svg"}
				/>
			</div>
		</div>
	);
};

export default Home;
