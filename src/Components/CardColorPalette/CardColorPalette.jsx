import React from "react"
import './CardColorPalette.css'

// map: es una función flecha que se usa para iterar sobre el array de colores y crear un nuevo array de elementos JSX
// key: es un atributo especial que ayuda a React a identificar cada elemento de forma única

function CardColorPalette(properties) {
    return (
        <div className="card-container">
            <div className="card-color-palette">
                {properties.colors.map((color, index) => (
                    <div
                        key={index}
                        className={`card-color-palette-content card-color-palette-${index + 1}`}
                        style={{ backgroundColor: color }}
                    >
                        <span 
                            className="card-color-palette-hover">
                            {color}
                        </span>
                    </div>
                ))}
            </div>
            <div className="card-color-palette-info">
                <div className="card-color-palette-info-icons">
                    <button className="info-icon-button">
                        <i className="bi bi-suit-heart"></i>
                        <span>{properties.likes}</span>
                    </button>
                    <button className="info-icon-button">
                        <i className="bi bi-download"></i>
                        <span>Imagen</span>
                    </button>
                    <button className="info-icon-button">
                        <i className="bi bi-link-45deg"></i>
                        <a href="https://colorhunt.co/palette/3674b5578fcaf5f0cdfada7a" alt="Descarga de paleta de colores">Link</a>
                    </button>
                </div>
                <div>
                    <span className="info-time">{properties.time}</span>
                </div>
            </div>
        </div>
    )
}

export default CardColorPalette