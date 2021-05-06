import React from 'react'

export default function ResultList(props) {
    return (
        <ul className="collection">
            {props.children}
        </ul>
    )
}
