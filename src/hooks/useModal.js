import { useState } from "react";

export default function useModal() {
    // state to keep track of open state of modal
    const [isOpen, setOpen] = useState(false);

    // this function toggles the open state of modal
    // mostly used for closing the modal
    function toggle() {
        setOpen(!isOpen);
    }

    return {
        isOpen,
        toggle
    };
};
