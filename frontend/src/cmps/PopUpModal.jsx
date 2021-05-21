import React from 'react'

export const PopUpModal = ({ popup, ...props }) => {
    return (
        <div className="modal" onClick={(ev) => {
            ev.stopPropagation()
            props.toggleModal()
        }} >
            <div className={popup}>
                {props.children}
            </div>
        </div>
    )
}
