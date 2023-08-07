import React from "react";

function Album({ title = "", img }) {
    
    return (
        <>
            <div className="flex flex-col">
                <div className="w-[153px] h-[153px] overflow-hidden">
                    <img src={img || "/album.svg"} alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="h-[29px] bold1">{title}</h3>
            </div>
        </>
    )
}


export default Album