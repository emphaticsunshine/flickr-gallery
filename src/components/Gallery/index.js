import React, { useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import Carousel from "../Carousel";

import styles from './index.module.scss';

const cx = classNames.bind(styles);

function renderCarouselItem(data) {
    return(
        <img className={cx('photo--big')} src={data.big} alt={data.altText} />
    );
}


export default function Gallery({
    photos
}) {
    const {toggle} = useModal();
    const [selectedImage, selectImage] = useState(null);

    function toggleCarousel(selectedIdx) {
        toggle();
        selectImage(selectedIdx);
    }
    return (
        <div className={styles.grid}>
            {photos.map((photo, idx) =>
                <img
                    role="button"
                    key={photo.id}
                    className={cx('cell', {
                        'selected': selectedImage === idx
                    })}
                    src={photo.thumbnail}
                    alt="Test"
                    onClick={toggleCarousel.bind(null, idx)}
                />
            )}
            {selectedImage !== null &&
                <Modal
                    isOpen
                    hide={toggleCarousel.bind(null, null)}
                    closeOnClickOutside
                >
                    <Carousel
                        data={photos}
                        selectedIdx={selectedImage}
                        itemRenderer={renderCarouselItem}
                    />
                </Modal>
            }
        </div>
    )
}

Gallery.propTypes = {
    photos: PropTypes.array.isRequired
};
