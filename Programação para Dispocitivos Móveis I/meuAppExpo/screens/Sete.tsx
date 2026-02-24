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

export default function Sete({ voltar }: Props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [resultado, setResultado] = useState("");

  const logar = () => {
    setResultado(`${email} - ${senha}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
        <Text style={styles.txtVoltar}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="seu@email.com"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          secureTextEntry={true}
          maxLength={8}
        />

        <View style={styles.linha}>
          <TouchableOpacity style={styles.btnLogar} onPress={logar}>
            <Text style={styles.txtBotao}>Logar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCadastrar} onPress={logar}>
            <Text style={styles.txtBotao}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>

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
  linha: { flexDirection: "row", gap: 8, marginBottom: 16 },
  btnLogar: {
    backgroundColor: "#f5a623",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  btnCadastrar: {
    backgroundColor: "#f5a623",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  txtBotao: { color: "#fff", fontWeight: "bold" },
  resultado: { fontSize: 14, color: "#333" },
});
