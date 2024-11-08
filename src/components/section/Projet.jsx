import React from "react"
import mpu from "../image/mpu.png"
import rh from "../image/rh.png"
import TL from "../image/télémedecine .png"
import SP from "../image/sp.png"
export default function Projet(params) {
    return(
        
<section id="projets">
        <div class="project-grid">
            <div class="project-card">
                <img alt="capture d'écran d'une application web moderne" src={mpu} width="300" height="200"/>
                <div class="project-info">
                    <h3>Projet 1</h3>
                    <p>Application web pour une association concernant la recherche d'un emploi</p>
                </div>
            </div>
            <div class="project-card">
                <img alt="capture d'écran d'une interface utilisateur élégante" src={rh} width="300" height="200"/>
                <div class="project-info">
                    <h3>Projet 2</h3>
                    <p>Application web pour la Gestion des personnels personalisable(nom,logo,etc...)</p>
                </div>
            </div>
            <div class="project-card">
                <img alt="capture d'écran d'une application mobile" src={TL} width="300" height="200"/>
                <div class="project-info">
                    <h3>Projet 3</h3>
                    <p>Application web qui assure la communication entre patients et docteurs avec une assistante virtuelle </p>
                </div>
            </div>
            <div class="project-card">
                <img alt="capture d'écran d'un site web portfolio" src={SP} width="300" height="200"/>
                <div class="project-info">
                    <h3>Projet 4</h3>
                    <p>Site Web Personnel <br />pour voir tous mes projet ,visitez mon compte github:  https://github.com/EmilieNirinasoa</p>
                </div>
            </div>
        </div>
    </section>
       
    )
}