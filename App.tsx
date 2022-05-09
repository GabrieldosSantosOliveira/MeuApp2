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
    quatro: "X",
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
      console.log(valor);
      let mult = dois * tres;
      mult /= valor;
      setInput({ ...input, result: mult.toString() });
    } else if (valor == 1) {
      let mult = dois * tres;
      setInput({ ...input, result: mult.toString() });
    } else {
      let calcula = parseFloat(input.one);
      let mult = dois * tres;
      mult /= calcula;
      console.log(calcula);
      setInput({ ...input, result: mult.toString() });
    }
  }
  return (
    <View style={styles.container}>
      <form onSubmit={handleSubmit}>
        <View style={styles.items}>
          <input
            style={styles.input}
            id="one"
            type="text"
            value={input.one}
            onChange={handleInputChange}
          />
          <input
            id="dois"
            type="text"
            value={input.dois}
            onChange={handleInputChange}
          />
        </View>
        <View style={styles.items}>
          <input
            id="tres"
            type="text"
            value={input.tres}
            onChange={handleInputChange}
          />
          <input
            id="quatro"
            readOnly
            type="text"
            value={input.quatro}
            onChange={handleInputChange}
          />
        </View>
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
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "collum",
    margin: "auto",
  },
  items: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
