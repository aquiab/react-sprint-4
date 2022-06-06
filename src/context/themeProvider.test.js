import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeButton from "../components/ThemeButton.js"
import { ThemeProvider } from './ThemeProvider';


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
const ligth = `
    --imagenBarraMain:invert(0%);
    --fondoColorBarraMain:grey;
    --colorFuenteBarraMain:white;
    --colorFuenteBarraButton:white;
    --colorFondoBarraButton:rgb(167, 167, 167);
    --backgroundPrincipal: #efefef;
    --backgroundSidebar: transparent;
    `;


describe('Modo oscuro', () => {
    test('mando el theme provider por default y verifico que esta en modo claro', () => {
        //Renderizo el componente
        render(
            <ThemeProvider>
                <ThemeButton />
            </ThemeProvider>


        );

        // verifico si el root style esta en modo oscuro
        let boton = screen.getByText("Cambiar de tema")
        console.log (boton)
        expect(boton.closest("button")).toHaveClass("fa-toggle-off")
        userEvent.click(boton)
        expect(boton.closest("button")).toHaveClass("fa-toggle-on")
    })
})