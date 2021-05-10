import React, { useState, useEffect } from "react";
import { TextInput, Row, Col, Button} from 'react-materialize';
import Section from "../components/Section"
import ResultList from "../components/ResultList"
import ResultItem from "../components/ResultItem"
import API from "../utils/API";
import io from 'socket.io-client'
import axios from "axios"
const aws = require('aws-sdk')



let s3 = new aws.S3({
    apiKeyHeroku: process.env.apiKey
})
const apiKey = s3.apiKeyHeroku || process.env.REACT_APP_API_KEY
const socket = io()


function Search() {

    useEffect(() => {
        // listener for book saved and executes toast notification
        socket.on('bookSavedNotification', (bookName) => {
            if (document.querySelector('.toast')) {
                const toastElement = document.querySelector('.toast');
                const toastInstance = window.M.Toast.getInstance(toastElement)
                toastInstance.dismiss()
            }
            window.M.toast({ html: `A new book titled '${bookName}' was saved!` })
        })
        // listener for book deleted and executes toast notification
        socket.on('bookDeletedNotification', (bookName) => {
            if (document.querySelector('.toast')) {
                const toastElement = document.querySelector('.toast');
                const toastInstance = window.M.Toast.getInstance(toastElement)
                toastInstance.dismiss()
            }
            window.M.toast({ html: `A new book titled '${bookName}' was Deleted!` })
          })
    }, [])

    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState([])

    // Api call to Google Books when search button clicked
    function searchForBook(book) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`)
        .then(response => {
            console.log(response)
            if (response.data.items.length === 0) {
                alert('No results!')
            }
            else {
                setBooks(response.data.items)
            }
        }).catch(error => console.log(error))
    }

    // set formObject state when user typing
    function handleInputChange(event) {
        const { value } = event.target;
        setFormObject({...formObject, search: value})
    };

    // search for book using formObject state
    function handleFormSubmit(event) {
        event.preventDefault()
        searchForBook(formObject.search)
    }

    // save book data to mongodb and emit notification that book saved
    function saveBook(book, e) {
        const bookData = {
            authors: book.authors,
            description: book.description,
            image: book.imageLinks.thumbnail,
            link: book.infoLink,
            title: book.title
        }
        socket.emit('bookSavedNotification', (bookData.title))
        API.saveBook(bookData)
    }
    
    return (
        <Section>
            <Row className="container">
                <Col s={12}>
                    <h2 className="center-align">Search for Books</h2>
                    <br></br>
                    <TextInput
                        icon="search"
                        placeholder="Search for Book"
                        onChange={handleInputChange}
                        s={12}
                     />
                </Col>
                <Col s={12}>
                    <Button onClick={handleFormSubmit}>Search</Button>
                </Col>
            </Row>
            <Row className="container">
                <Col s={12}>
                    <ResultList>
                        {books.map(book => (
                          <ResultItem book={book} saveBook={saveBook}/>  
                        ))}
                    </ResultList>
                </Col>
            </Row>
        </Section>

    )

}

export default Search;