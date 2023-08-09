import { AiOutlineEllipsis } from "react-icons/ai"
import { context } from "../Layout/Layout";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";



function IndieItem({ name, album, artists }) {

    // const [tracks, setTracks] = useState([]);
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

    const { chageText } = useContext(context)
    console.log(artists);

    return (
        <div className="w-[100%] flex justify-between items-center gap-2">
            <div className="w-[100%] flex justify-between items-center gap-1">
                <div className="flex justify-between gap-2">
                    <img src={album?.images[0].url || "/public/icons/pre.svg"} className="w-[50px] h-[50px] object-contain" alt="" />
                    <div className="" onClick={() => chageText({ text: artists.map(item => name), src: album?.images[0].url, artist: artists.map(item => item.name) })} >
                        <p className="pb-[]">{name}</p>
                        {
                            artists.map(item => (
                                <span className="text-xs text-gray-400 pt-[-3px]">{item.name}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div><AiOutlineEllipsis size={30} color="gray" /></div>
        </div>
    )
}

export default IndieItem