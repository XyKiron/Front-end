import React from 'react';

const Components = () => {
  const info = [
    {
      nome: "Gustavo",
      sobrenome: "Drumond",
      id: 101,
      cargo: "Analista de TI",
      salario: 4500.00
    },
    {
      nome: "Paulo",
      sobrenome: "Batista",
      id: 102,
      cargo: "Desenvolvedor Frontend",
      salario: 3500.00
    },
    {
      nome: "Pedro",
      sobrenome: "Silva",
      id: 103,
      cargo: "SCRUM master",
      salario: 3000.00
    },
    {
      nome: "Daniel",
      sobrenome: "Silvera",
      id: 104,
      cargo: "Desenvolvedor Backend",
      salario: 5000.00
    },{
      nome: "Guilherme",
      sobrenome: "Pereira",
      id: 105,
      cargo: "DBA",
      salario: 4500.00
    }
  ];

  const ordenar = [...info].sort((a,b) => a.nome.localeCompare(b.nome))

  return (
    <div>
      <h1>Lista de Profissionais:</h1>
      {ordenar.map((pessoa) => (
        <div key={pessoa.id}>
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
