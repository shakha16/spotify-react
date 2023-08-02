import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { context } from "../Layout/Layout";

const Playlist = () => {
	const [tracks, setTracks] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const token = window.localStorage.getItem("token");

		if (token) {
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

			getSaveds().then((res) => setTracks(res));
		}
	}, []);

	console.log(tracks);
	// preview_url
	return (
		<div>
			<h1>PLAYLIST</h1>

			{tracks.length > 0
				? tracks.map(
						(track, idx) =>
							track.track.preview_url && (
								<Audio track={track} key={idx} />
							)
				  )
				: "loading..."}
		</div>
	);
};



const Audio = ({track}) => {
    
    const {chageText} = useContext(context)
    
    return (
        <audio
            src={track?.track?.preview_url}
            controls
            onPlay={() => chageText(track.track.name)}
        ></audio>
    )
}


export default Playlist;
