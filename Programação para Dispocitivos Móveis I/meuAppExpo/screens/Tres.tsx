import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";

interface Props {
  voltar: () => void;
}

export default function Tres({ voltar }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
        <Text style={styles.txtVoltar}>← Voltar</Text>
      </TouchableOpacity>

      {/* Metade superior */}
      <View style={styles.cima}>
        {/* Coluna esquerda: lime inteira */}
        <View style={styles.lime} />

        {/* Coluna direita: aquamarine em cima | teal e skyblue embaixo */}
        <View style={styles.colunaDireita}>
          <View style={styles.teal} />
          <View style={styles.skyblue}>
          </View>
        </View>
      </View>

      {/* Metade inferior - salmon inteira */}
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

  cima: { flex: 0.5, flexDirection: "row" },
  lime: { flex: 0.5, backgroundColor: "lime" },

  colunaDireita: { flex: 0.5, flexDirection: "column" },
  teal: { flex: 0.5, backgroundColor: "teal" },
  skyblue: { flex: 0.5, backgroundColor: "skyblue" },


  baixo: { flex: 0.5, backgroundColor: "salmon" },
});