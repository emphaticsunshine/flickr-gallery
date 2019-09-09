import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);

export default function Layout({
    children
}) {
    return (
        <>
            <header className={cx('header')}>
                <h2 className={cx('header-title')}>
                    Flickr Gallery
                </h2>
            </header>
            <main className={cx('main')}>
                {children}
            </main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};