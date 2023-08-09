import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { AiOutlineEllipsis } from "react-icons/ai";
import IndieItem from "../components/indieItem";
import { useParams } from "react-router-dom";
import { playerCTX } from "../Layout/Layout";


function IndiePop() {
	const [tracks, setTracks] = useState([]);
	const [playListData, setPlaylistData] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const token = window.localStorage.getItem("token");

		if (token) {
			const getPLayslit = async () => {
				const res = await axios.get(
					`https://api.spotify.com/v1/playlists/${id}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				if (res.status === 200 || res.status === 201)
					return res.data;
			};

			const getSaveds = async () => {
				const res = await axios.get(
					`https://api.spotify.com/v1/playlists/${id}/tracks`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				if (res.status === 200 || res.status === 201)
					return res.data?.items;
			};

			Promise.all([getPLayslit(), getSaveds()])
				.then(([playListRes, tracksRes]) => {
					setTracks(tracksRes.filter(item => {
						if(item.track.preview_url) {
							return item
						}
					}))
					setPlaylistData(playListRes)
				})

		}
	}, []);


	return (
		<>
			<div className="w-[100%] flex flex-col gap-1 items-center mx-auto bg">
				<div className="w-full items-center mx-auto px-[15px] gap-2 mt-8">
					<div className="flex justify-between items-center gap-1 text-white mb-8">
						<span className="material-symbols-outlined absolute r-[110px]">
							search
						</span>
						<input
							type=""
							placeholder="Find in playlist"
							className="w-[100%] py-[10px] pl-[30px] pr-[10px] rounded-md bg-[#9a8264]"
						/>
						<button className="py-[10px] px-[15px] bg-[#9a8264] rounded-md items-center text-center">
							Sort
						</button>
					</div>
					<img
						src={playListData?.images[0]?.url || "../public/indie.png"}
						className="w-[100%] h-[290px] object-cover mb-4"
						alt=""
					/>
				</div>
				<div className="w-full px-[15px]">
					<div className="w-full">
						<p className="text-sm text-gray-400">
							New and approved indie pop. Cover: No Rome
						</p>
						<img
							src="../public/iconSpotify.png"
							className="w-[100px] h-[30px]"
							alt=""
						/>
						<div className="flex justify-between items-center">
							<div className="text-gray-400">
								<p>1,629,592 likes 6h 48m</p>
							</div>
							<img src="../public/play.png" alt="" className="" />
						</div>
						<div className="w-[100px] flex justify-between items-center mb-[10px]">
							<AiOutlineHeart size={30} color="gray" />
							<MdOutlineDownloadForOffline
								size={30}
								color="gray"
							/>
							<AiOutlineEllipsis size={30} color="gray" />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						{tracks.length > 0
							? tracks.map(
								(track, idx, arr) =>
									<IndieItem key={idx} {...track.track} arr={arr} songIdx={idx}  />
							)
							: "loading..."}
					</div>
				</div>
			</div>
		</>
	);
}

export default IndiePop;
