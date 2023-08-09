import { AiOutlineEllipsis } from "react-icons/ai"


function IndieItem({ img, title, name }) {

    return (
        <div className="w-[100%] flex justify-between items-center gap-2">
            <div className="w-[100%] flex justify-between items-center gap-1">
                <div className="flex justify-between gap-2">
                    <img src={img || "/public/icons/pre.svg"} className="w-[50px] h-[50px] object-contain" alt="" />
                    <div className="">
                        <p className="pb-[]">{title} Easy</p>
                        <span className="text-xs text-gray-400 pt-[-3px]">{name} Troye Sivan</span>
                    </div>
                </div>
            </div>
            <div><AiOutlineEllipsis size={30} color="gray" /></div>
        </div>
    )
}

export default IndieItem