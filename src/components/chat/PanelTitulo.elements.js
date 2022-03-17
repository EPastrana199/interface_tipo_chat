import styled from "styled-components";

const elemento = {};

elemento.Contenedor = styled.div`

    background-color: #F074DC;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 800px){
        flex-direction: row;
    }
`;

elemento.ContenedorTextos = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

elemento.TextoTitulo = styled.h2`
    padding: 30px;
    color: white;
    text-align: center;
    margin: 0;

`;

elemento.TextoComplemento = styled.h3`
    text-align: center;
    color: white;
    margin: 0;
    padding: 30px;
`;


elemento.ContenedorImagen = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
        height: 90%;
    }
`;

elemento.Imagen = styled.img`
    width: auto;
    height: 80%;
`;


export default elemento;