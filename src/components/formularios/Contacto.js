import React from 'react';
import elemento from './Formularios.elements';
import { useState } from 'react';
import almacenar from '../../helpers/useLocalStorage';

export const Contacto = () => {

    const [contacto, setContacto] = useState(
        {
            correo: "",
            telefono: "",
        }
    );


    function handleChange(e) {
    
        switch (e.target.id) {
            case "correo":
                setContacto({...contacto, 
                    correo: e.target.value});

            break;
            case "telefono":
                console.log(e.target.value);
                setContacto({...contacto, 
                    telefono: e.target.value});
            break;
        }

        
    }

    almacenar.guardar("correo", contacto.correo);
    almacenar.guardar("telefono", contacto.telefono);

    return(
        <elemento.Contenedor>
            <elemento.Formulario action="" method="post">

                <elemento.Entrada onChange={handleChange} type="text" placeholder='Correo' id="correo" />

                <elemento.Entrada onChange={handleChange} type="text" placeholder='Teléfono celular' id="telefono" />
               
                    { contacto.correo ||
                      contacto.telefono ?
                    <elemento.Respuesta>
                    {"Correo: "+contacto.correo+" Tel.:"+contacto.telefono}
                    </elemento.Respuesta> :
                    <label></label>
                    }
                
            </elemento.Formulario>
        </elemento.Contenedor>
    );
};