import React from "react";
import features from "../../data/features";
console.log("🚀 ~ features:", features);
import FeaturesItem from "./FeaturesItem";
// console.log("🚀 ~ features:", features);

export default function FeaturesList() {
    return (
        <div className="container mb-12 w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => {
                return <FeaturesItem feature={feature} />;
            })}
        </div>
    );
}
