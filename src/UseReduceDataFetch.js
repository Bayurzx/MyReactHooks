import React, { useEffect, useReducer } from "react";
import axios from "axios";

const api = "https://jsonplaceholder.typicode.com";

const initialState = {
    loading: true,
    error: "",
    post: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                post: action.payload,
                error: "",
            };

        case "FETCH_ERROR":
            return {
                loading: false,
                post: {},
                error: "Something went wrong!",
            };

        default:
            console.log(new Error("There is an error in switch statement input"));
            return {
                loading: false,
                post: {},
                error: "Error with switch input!",
            };
    }
};

function UseReduceDataFetch() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios
            .get(`${api}/posts/61`)
            .then((res) => {
                console.log(res);
                dispatch({type: "FETCH_SUCCESS", payload: res.data})
            })
            .catch((err) => {
                console.error(err)
                dispatch({type: "FETCH_ERROR"})
            });

        }, []);
    return (
        <div>
            {state.loading ? <h2>Loading... </h2> 
                : state.error ? <h2>{state.error}</h2>
                : <h2>{state.post && state.post.title}</h2>}
        </div>
    );
}
// condition1 ? value1 : condition2 ? value2 : value3


export default UseReduceDataFetch;
