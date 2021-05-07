import React from 'react'
import exampleImage from "../../assets/images/logo.png"
import {Button} from "react-materialize"
import "./style.css"
import API from "../../utils/API"


export default function SavedItem(props) {

    
    return (
        <li class="collection-item bookItem">
            <Button className="right" id="viewButton" href={props.bookData.link}>View</Button>
            <Button className="right" id="deleteButton" onClick={() => props.deleteBook(props.bookData._id)}>Delete</Button>
            <h5>{props.bookData.title}</h5>
            <p className="writtenBy">Written by:</p>
                <ul>
                    {props.bookData.authors.map(author => (
                        <li>{author}</li>
                    ))}
                </ul>
            <img src={props.bookData.image} className="left bookThumbnail"></img>
            <br></br>
            <p>{props.bookData.description}</p>
            <br></br>
            <br></br>
            <br></br>
        </li>
    )
}
