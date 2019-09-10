import { useLayoutEffect} from "react";
import noScroll from "no-scroll";

export default function useLockBodyScroll() {
    useLayoutEffect(() => {
        // lock scroll for body
        // Need to use it as overflow hidden doesn't work for iOS.
        noScroll.on();
        return noScroll.off;
     }, []); // Empty array ensures effect is only run on mount and unmount
}