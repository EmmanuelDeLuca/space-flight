import React from "react";
import './styles/App.css'
import NavBar from "./components/Navbar/NavBar";

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do componente
  render() {
    return <NavBar/>;
  }
}

export default App;
