import React from 'react';

import {FaUserAlt} from 'react-icons/fa';
import styled from 'styled-components';

const Icono = styled(FaUserAlt)`
    height: 100%;
    width: 100%;
    color: #F074DC;
    border-radius: 50%;
`;

const Contenedor = styled.div`
    border-radius: 50%;
    background-color: #eeee;
    height: 50px;
    width: 50px;
    padding: 5px;
    border: 3px solid #F074DC;
    margin: 5px;
    
`;

export const IconoChat = () => {

    return (
        <Contenedor>
            <Icono />
        </Contenedor>
    );
};