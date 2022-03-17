import React from 'react';
import elemento from './PanelTitulo.elements';
import {BsClipboardPlus } from 'react-icons/bs';
import styled from "styled-components";

const Icono = styled(BsClipboardPlus)`
    width: 80%;
    height: 80%;
    color: white;
`;

export const  PanelTitulo =  () => {

    return (
    <elemento.Contenedor>
        <elemento.ContenedorTextos>
            <elemento.TextoTitulo>
                FORMULARIO
            </elemento.TextoTitulo>
            <elemento.TextoComplemento>
                En menos de 5 minutos
            </elemento.TextoComplemento>
        </elemento.ContenedorTextos>

        <elemento.ContenedorImagen>
            {/* <elemento.Imagen src={clipboard} alt="tabla"/> */}

            <Icono />
        </elemento.ContenedorImagen>

    </elemento.Contenedor>
    );
};