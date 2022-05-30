import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem("darkMode"))
	);

	const root = document.querySelector(":root");

	const ligth = `
    --imagenBarraMain:invert(100%);
    --fondoColorBarraMain:grey;
    --colorFuenteBarraMain:white;
    --colorFuenteBarraButton:white;
    --colorFondoBarraButton:rgb(167, 167, 167);`;
    
	const dark =
		`--imagenBarraMain:black;
        --fondoColorBarraMain:black;
        --colorFuenteBarraMain:white;
        --colorFuenteBarraButton:white;
        --colorFondoBarraButton:rgb(167, 167, 167);`;

	root.style = darkMode ? dark : ligth;
	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
