import React from "react";
import { teamsData } from "./teamData.js"; // named export from teamData.js
const data = teamsData || []; // ensure we have an array to map over

const TeamsInfo = () => {
    return (
        <div className="bg-[#333333] flex flex-col pb-10">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center pt-10">
                OUR TEAM
            </h1>

            <div className="bg-gray-200 mt-10 flex flex-wrap justify-center gap-6 p-6">




                <marquee behavior="scroll" direction="left" scrollamount="5">
                    {data.map((member) => (
                        <div
                            key={member.id}
                            className="bg-[#333333] flex flex-col text-white p-4 rounded-lg shadow-md w-72 inline-block mr-4"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-60 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-xl font-bold">{member.name}</h2>
                            <p className="text-sm">{member.role}</p>
                        </div>
                    ))}
                </marquee>
            </div>
        </div>
    );
};

export default TeamsInfo;





