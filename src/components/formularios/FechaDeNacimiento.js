import React from 'react';
import elemento from './Formularios.elements';
import { useState } from 'react';
import almacenar from '../../helpers/useLocalStorage';

export const FechaDeNacimiento = () => {

    const [fecha, setFecha] = useState(
        {
            dia: "",
            mes: "",
            anio: "",
        }
    );

    let cumpleanios = fecha.dia+"-"+fecha.mes+"-"+fecha.anio;
        
    function handleChange(e) {

        switch (e.target.id) {
            case "dia":
                setFecha({
                    ...fecha,
                    dia: e.target.value
                });

                break;
            case "mes":
                setFecha({
                    ...fecha,
                    mes: e.target.value
                });
                break;
            case "anio":
                setFecha({
                    ...fecha,
                    anio: e.target.value
                });
                break;
        }

    }

    almacenar.guardar("fecha", cumpleanios);

    return (
        <elemento.Contenedor>
            <elemento.Formulario action="" method="post">

                <elemento.Entrada onChange={handleChange} type="text" placeholder='Día' id="dia" />

                <elemento.Entrada onChange={handleChange} type="text" placeholder='Mes' id="mes" />

                <elemento.Entrada onChange={handleChange} type="text" placeholder='Año' id="anio" />

                {fecha.dia ||
                    fecha.mes ||
                    fecha.anio ?
                    <elemento.Respuesta>
                        {fecha.dia+" "+fecha.mes+" "+fecha.anio}
                    </elemento.Respuesta> :
                    <label></label>
                }

            </elemento.Formulario>
        </elemento.Contenedor>
    );
};