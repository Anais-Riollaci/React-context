import React from "react";

//#2 Créer le contexte, il faut lui indiquer la forme des données qu'il va porter
export default React.createContext({
theme: "",  //peut importe les valeurs, le but est d'indiquer la forme des données
updateTheme: (name) => {}
});

