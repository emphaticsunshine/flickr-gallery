import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import { ReactComponent as LeftArrow } from "../../assets/left-chevron.svg";
import { ReactComponent as RightArrow } from "../../assets/right-chevron.svg";

import Slide from "./Slide";
import useWidth from "../../hooks/useWidth";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);

export default function Carousel({
    data,
    itemRenderer,
    selectedIdx,
    keyControls,
    animationDuration
}) {
    const [currentIdx, setCurrentIdx] = useState(selectedIdx);
    const itemCount = data.length;
    const {ref, width} = useWidth();
    const slider = useRef(null);

    const sliderStyles = {
        width: width && itemCount * width,
        transform: `translateX(-${currentIdx * width}px)`,
    };

    function goToNextSlide() {
        if(!isLast()) {
            setCurrentIdx(currentIdx + 1)
        }
    }

    function checkKey(evt) {
        evt = evt || window.event;
        switch(evt.keyCode) {
            case 37:
                goToPrevSlide();
                break;
            case 39:
                goToNextSlide();
                break;
            default:
                break;
        }
    }

    function goToPrevSlide() {
        if(!isFirst()) {
            setCurrentIdx(currentIdx - 1);
        }
    }

    function isLast() {
        return currentIdx === itemCount - 1;
    }

    function isFirst() {
        return currentIdx === 0;
    }

    useEffect(() => {
        if(keyControls) {
            document.addEventListener('keydown', checkKey, false);
        }

        return () => document.removeEventListener('keydown', checkKey, false);
    });

    useEffect(() => {
        if(width) {
            slider.current.style.transition =  `transform ${animationDuration}ms ease-in`;
        }
    }, [width, animationDuration])

    return(
        <div className={cx('wrapper')} ref={ref}>
            <div className={cx('slider')} style={sliderStyles} ref={slider}>
                {data.map(Slide.bind(null, {selectedIdx: currentIdx, slideRenderer: itemRenderer, width}))}
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
    itemRenderer: PropTypes.func.isRequired,
    selectedIdx: PropTypes.number,
    keyControls: PropTypes.bool,
    animationDuration: PropTypes.number
};

Carousel.defaultProps = {
    selectedIdx: 0,
    keyControls: true,
    animationDuration: 300
};

