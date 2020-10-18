import React from "react";
import cn from 'classnames';
import PropTypes from "prop-types";

function Button({className, outline, children, onClick}) {
    return (
        <button className={cn('button', className, {
            'button-outline': outline,
        })}
        onClick={onClick}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    outline: PropTypes.bool,
    children: PropTypes.any,
}

export default Button;