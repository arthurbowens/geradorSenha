import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import GeradorSenha from "./geradorSenha";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>GERADOR DE SENHA</Text>

      <Image source={require("./assets/lock.png")} style={styles.imagem} />

      <GeradorSenha />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 20,
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
