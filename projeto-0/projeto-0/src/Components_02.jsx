import React from 'react';

const Components = () => {
  const info = [
    {
      nome: "Gustavo",
      sobrenome: "Drumond",
      cargo: "Analista de TI",
      salario: 4500.00
    },
    {
      nome: "Paulo",
      sobrenome: "Batista",
      cargo: "Desenvolvedor Frontend",
      salario: 3500.00
    },
    {
      nome: "Pedro",
      sobrenome: "Silva",
      cargo: "SCRUM master",
      salario: 3000.00
    },
    {
      nome: "Daniel",
      sobrenome: "Silvera",
      cargo: "Desenvolvedor Backend",
      salario: 5000.00
    },{
      nome: "Guilherme",
      sobrenome: "Pereira",
      cargo: "DBA",
      salario: 4500.00
    }
  ];

  return (
    <div>
      <h1>Lista de Profissionais:</h1>
      {info.map((pessoa, chave) => (
        <div key={chave}>
          <p>
            Profissional: {pessoa.nome} {pessoa.sobrenome}<br />
            Cargo: {pessoa.cargo}<br />
            Salário: R${pessoa.salario.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Components;
