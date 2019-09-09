import React from "react";
import _get from "lodash.get";
import classNames from "classnames/bind";

import useFetch from "../../hooks/useFetch";
import { API_KEY, APIS, PHOTOS_PER_PAGE } from '../../config';
import Gallery from "../../components/Gallery";
import Loader from "../../components/Loader";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);


// build array of objects with photo url
const getPhotos = ({response}) => {
    const photos = _get(response, 'photos.photo', []);
    return photos.reduce((photos, photo) => {
        const photoUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
        const newPhotoObj = {
            "id": photo.id,
            "altText": photo.title,
            "big": `${photoUrl}_b.jpg`,
            "thumbnail": `${photoUrl}_m.jpg`,
        };
        return photos.concat(newPhotoObj);
    }, []);
};

const buildURL = (searchTerm) =>
    `${APIS.PHOTO_SEARCH}&api_key=${API_KEY}&text=${searchTerm}&sort=relevance&geo_context=2&per_page=${PHOTOS_PER_PAGE}&content_type=1`;


export default function Place({ match }) {
    const url = buildURL(match.params.id);
    const res = useFetch(url);
    const photos = getPhotos(res);
    return (
        <>
            <h1 className={cx('title')}>
                {match.params.id}
            </h1>

            {res.isLoading && <Loader />}

            {/* If photo comes in response then display gallery of photos */}
            {!res.isLoading &&
                <Gallery photos={photos} />
            }

            {/* If Error occurs */}
            {res.error && <div className={cx('error')}>
                Something went wrong.
            </div>}

        </>
    );
}
