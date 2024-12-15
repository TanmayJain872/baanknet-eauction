import React from 'react';

const PrimaryHeader = () => {
    const languages = [
        {
            id: 1,
            label: "English",
        },
        {
            id: 2,
            label: "हिन्दी",
        },
    ];
    return (
        <header className="bg-other-purple-500 text-white border-b border-white">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="flex gap-2">
                    <div className="flex gap-1">
                        <img className="w-4 h-4" src={"assets/SvgIcons/time.svg"} />
                        <p className="text-xs">{new Date().toISOString()}</p>
                    </div>
                    <div className="flex gap-1">
                        <img className="w-4 h-4" src={"assets/SvgIcons/email.svg"} />
                        <p className="text-xs">support.BAANKNET@psballiance.com</p>
                    </div>
                    <div className="flex gap-1">
                        <img className="w-4 h-4" src={"assets/SvgIcons/phone.svg"} />
                        <p className="text-xs">+91 8291220220</p>
                    </div>
                </div>
                <select
                    className="text-black text-sm w-20 px-2 py-1"
                    defaultValue={languages?.[0]?.label}
                >
                    {
                        languages?.map((language) => 
                            <option key={language?.id} value={language?.label}>
                                {language?.label}
                            </option>
                        )
                    }
                </select>
            </div>
        </header>
    );
}

export default PrimaryHeader