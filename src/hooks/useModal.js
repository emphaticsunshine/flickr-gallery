import { useState } from "react";

export default function useModal() {
    const [isOpen, setOpen] = useState(false);

    function toggle() {
        setOpen(!isOpen);
    }

    return {
        isOpen,
        toggle
    };
};
