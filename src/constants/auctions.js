import { ReactComponent as ResidentialAuctionsLogo } from "../components/SvgIcons/ResidentialAuctionsLogo.svg"
import { ReactComponent as CommercialAuctionsLogo } from "../components/SvgIcons/CommercialAuctionsLogo.svg"
import { ReactComponent as AgriculturalAuctionsLogo } from "../components/SvgIcons/AgriculturalAuctionsLogo.svg"
import { ReactComponent as IndustrialAuctionsLogo } from "../components/SvgIcons/IndustrialAuctionsLogo.svg"
import { ReactComponent as OtherAuctionsLogo } from "../components/SvgIcons/OtherAuctionsLogo.svg"


export const defaultAuctionFilterValue = "Residential";

export const auctionsFilterOptions = [
    {
        name: "Residential",
        logo: <ResidentialAuctionsLogo className="w-4 h-4 fill-current" />,
    },
    {
        name: "Commercial",
        logo: <CommercialAuctionsLogo className="w-4 h-4 fill-current" />,
    },
    {
        name: "Agricultural",
        logo: <AgriculturalAuctionsLogo className="w-4 h-4 fill-current" />,
    },
    {
        name: "Industrial",
        logo: <IndustrialAuctionsLogo className="w-4 h-4 fill-current" />,
    },
    {
        name: "Other",
        logo: <OtherAuctionsLogo className="w-4 h-4 fill-current" />,
    },
];

export const auctionAttributes = [
    "Sr. No",
    "Bank Property ID",
    "Auction ID",
    "Bank",
    "Location",
    "Auction Start Date",
    "Time",
    "Auction End Date",
    "Time",
];

export const auctions = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    bankPropertyId: `CNRB${Math.floor(100000000000000 + Math.random() * 900000000000000)}`,
    auctionId: 58290 - index,
    bankName: "Canara Bank",
    location: `${["Mansa", "Malaut", "Ferozepur", "Kothamangalam"][index % 4]}, Punjab`,
    auctionStartDate: "30-12-2024",
    startTime: `${Math.floor(Math.random() * 12 + 1).toString().padStart(2, "0")}:30`,
    auctionEndDate: "30-12-2024",
    endTime: `${Math.floor(Math.random() * 12 + 1).toString().padStart(2, "0")}:30`,
    propertyType: auctionsFilterOptions[Math.floor(Math.random() * auctionsFilterOptions.length)], // Randomly assign propertyType
    // propertyType: "Residential"
}));

