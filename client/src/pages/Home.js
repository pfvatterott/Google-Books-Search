import React, { useEffect } from "react";
import { Row, Col, Button, Parallax } from 'react-materialize';
import Section from "../components/Section"
import io from 'socket.io-client'

const socket = io()

function Home() {

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


    return (
        <div>
             <Parallax
                    image={<img alt="" src="https://media.wired.com/photos/59268083cefba457b079a332/master/w_2560%2Cc_limit/BookTA-200552869-001.jpg"/>}
                    options={{
                    responsiveThreshold: 0
                    }}
            />
            <Section>
                <Row className="container">
                    <Col s={12}>
                        <h2 className="center-align">Google Books Search</h2>
                        <br></br>
                    </Col>
                </Row>
                <Row className="container center-align">
                    <Col s={12}>
                        <a href="/search"><Button>Start!</Button></a>
                        <br></br><br></br>
                        <a href="/saved"><Button>Saved Books</Button></a>
                        <br></br><br></br>
                    </Col>
                </Row>
            </Section>
            <Parallax
                    image={<img alt="" src="https://cdn.cfr.org/sites/default/files/styles/full_width_xl/public/image/2015/10/Books_edited.jpg"/>}
                    options={{
                    responsiveThreshold: 0
                    }}
            />
        </div>
    )

}

export default Home;