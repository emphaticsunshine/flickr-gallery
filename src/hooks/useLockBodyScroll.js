import { useLayoutEffect} from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default function useLockBodyScroll() {
    useLayoutEffect(() => {
        // lock scroll for body
        // Need to use it as overflow hidden doesn't work for iOS.
        disableBodyScroll(document.body);
        return enableBodyScroll.bind(null, document.body);
     }, []); // Empty array ensures effect is only run on mount and unmount
}