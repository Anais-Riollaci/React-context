import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

//#3 Importer le context partout où l'on souhaite l'utiliser
import ThemeContext from "./ThemeContext";

import "./styles.css";

// Composant en fin de chaine
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
function ThemeChoice(props) {
//#6 Consommer le context: On peut récupérer la valeur du context qui nous intéresse
const {theme, updateTheme} = useContext(ThemeContext);

  const handleChange = event => {
    const value = event.currentTarget.value;
    updateTheme(value);
  };

  return (
    <select name="theme" defaultValue={theme} onChange={handleChange}>
      <option value="dark">Sombre</option>
      <option value="light">Clair</option>
    </select>
  );
}

// Composant en deuxième ligne
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
// Notons qu'en vrai il en a rien à foutre il s'en sert pas lui même
// C'est uniquement pour pouvoir le passer au composant ThemeChoice ...
function ToolBar(props) {
  return (
    <div>
      <button>Zoomer</button>
      <button>Dezoomer</button>
      <ThemeChoice  />
    </div>
  );
}

//#1 Définir le besoin, quelles sont les infos que le context doit distribuer
function App() {
  // Le thème est en fait une classe CSS qui englobera notre app
  // Ca change juste le couleur de la typo ...
  const [theme, setTheme] = useState("light");


const contextValue = {
  theme,
  updateTheme: setTheme
}

  return ( 
// #4 Positionner le context: il se comporte comme un composant qui en englobe d'autres
// #5 Fournir une valeur: le contexte sera porteur d'une valeur, de données, d'informations 
<ThemeContext.Provider value={contextValue}>
    <div className={theme}>
      <ToolBar />
      <p>Theme utilisé : {theme}</p>
    </div>
</ThemeContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
