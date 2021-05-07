import React, { useState, useEffect } from "react";
import { TextInput, Row, Col, Button} from 'react-materialize';
import Section from "../components/Section"
import ResultList from "../components/ResultList"
import ResultItem from "../components/ResultItem"
import API from "../utils/API";
import axios from "axios"

function Search() {

    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState([])

    useEffect(() => {
         
    }, [])

    const apiKey = "AIzaSyA3YInjAHayQeCJsguOiGtyPJB-MLm-K0k";

    function searchForBook(book) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`)
        .then(response => {
            setBooks(response.data.items)
        }).catch(error => console.log(error))
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, search: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault()
        searchForBook(formObject.search)
    }

    function saveBook(book) {
        const bookData = {
            authors: book.authors,
            description: book.description,
            image: book.imageLinks.thumbnail,
            link: book.infoLink,
            title: book.title
        }
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