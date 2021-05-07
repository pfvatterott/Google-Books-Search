import React from 'react'
import exampleImage from "../../assets/images/logo.png"
import {Button} from "react-materialize"
import "./style.css"

export default function ResultItem(props) {
    console.log(props)
    return (
        <li class="collection-item bookItem">
            <a href={props.book.volumeInfo.infoLink} target="_blank"><Button className="right" id="viewButton">View</Button></a>
            <Button className="right" id="saveButton" onClick={() => props.saveBook(props.book.volumeInfo)}>Save</Button>
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
