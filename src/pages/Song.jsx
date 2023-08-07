import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai"
import { SlOptionsVertical } from "react-icons/sl"
import { AiOutlineHeart } from "react-icons/ai"
import { TbPlayerSkipBackFilled } from "react-icons/tb"
import { TbPlayerSkipForwardFilled } from "react-icons/tb"
import { AiFillPlayCircle } from "react-icons/ai"
import { MdOutlineDoNotDisturbOn } from "react-icons/md"
import { GoShareAndroid } from "react-icons/go"
import { BsArrowsAngleExpand } from "react-icons/bs"

export default function Song() {
    return (
        <div className="container">
            <div className="flex items-center justify-between mt-2">
                <AiOutlineArrowDown />
                <div className="flex flex-col items-center">
                    <span className="text-[12px] text-gray-400">из плейлиста</span>
                    <h6>Song to sing</h6>
                </div>
                <SlOptionsVertical />
            </div>
            <img src="/icons/one.svg" alt="" className="w-full m-auto max-w-[400px] pt-9 pb-9 " />
            <div className="flex flex-col">
                <h2>Troublemaker (feat. Flo Rida)</h2>
                <p className="text-[12px] text-gray-400">Olly Murs, Flo Rida</p>
            </div>
            <div className="w-full h-[2px] flex items-center bg-gray-700 mt-4">
                <div className="w-2 h-2 rounded-full bg-gray-800" ></div>
            </div>
            <div className="flex items-center justify-between pt-1">
                <h6 className="text-[9px] text-gray-400">0:00</h6>
                <h6 className="text-[9px] text-gray-400">4:16</h6>
            </div>
            <div className="flex items-center justify-between">
                <AiOutlineHeart size={20} />
                <div className="flex items-center gap-5">
                    <TbPlayerSkipBackFilled size={25} />
                    <AiFillPlayCircle size={50} />
                    <TbPlayerSkipForwardFilled size={25} />
                </div>
                <MdOutlineDoNotDisturbOn size={20} />
            </div>
            <div className="mt-10 w-full p-2 bg-red-500 rounded-lg">
                <div className="flex items-center justify-between pb-3">
                    <h4 className="text-xs">Текст</h4>
                    <div className="flex gap-2">
                        <button className="w-7 h-7 rounded-full bg flex items-center justify-center">
                            <GoShareAndroid />
                        </button>
                        <button className="w-7 h-7 rounded-full bg flex items-center justify-center">
                            <BsArrowsAngleExpand />
                        </button>
                    </div>
                </div>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, provident ut voluptates numquam voluptatibus nemo, ex harum sint laudantium mollitia ipsum amet excepturi aliquam molestiae itaque possimus aspernatur assumenda maxime.</h4>
            </div>
            <div className="w-full rounded-lg h-40 bg-gray-600 p-2 flex flex-col justify-between mt-3 mb-3">
                <h4 className="text-xs">Об испольнителе</h4>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h4>Kesha</h4>
                        <h4 className="text-[12px] text-gray-400">Слушателей за месяц нету</h4>
                    </div>
                    <button className="but">Подписаться</button>
                </div>
            </div>
            <div className="w-full rounded-lg h-24 bg-gray-600 p-2 flex flex-col justify-between">
                <h4 className="text-xs">Мероприятия</h4>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h4>15 окт. - 18 нояб.</h4>
                        <h4 className="text-[12px] text-gray-400">22 мероприятия</h4>
                    </div>
                    <button className="but">Найти билеты</button>
                </div>
            </div>
        </div>
    )
}