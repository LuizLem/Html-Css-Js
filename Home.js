import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <h1 className="titulo">Página Inicial</h1>
      <h2>Para saber mais clique nos links a seguir:</h2>
      <ul className="lista">
        <li><a href="/ciencias-humanas" target="_blank">Ciências Humanas</a></li>
        <li><a href="/ciencias-da-natureza" target="_blank">Ciências da Natureza</a></li>
        <li><a href="/matematica" target="_blank">Matemática</a></li>
        <li><a href="/linguagens" target="_blank">Linguagens</a></li>
        <li><a href="/ti" target="_blank">T.I.</a></li>
        <ul className="sublista">
          <li><a href="/Automação.html" target="_blank">Automação</a></li>
          <li><a href="/metaverso.html" target="_blank">MetaVerso</a></li>
          <li><a href="/Realidade-Aumentada.html" target="_blank">Realidade Aumentada</a></li>
          <li><a href="/inteligencia-artificial.html" target="_blank">Inteligência Artificial</a></li>
          <li><a href="/machine-learning.html" target="_blank">Machine Learning</a></li>
        </ul>
        <li><a href="/Portfólio.html" target="_blank">Portfólio</a></li>
      </ul>
    </div>
  );
}

export default Home;
