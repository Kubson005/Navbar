import React, {useState, useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export function Header() {

    const [darkModeOn, setDarkMode] = useState(false)
    useEffect(()=> setDarkMode(Boolean(localStorage.getItem('displayMode'))), [])

    const saveMode = () =>{
        setDarkMode(!darkModeOn)
        localStorage.setItem("displayMode", darkModeOn)
        console.log(localStorage)
    }

    if (darkModeOn === true){
    return (
        
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Form inline>
        <Button onClick= {saveMode} variant="outline-info">Darkmode</Button>
        </Form>
        </Navbar>
         
        )  
    }
    else{
    return (
        
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Form inline>
    <Button onClick= {saveMode} variant="outline-info">Darkmode</Button>
    </Form>
  </Navbar>
 
    )

    }
}