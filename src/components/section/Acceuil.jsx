import React from "react"
import Moi from '../image/Emilie.png'
import CV from '../cv/CV.pdf'
export default function Acceuil() {
    
    return(
        
        <section id="accueil">
        <div class="hero-content">
            <h1>Emilie ,Développeuse Full Stack</h1>
            <p>Passionnée par la création d'applications web modernes et performantes.</p>
            <button class="cv-button">
            <a
          href={CV}
          download
          className="cv-button bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none transition-all"
        >
          Télécharger CV
        </a>
            </button>
        </div>
        <div class="hero-image">
        <img
          alt="portrait professionnel d'un développeur, style moderne et minimaliste"
          src={Moi}
          className="rounded-full w-64 h-64 object-cover hover:scale-105 transition-transform duration-500"
        />
        </div>
    </section>

       
    )
}