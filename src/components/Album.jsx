import React from "react";

function Album() {

    return (
        <>
            <div className="w-[150px] h-[200px]">
                <img src="./public/album.svg" className="w-[150px] h-[150px] object-contain" alt="" />
                <span className="text-xs text-gray-500">Ed Sheeran, Big Sean,
                    Juice WRLD, Post Malone</span>
            </div>
        </>
    )
}

export default Album