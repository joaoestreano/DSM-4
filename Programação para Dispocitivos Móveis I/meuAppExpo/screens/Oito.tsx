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

export default function Oito({ voltar }: Props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [resultado, setResultado] = useState("");

  const cadastrar = () => {
    setResultado(`${email} - ${senha} - ${confirmaSenha}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
        <Text style={styles.txtVoltar}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.centrado}>
        <View style={styles.moldura}>
          <Text style={styles.titulo}>CADASTRO</Text>

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

          <Text style={styles.label}>Confirmação da senha</Text>
          <TextInput
            style={styles.input}
            value={confirmaSenha}
            onChangeText={setConfirmaSenha}
            placeholder="Confirme a senha"
            secureTextEntry={true}
            maxLength={8}
          />

          <View style={styles.linha}>
            <TouchableOpacity style={styles.btnCadastrar} onPress={cadastrar}>
              <Text style={styles.txtBotao}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogar} onPress={cadastrar}>
              <Text style={styles.txtBotao}>Logar</Text>
            </TouchableOpacity>
          </View>

          {resultado !== "" && (
            <Text style={styles.resultado}>{resultado}</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  btnVoltar: { margin: 12 },
  txtVoltar: { color: "#007AFF", fontWeight: "bold" },
  centrado: { flex: 1, alignItems: "center", justifyContent: "center" },
  moldura: {
    width: 270,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16,
    borderRadius: 4,
  },
  titulo: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 12,
  },
  label: { fontSize: 12, color: "#555", marginBottom: 2 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 6,
    marginBottom: 10,
    fontSize: 14,
  },
  linha: { flexDirection: "row", gap: 8, marginBottom: 10 },
  btnCadastrar: {
    backgroundColor: "#f5a623",
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  btnLogar: {
    backgroundColor: "#f5a623",
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  txtBotao: { color: "#fff", fontWeight: "bold" },
  resultado: { fontSize: 12, color: "#333" },
});
