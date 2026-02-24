import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";

interface Props {
  voltar: () => void;
}

const logo = require("../assets/adaptive-icon.png");

export default function Quatro({ voltar }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
        <Text style={styles.txtVoltar}>← Voltar</Text>
      </TouchableOpacity>

      {/* Metade superior */}
      <View style={styles.cima}>
        {/* Coluna esquerda: lime com imagem */}
        <View style={styles.lime}>
          <Image source={logo} style={styles.image} resizeMode="contain" />
        </View>

        {/* Coluna direita: aquamarine em cima | teal e skyblue embaixo */}
        <View style={styles.colunaDireita}>
          <View style={styles.teal}>
            <Image source={logo} style={styles.image} resizeMode="contain" />
            </View>
          <View style={styles.skyblue}>
              <Image source={logo} style={styles.image} resizeMode="contain" />
            </View>
        </View>
      </View>

      {/* Metade inferior - salmon inteira com imagem */}
      <View style={styles.baixo}>
        <Image source={logo} style={styles.image} resizeMode="contain" />
      </View>
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
  lime: {
    flex: 0.5,
    backgroundColor: "lime",
    justifyContent: "center",
    alignItems: "center",
  },

  colunaDireita: { flex: 0.5, flexDirection: "column" },
  teal: {
    flex: 0.5,
    backgroundColor: "teal",

  },
  skyblue: {
    flex: 0.5,
    backgroundColor: "skyblue",
  },

  image: {
    width: "100%",
    flex: 1,
    alignSelf: "center",
  },

  baixo: {
    flex: 0.5,
    backgroundColor: "salmon",
    justifyContent: "center",
    alignItems: "center",
  },
});
