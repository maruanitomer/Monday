import React from 'react'

export const PopUpModal = ({ popup,...props}) => {
    return (
        <div className="modal">
            <div className={popup}>
                {props.children}
            </div>
        </div>
    )
}
