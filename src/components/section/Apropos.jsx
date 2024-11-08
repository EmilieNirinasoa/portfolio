import React from "react";
import Node from "../image/Node.js_logo_2.svg";
import Laravel from "../image/logomark.min.svg";
import Mysql from "../image/logo-mysql-170x115.png";
import Sequelize from "../image/sequelize.png";
import Vue from "../image/vuejs.png";
import react from "../image/React-icon.svg";

export default function Apropos() {
  return (
    <section
      id="apropos"
      className="bg-gray-100 py-10 px-4 md:px-6 lg:px-8"
    >
      <div className="about-cards grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {/* Mon Parcours */}
        <div className="about-card bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Mon Parcours</h2>
          <p className="text-gray-600">
            Développeuse passionnée avec plus de 3 ans d'expérience dans le
            développement web.
            <br />
            J'ai fait 3 ans d'études à{" "}
            <b>l'EMIT (École de Management et d'Innovation Technologiques)</b> à
            Fianarantsoa, Madagascar, et j'ai obtenu ma licence en informatique.
            Je suis maintenant en <b>master</b>.
          </p>
        </div>

        {/* Formation */}
        <div className="about-card bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Formation</h2>
          <p className="text-gray-600">
            Master en Informatique - Spécialisation Développement Web
          </p>
        </div>

        {/* Compétences */}
        <div className="about-card bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Compétences</h2>
          <div className="tech-stack flex flex-wrap justify-center gap-4">
            <img
              className="tech-icon w-16 h-16 object-contain"
              alt="Logo Node.js"
              src={Node}
            />
            <img
              className="tech-icon w-16 h-16 object-contain"
              alt="Logo Laravel"
              src={Laravel}
            />
            <img
              className="tech-icon w-16 h-16 object-contain"
              alt="Logo Sequelize"
              src={Sequelize}
            />
            <img
              className="tech-icon w-16 h-16 object-contain"
              alt="Logo MySQL"
              src={Mysql}
            />
            <img
              className="tech-icon w-16 h-16 object-contain"
              alt="Logo Vue.js"
              src={Vue}
            />
            <img
              className="tech-icon w-16 h-16 object-contain"
              alt="Logo React"
              src={react}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
