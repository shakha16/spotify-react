import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai"
import { SlOptionsVertical } from "react-icons/sl"

export default function Song() {
    return (
        <div className="container pt-6">
            <div className="flex items-center justify-between">
                <AiOutlineArrowDown />
                <div className="flex flex-col items-center">
                    <span>из плейлиста</span>
                    <h6>Song to sing</h6>
                </div>
                <SlOptionsVertical/>
            </div>
            <img src="/icons/one.svg" alt="" className="w-full pt-9 pb-9" />
            <div className="flex flex-col">
                <h2>Troublemaker (feat. Flo Rida)</h2>
                <p>Olly Murs, Flo Rida</p>
            </div>
        </div>
    )
}