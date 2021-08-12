import { bottom } from "@popperjs/core";
import { useState } from "react";
import { usePopper } from "react-popper";
import { useClickOutside } from "../hooks/clickOutSide";

export const Popper = ({ button, popper }) => {
  const [buttonElement, setButtonElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const [isOpen, setIsOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  let { styles, attributes } = usePopper(buttonElement, popperElement, {
    placement: bottom,
  });

  return (
    <div ref={domNode} onClick={() => setIsOpen(!isOpen)}>
      <div ref={setButtonElement}>{button}</div>
      {isOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {popper}
        </div>
      )}
    </div>
  );
};
