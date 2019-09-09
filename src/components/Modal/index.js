import React from "react";
import { Portal } from "react-portal"
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import {ReactComponent as Close} from "../../assets/close.svg";

import useLockBodyScroll from "../../hooks/useLockBodyScroll";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);

export default function Modal({
    isOpen,
    hide,
    closeOnClickOutside,
    children
}) {
    // Lock the body scroll when Modal is mounted
    useLockBodyScroll();
    return (
        isOpen && (
            // use portal to mound it as last element to body
            <Portal role="dialog">
                <div className={cx('overlay')} onClick={closeOnClickOutside && hide} />
                <div className={cx('content')}>
                    {children}
                </div>
                <button className={styles.close} onClick={hide} aria-label="Close">
                    <Close className={cx('icon')} />
                </button>
            </Portal>
        )
    )
}

Modal.propTypes = {
    hide: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
    // enable it to close the Modal when clicked outside.
    closeOnClickOutside: PropTypes.bool,
    children: PropTypes.node,
}

Modal.defaultProps = {
    isOpen: true,
    closeOnClickOutside: false,
    children: null
}
