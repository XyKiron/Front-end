import React, { useState } from 'react';

const IMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState('');

    const calcularIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (pesoNum > 0 && alturaNum > 0) {
            const imc = pesoNum / (alturaNum * alturaNum);
            setResultado(imc.toFixed(2));
            setPeso('');
            setAltura('');
            setError('');
        } else {
            setError("Insira dados válidos.");
        }
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>
                        Insira o peso (kg):
                        <input 
                            type="number" 
                            value={peso} 
                            onChange={(e) => setPeso(e.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Insira a altura (m):
                        <input 
                            type="number" 
                            value={altura} 
                            onChange={(e) => setAltura(e.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <input 
                        type="button" 
                        value="Calcular" 
                        onClick={calcularIMC} 
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>
                    {resultado && (
                        <h2>Seu IMC é: {resultado}</h2>
                    )}
                </div>
            </form>
        </div>
    );
};

export default IMC;
