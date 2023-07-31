import React from "react";

function Album({title = "",img }) {

    return (
        <>
            <div className="w-[150px] h-[200px]">
                <img src={img || "./public/album.svg"} className="w-[150px] h-[150px] object-contain" alt="" />
                <span className="text-xs text-gray-500">
                    {title}
                </span>
            </div>
        </>
    )
}

export default Album