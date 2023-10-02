import React, { useState } from 'react';
import './App.css';

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [anoDeNascimento, setAnoDeNascimento] = useState('');
  const [idadeUsuario, setIdadeUsuario] = useState<number | null>(null);

  const calcularIdade = () => {
    const anoAtual = new Date().getFullYear();
    const anoNasc = parseInt(anoDeNascimento);

    if (isNaN(anoNasc)) {
      alert('Por favor, insira um ano de nascimento válido.');
      return;
    }

    const idadeCalculada = anoAtual - anoNasc;
    setIdadeUsuario(idadeCalculada);
  };

  return (
    <div className="App">
      <div>
        <label>Digite seu nome:</label>
        <input
          type="text"
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
        />
      </div>
      <div>
        <label>Digite o ano que nasceu:</label>
        <input
          type="text"
          value={anoDeNascimento}
          onChange={(e) => setAnoDeNascimento(e.target.value)}
        />
      </div>
      <button onClick={calcularIdade}>Descubra idade</button>
      {idadeUsuario !== null && (
        <p>
          {nomeUsuario}, você tem {idadeUsuario} anos.
        </p>
      )}
    </div>
  );
}

export default App;
