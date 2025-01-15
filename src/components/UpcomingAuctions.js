/* jshint esversion: 11 */

import React, { useState } from "react";
import { auctionAttributes, auctions, auctionsFilterOptions } from "../constants/auctions.js";
import Pagination from "./Pagination.js";

const UpcomingAuctions = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedFilter, setSelectedFilter] = useState("All"); // Added filter state    

  // Filter auctions based on selected filter
  const filteredAuctions = selectedFilter === "All" ? auctions : auctions.filter(auction => auction.propertyType.name === selectedFilter);

  // Pagination logic
  const totalPages = Math.ceil(filteredAuctions.length / itemsPerPage);
  const displayedAuctions = filteredAuctions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4 max-w-7xl mx-auto bg-cover bg-center" style={{backgroundImage: "url('/assets/images/upcoming-auctions-background-image.png')"}}>
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6 text-other-blue-900">
        Upcoming <span className="text-other-purple-300">Auctions in 30 days</span>
      </h1>

      {/* Tabs */}
      <div className="flex justify-evenly gap-4 w-fit mx-auto mb-6 p-2.5 border border-[#B7B9FF] rounded-4xl">
        {auctionsFilterOptions.map((tab) => {
            return (
                <div
                    key={tab?.name}
                    className={`flex items-center justify-center gap-1 px-4 py-2 ${selectedFilter === tab?.name ? "bg-other-purple-600 text-white" : "bg-purple-100 text-other-purple-600"} rounded-4xl font-medium hover:bg-other-purple-600 hover:text-white group`}
                    onClick={() => setSelectedFilter(tab?.name)}
                >
                    <div className="fill-other-purple-600 group-hover:fill-white">
                        {tab?.logo}
                    </div>
                    {tab?.name}
                </div>
            );
        })}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-purple-100 text-left">
              {
                auctionAttributes?.map((attributeName, index) => (
                    <th key={`${attributeName}${index + 1}`} className="p-2 border border-gray-200">{attributeName}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {displayedAuctions.map((auction, index) => (
              <tr key={auction.id} className="even:bg-gray-50">
                <td className="p-2 border border-gray-200 font-semibold text-center">{auction.id}</td>
                <td className="p-2 border border-gray-200 font-semibold text-other-purple-600">{auction.bankPropertyId}</td>
                <td className="p-2 border border-gray-200 font-semibold text-other-purple-600">{auction.auctionId}</td>
                <td className="p-2 border border-gray-200 font-semibold text-other-purple-600">
                    <div className="bg-other-purple-100 rounded-4xl text-center">
                        {auction.bankName}
                    </div>
                </td>
                <td className="p-2 border border-gray-200">{auction.location}</td>
                <td className="p-2 border border-gray-200">{auction.auctionStartDate}</td>
                <td className="p-2 border border-gray-200">{auction.startTime}</td>
                <td className="p-2 border border-gray-200">{auction.auctionEndDate}</td>
                <td className="p-2 border border-gray-200">{auction.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
        <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalPages={totalPages}
            auctions={filteredAuctions}
        />
    </div>
  );
};

export default UpcomingAuctions;

