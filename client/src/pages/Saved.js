import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-materialize';
import Section from "../components/Section"
import ResultList from "../components/ResultList"
import SavedItem from "../components/SavedItem"
import API from "../utils/API"


function Saved() {

    const [savedBooks, setSavedBooks] = useState([])

   useEffect(() => {
        loadBooks()
   }, [])

   function loadBooks() {
        API.getBooks().then(res => 
            setSavedBooks(res.data)
        ).catch(err => console.log(err))
   }

   function deleteBook(id) {
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

    return (
        <Section>
            <Row className="container">
                <Col s={12}>
                    <h2 className="center-align">Your Saved Books</h2>
                    <br></br>
                    <ResultList>
                        {savedBooks.map(book => (
                            <SavedItem bookData={book} deleteBook={deleteBook}/>
                        ))}
                    </ResultList>
                </Col>
            </Row>
        </Section>
    )

}

export default Saved;