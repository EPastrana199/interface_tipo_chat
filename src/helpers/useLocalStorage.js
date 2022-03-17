import React from 'react';
import { useState } from 'react';

const almacenar = {};

almacenar.guardar = (key, value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log("No se pudo guardar")
    }
};
almacenar.obtener = (key) => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : "";
    } catch (error) {
        return "";
    }
};

export default almacenar;