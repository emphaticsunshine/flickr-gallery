import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import { ReactComponent as LeftArrow } from "../../assets/left-chevron.svg";
import { ReactComponent as RightArrow } from "../../assets/right-chevron.svg";

import Slide from "./Slide";
import useWidth from "../../hooks/useWidth";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);

const KEYS = {
    "LEFT_ARROW": 37,
    "RIGHT_ARROW": 39
};

export default function Carousel({
    data,
    slideRenderer,
    selectedIdx,
    keyControls,
    animationDuration
}) {
    // set currentIdx to selectedIdx when sent while initializing
    const [currentIdx, setCurrentIdx] = useState(selectedIdx);
    const itemCount = data.length;
    // used to track the width of carousel.
    const {ref, width} = useWidth();

    // reference to slider DOM to add transition later.
    const sliderRef = useRef(null);

    const sliderStyles = {
        // set width to n times width of sing;e slide
        width: width && itemCount * width,
        // transform to set focus on current image
        transform: `translateX(-${currentIdx * width}px)`,
    };

    function isLast() {
        return currentIdx === itemCount - 1;
    }

    function isFirst() {
        return currentIdx === 0;
    }

    function goToNextSlide() {
        if(!isLast()) {
            setCurrentIdx((currentIdx) => currentIdx + 1);
        }
    }

    function goToPrevSlide() {
        if(!isFirst()) {
            setCurrentIdx((currentIdx) => currentIdx - 1);
        }
    }


    // Adding effect to attach event for key down to slide to next or previous slide
    useEffect(() => {
        // when key is pressed to capture next slide and previous slide events
        const checkKey = (evt) => {
            evt = evt || window.event;
            switch(evt.keyCode) {
                case KEYS.LEFT_ARROW:
                    goToPrevSlide();
                    break;
                case KEYS.RIGHT_ARROW:
                    goToNextSlide();
                    break;
                default:
                    break;
            }
        };
        keyControls && document.addEventListener('keydown', checkKey, false);

        return () => keyControls && document.removeEventListener('keydown', checkKey, false);
    }, [currentIdx]);  //eslint-disable-line react-hooks/exhaustive-deps

    // Adding transition after initialzed to avoid transition happening while initalizng.
    useEffect(() => {
        // don't add transition when width is not calculated
        if(width) {
            sliderRef.current.style.transition =  `transform ${animationDuration}ms ease-in`;
        }
    },
        // change only when width or animation duration changes
        [width, animationDuration]
    );

    return(
        <div className={cx('wrapper')} ref={ref}>
            <div className={cx('slider')} style={sliderStyles} ref={sliderRef}>
                {data.map(Slide.bind(null, {selectedIdx: currentIdx, slideRenderer, width}))}
            </div>
            {!isLast() &&
                <button className={cx('arrow-next')} onClick={goToNextSlide}>
                    <RightArrow className={cx('icon')} />
                </button>
            }
            {!isFirst() &&
                <button className={cx('arrow-prev')} onClick={goToPrevSlide}>
                    <LeftArrow className={cx('icon')} />
                </button>
            }
        </div>
    );
}

Carousel.propTypes = {
    data: PropTypes.array.isRequired,
    slideRenderer: PropTypes.func.isRequired,
    selectedIdx: PropTypes.number,
    keyControls: PropTypes.bool,
    animationDuration: PropTypes.number
};

Carousel.defaultProps = {
    selectedIdx: 0,
    keyControls: true,
    animationDuration: 300
};

