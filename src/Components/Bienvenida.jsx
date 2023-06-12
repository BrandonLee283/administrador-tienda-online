import React from 'react'
import '../styles/bienvenida.css'
const Bienvenida = () => {
    return (
        <div>
            <div class="welcome">
                <div class="form-container">
                    <img src="./assets/logos/logo_yard_sale.svg" alt="logo" class="logo"/>
                        <h1 class="title">Bienvenido a nuestro sitio para administradores de nuestra tienda</h1>
                        <p class="subtitle">Aqui podras actualizar, eliminar y editar todo sobre la tienda</p>
                        <div class="email-image">
                            <img src="assets/bienvenido.png" alt="bienvenido" class="email"/>
                        </div>
                        <button class="primary-button login-button">
                            Cerrar Sesion
                        </button>
                        <p class="resend">
                            <span>Desea Cerrar Sesion ?</span>
                            <a href="/"> Clic here</a>
                        </p>
                </div>
            </div>

        </div>
    )
}

export default Bienvenida