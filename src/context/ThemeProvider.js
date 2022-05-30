import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem("darkMode"))
	);

	const root = document.querySelector(":root");

	const ligth = `
    --imagenBarraMain:invert(0%);
    --fondoColorBarraMain:grey;
    --colorFuenteBarraMain:white;
    --colorFuenteBarraButton:white;
    --colorFondoBarraButton:rgb(167, 167, 167);
    --backgroundPrincipal: #efefef;
    --backgroundSidebar: transparent;
    `;

	const dark = `
    --imagenBarraMain:invert(100%);
    --fondoColorBarraMain:grey;
    --colorFuenteBarraMain:white;
    --colorFuenteBarraButton:white;
    --colorFondoBarraButton:rgb(167, 167, 167);
    --backgroundPrincipal: #222222;
    --backgroundSecundario: #494f51;
    --colorFuente: white;
    --backgroundSidebar:  #22222290;
    color: var(--colorFuente);
    `;

	root.style = darkMode ? dark : ligth;
	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
