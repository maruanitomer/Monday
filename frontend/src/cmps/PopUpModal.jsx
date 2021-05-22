import React from 'react'

export const PopUpModal = ({ popup, ...props }) => {
    return (
        <div className="modal" onClick={(ev) => {
            console.log("clicked");
            props.toggleModal(ev)
        }} >
            <div className={popup} onClick={(ev) =>
                ev.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}
