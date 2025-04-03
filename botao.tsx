import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type BotaoProps = Readonly<{
  titulo: string;
  onPress: () => void;
}>;

export default function Botao({ titulo, onPress }: BotaoProps) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.botaoTexto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
