/* jshint esversion: 11 */

import React from 'react';
import { valuesDelivered } from '../constants/about';


const About = () => {
  return (
    <section className="w-full py-16 bg-[#F9F9F9]">
        <div className="flex justify-evenly mx-auto">
            <div className="container px-12">
                <div className="flex flex-col gap-4">
                    <small className="flex items-end gap-1 text-other-blue-900 text-2xl font-semibold">
                        <h2 className="text-3xl font-bold">About <span className="text-other-purple-300">BAANKNET</span></h2> (Bank Asset Auction Network)
                    </small>
                    <p>
                        A state-of-the-art innovative property listing and e-auction platform designed specifically for banks and lending institutions, addressing recovery of Non-Performing Asset (NPA) loans through efficient property auctions.
                    </p>
                    <p>
                        With a robust architecture, it ensures seamless reliability and accessibility for users via mobile and web interfaces. The platform integrates automated KYC tools and secure payment gateways, facilitating transparent and effective auction processes.
                    </p>
                </div>
                <div className="mt-12">
                    <h4 className="text-2xl text-other-blue-900 font-semibold mb-5">Value Delivered</h4>
                    <ul className="list-disc list-inside">
                        {
                            valuesDelivered.map(value => (
                                <li key={value} className="font-bold marker:text-other-purple-300">{value}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="container flex justify-center">
                <img className="w-1/2 h-3/4 shadow-lg" src="/baanknet-eauction/assets/images/About.png" alt={"about-image"} />
            </div>
        </div>
    </section>
  );
};

export default About;
