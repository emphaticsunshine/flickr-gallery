import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);


export default function Slide(
    {
        selectedIdx,
        slideRenderer,
        width
    },
    slideData,
    idx
) {
    return(
        // Adding width to key and width could change when someone is playing with browser width
        <div key={`${slideData.id}-${width}`} className={cx('slide')} style={{
            width
        }}>
            <div className={cx('slideWrapper')}>
                {/* Only render the content for current and adjacent slides */}
                {(idx === selectedIdx || idx === selectedIdx - 1 || idx === selectedIdx + 1) && slideRenderer(slideData)}
            </div>
        </div>
    )
}

Slide.propTypes = {
    slideData: PropTypes.array.isRequired,
    idx: PropTypes.number.isRequired
}
