import { useSelector } from "react-redux";
import type { RootState } from "../store";

// Mapeamento dos códigos de tempo do INPE para descrição e emoji
const weatherDescription: Record<string, { label: string; icon: string }> = {
  ec: { label: "Encoberto c/ chuva", icon: "🌧️" },
  ci: { label: "Chuva isolada", icon: "🌦️" },
  c:  { label: "Chuva", icon: "🌧️" },
  in: { label: "Instável", icon: "⛈️" },
  pp: { label: "Poss. chuva isolada", icon: "🌂" },
  cm: { label: "Chuva pela manhã", icon: "🌦️" },
  cn: { label: "Chuva à noite", icon: "🌧️" },
  pt: { label: "Chuva a tarde", icon: "🌦️" },
  pm: { label: "Parcial. nublado manhã", icon: "⛅" },
  np: { label: "Nublado c/ pancadas", icon: "⛈️" },
  pc: { label: "Poss. chuva", icon: "🌦️" },
  pn: { label: "Parcialmente nublado", icon: "⛅" },
  nn: { label: "Nublado à noite", icon: "☁️" },
  nc: { label: "Nublado c/ chuva à noite", icon: "🌧️" },
  n:  { label: "Nublado", icon: "☁️" },
  nv: { label: "Nevoeiro", icon: "🌫️" },
  cl: { label: "Céu Claro", icon: "☀️" },
  an: { label: "Abertas à noite", icon: "🌙" },
  g:  { label: "Geada", icon: "🧊" },
  ne: { label: "Neve", icon: "❄️" },
  nd: { label: "Não definido", icon: "❓" },
  psc:{ label: "Poss. chuva fraca", icon: "🌂" },
  ps: { label: "Poss. neve", icon: "❄️" },
  pn2:{ label: "Poss. neve isolada", icon: "❄️" },
  t:  { label: "Tempestade", icon: "⛈️" },
  ps2:{ label: "Poss. chuva/neve", icon: "🌨️" },
  v:  { label: "Variável", icon: "🌤️" },
  mn: { label: "Manhã nublada", icon: "🌥️" },
  fn: { label: "Frio e nublado", icon: "🥶" },
  psh:{ label: "Poss. chuva forte", icon: "⛈️" },
};

function getWeatherInfo(code: string) {
  return weatherDescription[code] || { label: code, icon: "🌡️" };
}

// Formata "2025-04-07" → "07/04"
function formatDate(dateStr: string): string {
  if (!dateStr) return dateStr;
  const parts = dateStr.split("-");
  if (parts.length === 3) return `${parts[2]}/${parts[1]}`;
  return dateStr;
}

export default function ForecastList() {
  const { forecasts, status, error } = useSelector(
    (state: RootState) => state.weather
  );

  if (status === "loading") {
    return (
      <div className="forecast-status">
        <div className="spinner" />
        <p>Carregando previsão...</p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="forecast-status error">
        <span>⚠️</span>
        <p>Erro: {error}</p>
      </div>
    );
  }

  if (forecasts.length === 0) {
    return (
      <div className="forecast-status empty">
        <span>🔍</span>
        <p>Nenhuma previsão encontrada. Digite uma cidade acima.</p>
      </div>
    );
  }

  return (
    <div className="forecast-container">
      <h2 className="forecast-title">Previsão para 4 dias</h2>
      <div className="forecast-grid">
        {forecasts.map((f, i) => {
          const { label, icon } = getWeatherInfo(f.tempo);
          return (
            <div key={i} className="forecast-card">
              <div className="forecast-date">{formatDate(f.dia)}</div>
              <div className="forecast-icon">{icon}</div>
              <div className="forecast-label">{label}</div>
              <div className="forecast-temps">
                <span className="temp-max">↑ {f.maxima}°C</span>
                <span className="temp-min">↓ {f.minima}°C</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
