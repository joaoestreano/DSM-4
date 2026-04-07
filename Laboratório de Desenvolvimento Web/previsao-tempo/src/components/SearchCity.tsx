import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { fetchWeather } from "../store/weatherSlice";
import { XMLParser } from "fast-xml-parser";

interface CityOption {
  id: number;
  nome: string;
  estado: string;
}

export default function SearchCity() {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<CityOption[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ------------------------------
  // Autocomplete: busca sugestões enquanto o usuário digita
  // ------------------------------
  useEffect(() => {
    if (city.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    // Debounce: espera 400ms após o usuário parar de digitar
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      setLoadingSuggestions(true);
      try {
        const parser = new XMLParser();
        const sanitized = encodeURIComponent(
          city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c").trim()
        );
        const res = await fetch(`/cptec/XML/listaCidades?city=${sanitized}`);
        const text = await res.text();
        const data: any = parser.parse(text);

        if (data.cidades?.cidade) {
          const list = Array.isArray(data.cidades.cidade)
            ? data.cidades.cidade
            : [data.cidades.cidade];
          setSuggestions(list.slice(0, 6));
          setShowSuggestions(true);
        } else {
          setSuggestions([]);
          setShowSuggestions(false);
        }
      } catch {
        setSuggestions([]);
      } finally {
        setLoadingSuggestions(false);
      }
    }, 400);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [city]);

  // ------------------------------
  // Quando o usuário clica em uma sugestão
  // ------------------------------
  const handleSelectSuggestion = (option: CityOption) => {
    setCity(option.nome);
    setSuggestions([]);
    setShowSuggestions(false);
    dispatch(fetchWeather(option.nome));
  };

  // ------------------------------
  // Submit manual do formulário
  // ------------------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() !== "") {
      setSuggestions([]);
      setShowSuggestions(false);
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-container">
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            className="search-input"
            autoComplete="off"
          />
          {loadingSuggestions && <span className="loading-dots">...</span>}

          {/* Lista de sugestões (autocomplete) */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  onMouseDown={() => handleSelectSuggestion(s)}
                  className="suggestion-item"
                >
                  <span className="suggestion-city">{s.nome}</span>
                  <span className="suggestion-state">{s.estado}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" className="search-btn">
          Buscar
        </button>
      </form>
    </div>
  );
}
