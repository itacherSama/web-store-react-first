import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoader = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={457}
        viewBox="0 0 280 457"
        backgroundColor="#fdfcfc"
        foregroundColor="#faf9f9"
    >
        <circle cx="141" cy="136" r="121" />
        <rect x="9" y="271" rx="0" ry="0" width="260" height="24" />
        <rect x="0" y="316" rx="15" ry="15" width="280" height="64" />
        <rect x="9" y="395" rx="0" ry="0" width="87" height="27" />
        <rect x="135" y="386" rx="0" ry="0" width="2" height="0" />
        <rect x="124" y="387" rx="30" ry="30" width="148" height="44" />
    </ContentLoader>
)

export default PizzaLoader;