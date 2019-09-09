import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

// Config to display all the top places.
import data from "./config.json";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);

export default function TopPlaces() {
    return (
        <ul>
            {data.map((place) =>
                <li key={place.id}>
                   <Link className={cx('link')} to={place.url}>
                       {place.name}
                   </Link>
                </li>
            )}
        </ul>
    )
}