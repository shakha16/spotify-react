import React, { useEffect } from "react";

function Artist({ name, surname, avatar }) {


    return (
        <>
            <div className="flex-col items-center w-50 h-[140px] gap-2 ">
                <div className="w-[105px] h-[105px] overflow-hidden">
                    <img src={avatar} alt="" className="w-full h-full object-cover" />
                </div>
                <span className="text-base font-semibold text-white px-[15px] text2">{name} {surname}</span>
            </div>
        </>
    )
}

export default Artist