import { renderHook, act } from "@testing-library/react-hooks";
import useModal from "./useModal";

it('should toggle modal', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isOpen).toBeFalsy();

    act(() => {
        result.current.toggle();
    })

    expect(result.current.isOpen).toBeTruthy();
})