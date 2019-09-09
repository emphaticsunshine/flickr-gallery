import React from "react";
import classNames from "classnames/bind";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);
export default function Loader() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('lds-ring')}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}