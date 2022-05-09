import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
type Form = {
  one: string;
  dois: string;
  tres: string;
  quatro: string;
  result: string;
};
export default function App() {
  const [input, setInput] = useState<Form>({
    one: "",
    dois: "",
    tres: "",
    quatro: "",
    result: "",
  });
  function handleInputChange(e: any) {
    const { id, value } = e.target;
    setInput({ ...input, [id]: value });
  }
  function handleSubmit(form: any) {
    form.preventDefault();
    let valor = parseInt(input.one);
    let dois = parseInt(input.dois);
    let quatro = parseInt(input.quatro);
    let tres = parseInt(input.tres);

    console.log(valor);
    if (valor > 1) {
      let mult = dois * tres;
      mult /= valor;
      setInput({ ...input, result: mult.toString() });
    }
  }
  return (
    <View style={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Digite o primeiro numero</label>
        <input
          id="one"
          type="text"
          value={input.one}
          onChange={handleInputChange}
        />
        <label htmlFor="titulo">Digite o primeiro numero</label>
        <input
          id="dois"
          type="text"
          value={input.dois}
          onChange={handleInputChange}
        />
        <label htmlFor="titulo">Digite o primeiro numero</label>
        <input
          id="tres"
          type="text"
          value={input.tres}
          onChange={handleInputChange}
        />
        <label htmlFor="titulo">Digite o primeiro numero</label>
        <input
          id="quatro"
          type="text"
          value={input.quatro}
          onChange={handleInputChange}
        />
        <input
          id="result"
          readOnly
          type="text"
          value={input.result}
          onChange={handleInputChange}
        />
        <button type="submit">Calcular</button>
      </form>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
