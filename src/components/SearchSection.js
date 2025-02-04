import React from 'react'
import SearchBox from './SearchBox'

const SearchSection = () => {
    return (
        <section className="flex gap-5 w-full p-12 bg-transparent bg-gradient-to-tr from-other-purple-600 via-[rgba(46,49,146,0)] to-[rgba(46,49,146,0)] bg-no-repeat bg-padding-box">
            <SearchBox />
            <div className="flex gap-4 w-1/2 items-end">
                <div>
                    <img 
                        className="border-2 border-other-purple-600 rounded-3xl"
                        src="/baanknet-eauction/assets/images/CommercialProperty.png"
                        alt={"commercial-property-image"}
                    />
                </div>
                <div>
                    <img 
                        className="border-2 border-other-purple-600 rounded-3xl"
                        src="/baanknet-eauction/assets/images/AgriculturalProperty.png"
                        alt={"agricultural-property-image"}
                    />
                </div>
                <div>
                    <img 
                        className="border-2 border-other-purple-600 rounded-3xl" 
                        src="/baanknet-eauction/assets/images/IndustrialProperty.png"
                        alt={"industrial-property-image"}
                    />
                </div>
            </div>
        </section>
    )
}

export default SearchSection