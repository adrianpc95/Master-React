// Importar modulso de react / dependencias
import React, {fragment} from "react";

// Funcion del componente
const MiComponente = () => {

    return (
        <div className="mi-componente">
            <hr/>
            <h2>Componente creado</h2>
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