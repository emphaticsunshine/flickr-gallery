import React from "react";
import { Link } from "react-router-dom";

import data from "./config.json";

export default function TopPlaces() {
    return (
        <ul>
            {data.map((place) =>
                <li key={place.id}>
                   <Link to={place.url}>
                       {place.name}
                   </Link>
                </li>
            )}
        </ul>
    )
}