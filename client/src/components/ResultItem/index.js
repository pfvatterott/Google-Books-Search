import React from 'react'
import exampleImage from "../../assets/images/logo.png"
import {Button} from "react-materialize"
import "./style.css"

export default function ResultItem() {
    return (
        <li class="collection-item">
            <Button className="right" id="viewButton">View</Button>
            <Button className="right" id="saveButton">Save</Button>
            <h5>Harry Potter and the Deathly Hallows</h5>
            <p>Written by J. K. Rowling</p>
            <img src={exampleImage} className="left"></img>
            <br></br>
            <p>Harry Potter is preparing to leave the Dursleys and Privet Drive for the last time. But the future that awaits him is full of danger, not only for him, but for anyone close to him - and Harry has already lost so much. Only by destroying Voldemort's remaining Horcruxes can Harry free himself and overcome the Dark Lord's forces of evil. In this dramatic conclusion to the Harry Potter series, Harry must leave his most loyal friends behind, and in a final perilous journey find the strength and the will to face his terrifying destiny: a deadly confrontation that is his alone to fight. These adult editions with glorious jacket art by Andrew Davidson are now available in hardback for the first time.</p>
        </li>
    )
}
