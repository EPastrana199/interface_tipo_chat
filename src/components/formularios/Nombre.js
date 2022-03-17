import React from 'react';
import elemento from './Formularios.elements';
import { useState, useEffect } from 'react';
import almacenar from '../../helpers/useLocalStorage';
export const Nombre = ({ obtener }) => {
    
    const [nombre, setNombre] = useState(
        {
            primernombre: "",
            segundonombre: "",
            apellidopaterno: "",
            apellidomaterno: "",
        }
    );
    
    let nombreCompleto = nombre.primernombre+" "+nombre.segundonombre+" "+nombre.apellidopaterno+" "+nombre.apellidomaterno;

    function handleChange(e) {
    
        switch (e.target.id) {
            case "nombre":
                setNombre({...nombre, 
                    primernombre: e.target.value});
                
            break;
            case "nombre-seg":
                console.log(e.target.value);
                setNombre({...nombre, 
                    segundonombre: e.target.value});
            break;
            case "apellido-p":
                setNombre({...nombre, 
                    apellidopaterno: e.target.value});
            break;
            case "apellido-m":
                setNombre({...nombre, 
                    apellidomaterno: e.target.value});
            break;
        }
        
    }

    
    
    almacenar.guardar("nombre", nombre.primernombre);
    almacenar.guardar("nombre-seg", nombre.segundonombre);
    almacenar.guardar("apellido-p", nombre.apellidopaterno);
    almacenar.guardar("apellido-m", nombre.apellidomaterno);
    

    return(
        <elemento.Contenedor>
            
            <elemento.Formulario action="" method="post">
                
                <elemento.Entrada onChange={handleChange} type="text" placeholder='Primer Nombre' id="nombre" value={obtener}/>

                <elemento.Entrada onChange={handleChange} type="text" placeholder='Segundo Nombre' id="nombre-seg" />

                <elemento.Entrada onChange={handleChange} type="text" placeholder='Apellido Paterno' id="apellido-p" />

                    <elemento.Entrada onChange={handleChange} type="text" placeholder='Apellido Materno' id="apellido-m" />
                
                {nombre.primernombre ||
                nombre.segundonombre ||
                nombre.apellidopaterno ||
                nombre.apellidomaterno
                    ? 
                    <elemento.Respuesta >
                    {nombreCompleto}
                </elemento.Respuesta> : <label></label>
                }

            </elemento.Formulario>
        </elemento.Contenedor>
    );
};