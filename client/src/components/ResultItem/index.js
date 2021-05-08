import React from 'react'
import {Button} from "react-materialize"
import "./style.css"

export default function ResultItem(props) {

    function processClickButton(e) {
        e.target.classList.add('disabled')
        props.saveBook(props.book.volumeInfo)
    }

    function renderAuthors(authors) {
        console.log(authors)
        if (!authors) {
            return ('None')
        }
        else if (authors.length === 1) {
            return (authors)
        }
        else {
            return (
                <ul>
                    {authors.map(author => (
                        <li>
                            {author}
                        </li>
                    ))}
                </ul>
            )
        }
    }

    
    return (
        <li class="collection-item bookItem">
            <a href={props.book.volumeInfo.infoLink} target="_blank"><Button className="right" id="viewButton">View</Button></a>
            <Button className="right" id="saveButton" onClick={processClickButton}>Save</Button>
            <h5>{props.book.volumeInfo.title}</h5>
            <p className="writtenBy">Written by: </p><p>{renderAuthors(props.book.volumeInfo.authors)}</p>
            <img src={props.book.volumeInfo.imageLinks.thumbnail} className="left bookThumbnail"></img>
            <br></br>
            <p>{props.book.volumeInfo.description}</p>
        </li>
    )
}
