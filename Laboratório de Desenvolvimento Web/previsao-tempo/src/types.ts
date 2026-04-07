// Estrutura da previsão que vamos usar no Redux
export interface Forecast {
  dia: string;        // Data da previsão
  tempo: string;      // Código do clima (ex: "pn" = parcialmente nublado)
  maxima: number;     // Temperatura máxima
  minima: number;     // Temperatura mínima
}
