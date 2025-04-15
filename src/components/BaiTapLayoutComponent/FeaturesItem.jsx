import React from "react";

export default function FeaturesItem({ feature }) {
    // console.log("🚀 ~ FeaturesItem ~ props:", feature);

    return (
        <div className="p-8 bg-white rounded-lg m-4 flex flex-col items-center justify-center border border-gray-300 shadow-lg">
            <img src={feature.image} alt={feature.name} className="w-16 h-16 mb-4 rounded-2xl" />
            <h2 className="text-2xl font-bold mb-2 text-center">{feature.name}</h2>
            <p className="text-center">{feature.description}</p>
        </div>
    );
}
