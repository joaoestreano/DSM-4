import SearchCity from "./components/SearchCity";
import ForecastList from "./components/ForecastList";

export default function App() {
  return (
    <div className="app">
      {/* Cabeçalho */}
      <header className="app-header">
        <div className="header-icon">🌦</div>
        <h1 className="app-title">Previsão do Tempo</h1>
        <p className="app-subtitle">Dados via INPE / CPTEC</p>
      </header>

      {/* Corpo */}
      <main className="app-main">
        <SearchCity />
        <ForecastList />
      </main>
    </div>
  );
}
