import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Clipboard from "expo-clipboard";
import Botao from "./botao";

export default function GeradorSenha() {
  const [senha, setSenha] = useState("S3nh@Forte");

  // Função para gerar senha aleatória
  const gerarSenha = () => {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let novaSenha = "";
    for (let i = 0; i < 8; i++) {
      novaSenha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setSenha(novaSenha);
  };

  // Copiar senha para área de transferência
  const copiarSenha = async () => {
    await Clipboard.setStringAsync(senha);
    alert("Senha copiada!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.senhaBox}>
        <Text style={styles.senhaTexto}>{senha}</Text>
      </View>

      <Botao titulo="GERAR" onPress={gerarSenha} />
      <Botao titulo="COPIAR" onPress={copiarSenha} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  senhaBox: {
    backgroundColor: "#62B1F6",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  senhaTexto: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
