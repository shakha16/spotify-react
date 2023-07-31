import React, { useEffect } from "react";

function Artist({name, surname, avatar}) {


    return (
        <>
            <div className="flex-col items-center w-50 h-[140px] gap-2">
                <img src={avatar} alt="" className="w-[110px] h-[110px] rounded-full bg-red-500" />
                <span className="text-base font-semibold text-white px-[15px]">{name} {surname}</span>
            </div>
        </>
    )
}

export default Artist