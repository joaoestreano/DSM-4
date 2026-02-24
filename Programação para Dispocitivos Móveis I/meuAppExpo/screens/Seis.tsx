import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

interface Props {
  voltar: () => void;
}

export default function Seis({ voltar }: Props) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [resultado, setResultado] = useState("");

  const salvar = () => {
    setResultado(`${nome} - ${idade}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
        <Text style={styles.txtVoltar}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome"
        />

        <Text style={styles.label}>Idade</Text>
        <TextInput
          style={styles.input}
          value={idade}
          onChangeText={setIdade}
          placeholder="Digite a idade"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.btnSalvar} onPress={salvar}>
          <Text style={styles.txtBotao}>SALVAR</Text>
        </TouchableOpacity>

        {resultado !== "" && (
          <Text style={styles.resultado}>{resultado}</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  btnVoltar: { margin: 12 },
  txtVoltar: { color: "#007AFF", fontWeight: "bold" },
  form: { paddingHorizontal: 16, marginTop: 20 },
  label: { fontSize: 14, color: "#333", marginBottom: 2 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  btnSalvar: {
    backgroundColor: "#007AFF",
    padding: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  txtBotao: { color: "#fff", fontWeight: "bold" },
  resultado: { fontSize: 16 },
});
