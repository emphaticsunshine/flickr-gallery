import React, { useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import Carousel from "../Carousel";
import Image from "../Image";

import styles from './index.module.scss';

const cx = classNames.bind(styles);

// callback function to render a carousel item.
function renderCarouselSlide(data) {
    return(
        <Image className={cx('photo--big')} src={data.big} altText={data.altText} errorClassName={cx('img--error')} />
    );
}


export default function Gallery({
    photos
}) {
    const {toggle} = useModal();
    // keep track of selected index
    const [selectedImage, selectImage] = useState(null);

    // The function that opens up the carousel.
    // This opens modal and select the clicked image to update state.
    function toggleCarousel(selectedIdx) {
        toggle();
        selectImage(selectedIdx);
    }
    return (
        <div className={cx('grid')}>
            {photos.map((photo, idx) =>
                <Image
                    key={photo.id}
                    className={cx('cell', {
                        'selected': selectedImage === idx
                    })}
                    errorClassName={cx('cell', 'cell--error')}
                    src={photo.thumbnail}
                    altText={photo.altText}
                    onClick={toggleCarousel.bind(null, idx)}
                />
            )}

            {/* Don't render modal if no image is selected */}
            {selectedImage !== null &&
                <Modal
                    isOpen
                    // close the modal and set the selected image to null to remove modal
                    hide={toggleCarousel.bind(null, null)}
                    closeOnClickOutside
                >
                    <Carousel
                        data={photos}
                        selectedIdx={selectedImage}
                        slideRenderer={renderCarouselSlide}
                    />
                </Modal>
            }
        </div>
    )
}

Gallery.propTypes = {
    photos: PropTypes.array.isRequired
};
