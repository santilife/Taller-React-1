import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";

//Primer punto

function saludo() {
  const nombre = prompt("Digita tu nombre: ");
  return <h2>Bienvenido {nombre}</h2>;
}

//export default saludo;



//Segundo punto
function saludoMod() {
  const nombre = prompt("Digita tu nombre: ");

  const traduccion = {
    es: "Bienvenido",
    en: "Welcome",
    fr: "Bienvenue",
  };

  const opcionIdioma = prompt("Digita el idioma (es, en, fr): ");
  const saludos = traduccion[opcionIdioma] || traduccion["es"];

  return (
    <h2>
      {saludos} {nombre}
    </h2>
  );
}

//export default saludoMod;



//Tercer punto
function ChildComponente() {
  return (
    <div style={{ backgroundColor: "cyan", padding: "10px" }}>
      <h4>Este es el componente</h4>
    </div>
  );
}

function Contenedor() {
  return (
    <div style={{ backgroundColor: "gold", padding: "10px", width: "50vw" }}>
      <h3>Testeando Children</h3>
      <ChildComponente></ChildComponente>
    </div>
  );
}

//export default Contenedor;



//Cuarto punto
function ContadorState() {
  const [cont, setCont] = useState(0);

  return (
    <div>
      <div
        style={{
          backgroundColor: "orange",
          padding: "5px",
          borderRadius: "15px",
        }}
      >
        <p>{cont}</p>
      </div>
      <div style={{ marginTop: '5px' }}>
        <button onClick={() => setCont(cont - 1)}> - </button>
        <button onClick={() => setCont(cont + 1)}> + </button>
      </div>
    </div>
  );
}

export { saludo, saludoMod, Contenedor, ContadorState };
