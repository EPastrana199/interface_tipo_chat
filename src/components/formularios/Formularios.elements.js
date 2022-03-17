import styled from "styled-components";
const elemento = {};

elemento.Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 100%;
    /* background-color: red; */
`;

elemento.ContenedorIcono = styled.div`
    background-color: red;
    width: 30px;
    height: 30px;
    display: flex;
`;

elemento.Formulario = styled.form`
width: 100%;
    display: flex;
    flex-direction: column;
`;

elemento.Boton = styled.button`
    
    align-self: center;
    color: white;
    font-size: 15px;
    font-weight: bold;
    border: none;
    background-color: #F074DC;
    width: 200px;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 5px;
    
`;

elemento.Entrada = styled.input`
    margin: 8px;
    padding: 8px;
    width: auto;
`;

elemento.Respuesta = styled.label`
    border-radius: 5px;
    align-self: flex-end;
    color: white;
    font-weight: bold;
    margin: 8px;
    padding: 8px;
    width: 100%;
    background-color: #F074DC;
    transition: all .3s ease;

    &:hover {
        background-color: #FB00D2EA;
        margin-top: 13px;
    }
`;

export default elemento;