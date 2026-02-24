import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import Constants from "expo-constants";

const logo = require("../assets/adaptive-icon.png");

interface Props {
  voltar: () => void;
}

export default function Cinco({ voltar }: Props) {
  const mostrarAlerta = () => Alert.alert("Boa noite!");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
        <Text style={styles.txtVoltar}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.cima}>
        <View style={[styles.quadrante, { backgroundColor: "lime" }]}>
          <TouchableOpacity onPress={mostrarAlerta}>
            <Image source={logo} style={styles.imagem} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={[styles.quadrante, { backgroundColor: "aquamarine" }]}>
          <TouchableOpacity onPress={mostrarAlerta}>
            <Image source={logo} style={styles.imagem} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.baixo}>
        <View style={[styles.quadrante, { backgroundColor: "teal" }]}>
          <TouchableOpacity onPress={mostrarAlerta}>
            <Image source={logo} style={styles.imagem} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={[styles.quadrante, { backgroundColor: "skyblue" }]}>
          <TouchableOpacity onPress={mostrarAlerta}>
            <Image source={logo} style={styles.imagem} resizeMode="contain" />
          </TouchableOpacity>
        </View>
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
  baixo: { flex: 0.5, flexDirection: "row" },
  quadrante: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: { width: 64, height: 64 },
});
