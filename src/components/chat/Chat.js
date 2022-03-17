import elemento from './Chat.elements';
import { PanelTitulo } from './PanelTitulo';
import { Nombre } from '../formularios/Nombre';
import { IconoChat } from '../icono_chat/IconoChat';
import { FechaDeNacimiento } from '../formularios/FechaDeNacimiento';
import { Contacto } from '../formularios/Contacto';
import { useLocalStorage } from '../../helpers/useLocalStorage';
import { useEffect } from 'react';
import { useState } from 'react';
import almacenar from '../../helpers/useLocalStorage';
export const Chat = () => {

    const enviarDatos = async () => {
        const respuesta = await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre:almacenar.obtener("nombre"),
                segundo_nombre: almacenar.obtener("nombre-seg"),
                apellido_paterno: almacenar.obtener("apellido-p"),
                apellido_materno: almacenar.obtener("apellido-m"),
                fecha_de_nacimiento: almacenar.obtener("fecha"),
                email: almacenar.obtener("correo"),
                telefono: almacenar.obtener("telefono"),
            }),
        });

        const contenido = await respuesta.json();

        console.log(contenido);
    };

    return (
        <elemento.Contenedor>

            <elemento.ContenedorTitulo>
                <PanelTitulo />
            </elemento.ContenedorTitulo>

            <elemento.ContenedorChat>

                <elemento.Pregunta>¿Cúal es tu nombre?</elemento.Pregunta>
                <elemento.contenedorFormulario>
                    <IconoChat />
                    <Nombre />
                </elemento.contenedorFormulario>

                <elemento.Pregunta>¿Cúal es tu fecha de nacimiento?</elemento.Pregunta>
                <elemento.contenedorFormulario>
                    <IconoChat />
                    <FechaDeNacimiento />
                </elemento.contenedorFormulario>

                <elemento.Pregunta>Datos de contacto</elemento.Pregunta>
                <elemento.contenedorFormulario>
                    <IconoChat />
                    <Contacto />
                </elemento.contenedorFormulario>

                <elemento.contenedorFormulario>
                    <elemento.Confirmacion>Si los datos son correctos por favor continuemos.</elemento.Confirmacion>
                </elemento.contenedorFormulario>
                <elemento.contenedorFormulario>
                    <elemento.Boton onClick={enviarDatos}>
                        iniciar
                    </elemento.Boton >
                </elemento.contenedorFormulario>

                <elemento.contenedorFormulario>
                    <elemento.Respuesta>
                        Nombre: {almacenar.obtener("nombre")}
                    </elemento.Respuesta>
                </elemento.contenedorFormulario>
                <elemento.contenedorFormulario>
                    <elemento.Respuesta>
                        Fecha de cumpleaños:{almacenar.obtener("fecha")}
                    </elemento.Respuesta>
                </elemento.contenedorFormulario>
                <elemento.contenedorFormulario>
                    <elemento.Respuesta>
                        Correo:{almacenar.obtener("correo")}
                    </elemento.Respuesta>
                </elemento.contenedorFormulario>
                <elemento.contenedorFormulario>
                    <elemento.Respuesta>
                        Teléfono:{almacenar.obtener("telefono")}
                    </elemento.Respuesta>
                </elemento.contenedorFormulario>

            </elemento.ContenedorChat>

        </elemento.Contenedor>

    );
}



