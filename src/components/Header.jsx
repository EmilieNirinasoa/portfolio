import React from "react"
export default function Header( ) {

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.7)';
        }
    });
    return(
        
            <header>
        <nav>
            <div class="logo">Portfolio</div>
            <div class="nav-links">
                <a href="#accueil">Acceuil</a>
                <a href="#apropos">À propos</a>
                <a href="#projets">Projets</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    </header>
       
    )
}