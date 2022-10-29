import React from 'react'


export function layout({ countries }) {
    return (
        <>
            <div className=' flex mt-4 items-center  justify-center '>
                <h1 className=" text-red-500 mx-auto text-[lato] text-2xl font-bold uppercase">layout</h1></div>
            <div className="  m-auto h-full">
                <div className=' my-7 mx-4'>
                    <ul classNmae="m-4 mt-6">
                        <li><button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 ">stores</button></li>
                        <li><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">products</button></li>
                        <li><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">oders</button></li>
                        <li><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">Profile</button></li>

                    </ul>
                </div>
            </div>
        </>

    )

}

export default layout;