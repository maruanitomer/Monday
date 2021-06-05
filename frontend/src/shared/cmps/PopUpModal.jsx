import React from "react";

export const PopUpModal = ({ popup, isDark = false, ...props }) => {
  let className = isDark ? "modal darkModal" : "modal";

  return (
    <div
      className={className}
      onClick={(ev) => {
        props.toggleModal(ev);
      }}
    >
      <div className={popup} onClick={(ev) => ev.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
};
