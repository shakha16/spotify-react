import { AiOutlineEllipsis } from "react-icons/ai"


function IndieItem({ name, album, artists }) {

    return (
        <div className="w-[100%] flex justify-between items-center gap-2">
            <div className="w-[100%] flex justify-between items-center gap-1">
                <div className="flex justify-between gap-2">
                    <img src={album?.images[0].url || "/public/icons/pre.svg"} className="w-[50px] h-[50px] object-contain" alt="" />
                    <div className="">
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