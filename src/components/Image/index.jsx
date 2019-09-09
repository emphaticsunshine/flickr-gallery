import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { ReactComponent as ErrorImage} from "../../assets/error-image.svg";

import styles from "./index.module.scss";
const cx = classNames.bind(styles);

function errorHandle(className) {
    return (
        <ErrorImage className={cx('error', className)}/>
    )
}

export default function Image({
    src,
    altText,
    className,
    errorClassName,
    children,
    onClick,
    onError
}) {
    const [errored, setErrored] = useState(false);

    // If image didn't error out then render the image.
    if(!errored) {
        return (
            <img
            src={src}
            alt={altText}
            onClick={onClick}
            role={onClick && 'button'}
            className={className}
            onError={setErrored}
        >
            {children}
        </img>
        )
    }

    // handle error if imagre errors out.
    return errorHandle(errorClassName);
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    className: PropTypes.string,
    errorClassName: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    onError: PropTypes.func
}

Image.defaultProps = {
    className: '',
    errorClassName: '',
    children: null,
    onClick: null,
    onError: errorHandle
}

