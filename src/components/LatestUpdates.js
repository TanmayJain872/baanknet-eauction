import React from 'react'

const LatestUpdates = () => {
    
    return (
        <div className="flex items-center h-20 p-10 gap-4 text-white bg-[linear-gradient(95deg,_#8F53AA_0%,_#2E3192_100%)] bg-transparent">
            <div className="w-48 p-4 bg-white text-other-purple-600 rounded-lg font-bold text-center">
                Latest Updates
            </div>
            <div className="overflow-hidden whitespace-nowrap group">
                <div className="inline-block animate-marquee group-hover:[animation-play-state:paused]">
                    eBkray.in is renamed as BAANKNET.com | Total no. of properties listed <b>54008</b> | Total no. of Auctions conducted <b>48416</b> | Total value of properties Auctioned (INR crores) <b>4054.12</b> | No. of Upcoming Auctions <b>6258</b>
                </div>
            </div>
        </div>
    )
}

export default LatestUpdates