// import React from 'react';
type Props = {
    children : object;
}

const Modal = (props: Props) => {
    return (
        <div>
            {props.children}
        </div>
    )
};

export default Modal;

