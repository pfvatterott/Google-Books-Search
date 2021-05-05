import React, { useState, useEffect } from "react";
// import API from "../utils/API";
import axios from "axios"

function Search() {

    useEffect(() => {
        searchForBook()
        
    }, [])

    const apiKey = "AIzaSyA3YInjAHayQeCJsguOiGtyPJB-MLm-K0k";

    function searchForBook() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=harrypotter&key=${apiKey}`)
        .then(response => {
            console.log(response.data)
        }).catch(error => console.log(error))
    }


    return (
        <h2>working</h2>
    )

}

export default Search;