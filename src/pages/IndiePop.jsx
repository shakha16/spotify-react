import axios from "axios"
import { useState } from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { MdOutlineDownloadForOffline } from "react-icons/md"
import { AiOutlineEllipsis } from "react-icons/ai"
import IndieItem from "../components/indieItem"

function IndiePop({ img, title }) {

    let [state, setState] = useState(false)

    return (
        <>
            <div className="w-[100%] h-fit flex flex-col gap-1 items-center mx-auto bg">
                <p className="ml-[-1480px]">ᐸ</p>
                <div className="w-full items-center mx-auto px-[15px] gap-2">
                    <div className="flex justify-between items-center gap-1 text-white mb-8">
                        <span class="material-symbols-outlined absolute r-[110px]">
                            search
                        </span>
                        <input type="" placeholder="Find in playlist" className="w-[100%] py-[10px] pl-[30px] pr-[10px] rounded-md bg-[#9a8264]" />
                        <button className="py-[10px] px-[15px] bg-[#9a8264] rounded-md items-center text-center">Sort</button>
                    </div>
                    <img src={img || "../public/indie.png"} className="w-[100%] h-[290px] object-contain mb-4" alt="" />
                </div>
                <div className="">
                    <div className="">
                        <p className="text-sm text-gray-400">New and approved indie pop. Cover: No Rome</p>
                        <img src="../public/iconSpotify.png" className="w-[100px] h-[30px]" alt="" />
                        <div className="flex justify-between items-center">
                            <div className="text-gray-400">
                                <p>1,629,592 likes 6h 48m</p>
                            </div>
                            <img src="../public/play.png" alt="" className="" />
                        </div>
                        <div className="w-[100px] flex justify-between items-center mb-[10px]">
                            <AiOutlineHeart size={30} color="gray" />
                            <MdOutlineDownloadForOffline size={30} color="gray" />
                            <AiOutlineEllipsis size={30} color="gray" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <IndieItem />
                        <IndieItem />
                        <IndieItem />
                        <IndieItem />
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndiePop