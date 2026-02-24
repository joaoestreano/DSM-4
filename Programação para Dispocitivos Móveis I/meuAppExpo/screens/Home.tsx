import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

// Componentes de cada exercício
import Um from "./Um";
import Dois from "./Dois";
import Tres from "./Tres";
import Quatro from "./Quatro";
import Cinco from "./Cinco";
import Seis from "./Seis";
import Sete from "./Sete";
import Oito from "./Oito";
import Nove from "./Nove";
import Dez from "./Dez";

type Tela =
  | "home"
  | "um"
  | "dois"
  | "tres"
  | "quatro"
  | "cinco"
  | "seis"
  | "sete"
  | "oito"
  | "nove"
  | "dez";

export default function Home() {
  const [tela, setTela] = React.useState<Tela>("home");

  if (tela === "um") return <Um voltar={() => setTela("home")} />;
  if (tela === "dois") return <Dois voltar={() => setTela("home")} />;
  if (tela === "tres") return <Tres voltar={() => setTela("home")} />;
  if (tela === "quatro") return <Quatro voltar={() => setTela("home")} />;
  if (tela === "cinco") return <Cinco voltar={() => setTela("home")} />;
  if (tela === "seis") return <Seis voltar={() => setTela("home")} />;
  if (tela === "sete") return <Sete voltar={() => setTela("home")} />;
  if (tela === "oito") return <Oito voltar={() => setTela("home")} />;
  if (tela === "nove") return <Nove voltar={() => setTela("home")} />;
  if (tela === "dez") return <Dez voltar={() => setTela("home")} />;

  const botoes: { label: string; tela: Tela }[] = [
    { label: "Um", tela: "um" },
    { label: "Dois", tela: "dois" },
    { label: "Três", tela: "tres" },
    { label: "Quatro", tela: "quatro" },
    { label: "Cinco", tela: "cinco" },
    { label: "Seis", tela: "seis" },
    { label: "Sete", tela: "sete" },
    { label: "Oito", tela: "oito" },
    { label: "Nove", tela: "nove" },
    { label: "Dez", tela: "dez" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={require("../assets/adaptive-icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.titulo}>HOME</Text>
        <View style={styles.grade}>
          {botoes.map((b) => (
            <TouchableOpacity
              key={b.tela}
              style={styles.botao}
              onPress={() => setTela(b.tela)}
            >
              <Text style={styles.botaoTexto}>{b.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { alignItems: "center", paddingVertical: 20 },
  logo: { width: 140, height: 140 },
  titulo: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
  grade: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "80%",
  },
  botao: {
    backgroundColor: "#f5a623",
    margin: 5,
    width: "45%",
    alignItems: "center",
    padding: 12,
    borderRadius: 4,
  },
  botaoTexto: { color: "#fff", fontWeight: "bold" },
});
