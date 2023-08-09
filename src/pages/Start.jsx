import { Link } from "react-router-dom"

function Start() {
    return (
        <>
            <div className="w-[100%] flex flex-col items-center gap-1 text-center mx-0">
                <img src="/public/icons/bg.png" className="w-[100%] h-[400px] bg-no-repeat object-cover"/>
                <div className="w-full flex-col mx-auto">
                    <div className="w-[205px] mx-auto">
                        <p className="text-white font-bold text-2xl">Millions of Songs.</p>
                        <p className="text-white font-bold text-2xl ">Free on Spotify.</p>
                    </div>
                    <Link to="">
                        <div className="flex flex-col items-center gap-2 w-[340px] mx-auto">
                            <button className="bg-green-500 text-black w-full px-[40px] font-bold py-[10px] rounded-full">Sign up free</button>
                            <button className="btn">
                                <img src="/public/icons/google.png" className="w-[20px] h-[20px]" alt="" />
                                <p className="ml-[55px]">Continue with Google</p>
                            </button>
                            <button className="btn">
                                <img src="/public/icons/facebook.png" className="w-[20px] h-[20px]" alt="" />
                                <p className="ml-[55px]">Continue with Facebook</p>
                            </button>
                            <button className="btn">
                                <img src="/public/icons/apple.png" className="w-[20px] h-[20px]" alt="" />
                                <p className="ml-[55px]">Continue with Apple</p>
                            </button>
                            <b>Log in</b>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Start