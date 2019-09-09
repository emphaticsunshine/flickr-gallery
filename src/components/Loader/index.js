import React from "react";
import classNames from "classnames/bind";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);
export default function Loader() {
    return (
        <div className={cx('wrapper')}>
            {/* This is copied from Copied from https://loading.io/css/ */}
            {/* Would have spent some time to clean this up as it's a dirty solution */}
            <div className={cx('lds-ring')}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}