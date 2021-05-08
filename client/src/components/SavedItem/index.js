import React from 'react'
import {Button} from "react-materialize"
import "./style.css"



export default function SavedItem(props) {

    function renderAuthors(authors) {
        console.log(authors)
        if (authors.length === 0) {
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
            <a href={props.bookData.link} target="_blank"><Button className="right" id="viewButton">View</Button></a>
            <Button className="right" id="deleteButton" onClick={() => props.deleteBook(props.bookData._id)}>Delete</Button>
            <h5>{props.bookData.title}</h5>
            <p className="writtenBy">Written by: </p><p>{renderAuthors(props.bookData.authors)}</p>
            <img src={props.bookData.image} className="left bookThumbnail"></img>
            <br></br>
            <p>{props.bookData.description}</p>
            <br></br>
            <br></br>
            <br></br>
        </li>
    )
}
