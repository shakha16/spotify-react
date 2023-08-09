import { AiOutlineEllipsis } from "react-icons/ai"
import { playerCTX } from "../Layout/Layout";
import { useContext, useEffect } from "react";



function IndieItem({ name, album, artists, arr, songIdx}) {
    const { setSong } = useContext(playerCTX)

    const setPLayerSong = () => {
        setSong({
            tracks: arr.map(item => item.track),
            songIdx
        })
    }

    return (
        <div className="w-[100%] flex justify-between items-center gap-2" >
            <div className="w-[100%] flex justify-between items-center gap-1">
                <div className="flex justify-between gap-2" onClick={setPLayerSong} >
                    <img src={album?.images[0].url || "/public/icons/pre.svg"} className="w-[50px] h-[50px] object-contain" alt="" />
                    <div className="" >
                        <p className="pb-[]">{name}</p>
                        {
                            artists.map((item, idx) => (
                                <span key={idx} className="text-xs text-gray-400 pt-[-3px]">{item.name}</span>
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