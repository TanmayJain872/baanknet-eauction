import React, { useState } from 'react'
import { ReactComponent as LocationIcon } from "../components/SvgIcons/LocationIcon.svg"
import { ReactComponent as HouseIcon } from "../components/SvgIcons/HouseIcon.svg"
import { ReactComponent as RupeesIcon } from "../components/SvgIcons/RupeesIcon.svg"
import { auctionsFilterOptions, defaultAuctionFilterValue } from '../constants/auctions'

const SearchBox = () => {
    const [activeTab, setActiveTab] = useState(defaultAuctionFilterValue);
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-other-purple-600">
                    Your Search For a
                </h1>
                <p className="text-xl text-other-purple-600 font-semibold">Property ends here</p>
            </div>

            {/* Tabs */}
            <div className="flex justify-between mb-6">
                {auctionsFilterOptions.map(
                    (tab, index) => (
                        <div
                            key={index}
                            className={`text-lg px-3 pb-2 ${
                                tab?.name === activeTab
                                    ? "text-other-purple-300 font-bold border-b-2 border-other-purple-300"
                                    : "text-other-purple-600 font-medium"
                            }`}
                            onClick={() => setActiveTab(tab?.name)}
                        >
                            {tab?.name}
                        </div>
                    )
                )}
            </div>

            {/* Form */}
            <form>
                {/* Input: Enter City */}
                <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-4">
                <span className="material-icons text-other-purple-300">
                    <LocationIcon className="w-4 h-4 fill-current" />
                </span>
                <input
                    type="text"
                    placeholder="Enter City"
                    className="bg-transparent flex-1 ml-2 text-gray-600 outline-none"
                />
                </div>

                {/* Select: Property Sub Type */}
                <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-4">
                <span className="material-icons text-other-purple-300">
                    <HouseIcon className="w-4 h-4 fill-current" />
                </span>
                <select
                    className="bg-transparent flex-1 ml-2 text-gray-600 outline-none"
                >
                    <option>Property Sub Type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Plot</option>
                </select>
                </div>

                {/* Select: Budget */}
                <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-6">
                    <span className="material-icons text-other-purple-300">
                        <RupeesIcon className="w-4 h-4 fill-current" />
                    </span>
                    <select
                        className="bg-transparent flex-1 ml-2 text-gray-600 outline-none"
                    >
                        <option>Budget</option>
                        <option>Below 20 Lakhs</option>
                        <option>20-50 Lakhs</option>
                        <option>Above 50 Lakhs</option>
                    </select>
                </div>

                {/* Search Button */}
                <button
                    type="submit"
                    className="bg-other-purple-600 text-white font-medium py-3 px-6 rounded-4xl w-full hover:bg-purple-700"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBox