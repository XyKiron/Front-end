import React from 'react'

function Components_01() {
    const info = {
        nome: "Gustavo",
        sobrenome: "Drumond"
    }

    return (
    <div>
        <p>
            Olá, eu sou {info.nome} {info.sobrenome}
        </p>
    </div>
  )
}

export default Components_01