import React from 'react'

function Components_01() {
    const info = {
        nome: "Gustavo",
        sobrenome: "Drumond",
        matricula: 2314290054
    }

    const materia = {
        professor: "Felipe",
        materia: "Construção de Frontend"
    }



    return (
    <div>
        <p>
            Olá, eu sou {info.nome} {info.sobrenome}, matricula: {info.matricula}
        </p>
        <p>
            Materia: {materia.materia} <br />
            Professor: {materia.professor}
        </p>
    </div>
  )
}

export default Components_01