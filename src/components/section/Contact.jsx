import React, { useState } from "react";

export default function Contact() {
  // État pour stocker les données de chaque soumission
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // État pour stocker toutes les soumissions
  const [submissions, setSubmissions] = useState([]);

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ajouter la nouvelle soumission à la liste des soumissions
    setSubmissions([...submissions, formData]);

    // Réinitialiser le formulaire
    setFormData({ fullName: "", email: "", message: "" });
  };

  // Fonction pour télécharger le fichier JSON unique
  const handleDownload = () => {
    // Convertir les soumissions en JSON
    const jsonData = JSON.stringify(submissions, null, 2);

    // Créer un objet Blob pour générer un fichier JSON
    const blob = new Blob([jsonData], { type: "application/json" });

    // Générer un lien de téléchargement
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "all_submissions.json";
    link.click();
  };

  return (
    <section id="contact" className="p-6 bg-gray-900">
      <div className="contact-form max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="form-row grid grid-cols-1 gap-4 mb-4">
            <input
              type="text"
              name="fullName"
              placeholder="Nom complet"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded-lg w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded-lg w-full"
            />
          </div>
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-lg w-full mb-4"
          ></textarea>
          <button
            type="submit"
            className="submit-btn bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all w-full"
          >
            Envoyer
          </button>
        </form>
        <button
          onClick={handleDownload}
          className="download-btn mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all w-full"
        >
          Télécharger JSON
        </button>
      </div>
    </section>
  );
}
