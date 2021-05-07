import React from 'react'
import exampleImage from "../../assets/images/logo.png"
import {Button} from "react-materialize"
import "./style.css"

export default function ResultItem(props) {
    function changeButtonColor(e) {
        e.target.classList.add('disabled')
    }

    function processClickButton(e) {
        e.target.classList.add('disabled')
        props.saveBook(props.book.volumeInfo)
    }
    
    return (
        <li class="collection-item bookItem">
            <a href={props.book.volumeInfo.infoLink} target="_blank"><Button className="right" id="viewButton">View</Button></a>
            <Button className="right" id="saveButton" onClick={processClickButton}>Save</Button>
            <h5>{props.book.volumeInfo.title}</h5>
            <p className="writtenBy">Written by:</p>
                <ul>
                    {props.book.volumeInfo.authors.map(author => (
                        <li>{author}</li>
                    ))}
                </ul>
            <img src={props.book.volumeInfo.imageLinks.thumbnail} className="left bookThumbnail"></img>
            <br></br>
            <p>{props.book.volumeInfo.description}</p>
        </li>
    )
}
