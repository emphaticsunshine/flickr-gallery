// import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import  {fetch as fetchPolyfill } from "whatwg-fetch";
import fetchMock from "fetch-mock";
import useFetch from "./useFetch";

beforeEach(() => {
    global.fetch = fetchPolyfill;
});

afterEach(() => {
    fetchMock.restore();
});

it('should throw error without url', () => {
    const { result } = renderHook(() => useFetch());

    expect(result.current.error).toEqual('Please provide url');
});

it('should return data with successful request', async() => {
    fetchMock.mock("test.com", {
        returnedData: "data"
    });

    let hook;
    await act( async() => {
        hook = renderHook(() => useFetch('test.com'));
    });

    expect(hook.result.current.response.returnedData).toEqual('data');
});

it('should return error with 500 error', async() => {
    fetchMock.mock("test.com", 500);

    let hook;
    await act( async() => {
        hook = renderHook(() => useFetch('test.com'));
    });

    expect(hook.result.current.error).toBeInstanceOf(Error);
    expect(hook.result.current.response).toBeNull();

});

it('should return error with 404 error', async() => {
    fetchMock.mock("test.com", 404);

    let hook;
    await act( async() => {
        hook = renderHook(() => useFetch('test.com'));
    });

    expect(hook.result.current.error).toBeInstanceOf(Error);
    expect(hook.result.current.response).toBeNull();

});
