// Importar modulso de react / dependencias
import React, {fragment} from "react";

// Funcion del componente
const MiComponente = () => {

    let nombre = "Adrian";
    let web = "https://github.com/adrianpc95";

    let usuario = {
        nombre: "Adrian",
        apellido: "Piñol",
        web: "https://github.com/adrianpc95"
    };


    return (
        <div className="mi-componente">
            <hr/>
            <h2>Componente creado</h2>
            <h3>Datos del usuario</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>Apellido: <strong>{usuario.apellido}</strong></li>
                <li>Web: <strong>{usuario.web}</strong></li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    
    );
};

// Export
export default MiComponente;