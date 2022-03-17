import styled from "styled-components";

const elemento = {};

elemento.Contenedor = styled.div`
    background-color: #eeee;
    border-radius: 10px;
    border: 1px solid #eeee;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 50px;
    height: 500px;
    width: auto;
    display: flex;
    @media (max-width: 800px){
        border-radius: 0;
        flex-direction: column;
        margin: 0;
        height: 100vh;
    }
`;

elemento.ContenedorTitulo = styled.div`
    background-color:  #F074DC;
    border-radius: 10px;
    height: 100%;
    width: 40%;
    @media (max-width: 800px){
        border-radius: 0;
        width: 100%;
        height: 250px;
    }
`;

elemento.ContenedorChat = styled.div`
    background-color: #eeee;
    border-radius: 10px;
    height: auto;
    width: 100%;
    overflow: scroll;

    @media (max-width: 800px){
        
        width: 100%;
        height: auto;
        margin: 0;
    }
`;

elemento.contenedorFormulario = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;  
    margin-top: 30px;
`;

elemento.Pregunta = styled.h2`
    text-align: center;
`;

elemento.Confirmacion = styled.h2`
    text-align: center;
    background-color: #696969;
    color: white;
    font-weight: bold;
    padding: 2px 5px;
    border-radius: 5px;

`;

elemento.Boton = styled.button`
    
    align-self: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border: none;
    background-color: #F074DC;
    width: 200px;
    padding: 15px 15px;
    margin: 5px 0;
    border-radius: 5px;
    transition: all .2s ease;
    &:hover {
        background-color: #FB00D2EA;
        margin-top: 9px;
    }
    
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