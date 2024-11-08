import React from "react"
import Acceuil from "./section/Acceuil"
import Apropos from "./section/Apropos"
import Projet from "./section/Projet"
import Contact from "./section/Contact"
export default function Main(params) {
    return(
        
          <div>
            <Acceuil/>
            <Apropos/>
            <Projet/>
            <Contact/>
          </div>
       
    )
}