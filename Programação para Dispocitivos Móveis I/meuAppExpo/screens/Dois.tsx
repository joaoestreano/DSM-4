import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";

interface Props {
  voltar: () => void;
}

export default function Dois({ voltar }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
        <Text style={styles.txtVoltar}>← Voltar</Text>
      </TouchableOpacity>

      {/* Metade superior - crimson dividida em duas colunas */}
      <View style={styles.cima}>
        <View style={styles.esquerda} />
        <View style={styles.direita} />
      </View>

      {/* Metade inferior - salmon */}
      <View style={styles.baixo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
  },
  btnVoltar: {
    position: "absolute",
    top: Constants.statusBarHeight + 8,
    left: 12,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 6,
    borderRadius: 6,
  },
  txtVoltar: { color: "#fff", fontWeight: "bold" },
  cima: {
    flex: 0.5,
    flexDirection: "row",
  },
  esquerda: { flex: 0.5, backgroundColor: "lime" },
  direita: { flex: 0.5, backgroundColor: "aquamarine" },
  baixo: { flex: 0.5, backgroundColor: "salmon" },
});
