import React from "react"
import { StatusBar } from "react-native"
import { Text, View } from "react-native"
import Header from "./components/Header"
import { COLORS } from "./constans"

export default function App() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        padding: 10,
        paddingTop: 65,
        backgroundColor: COLORS.primary,
      }}
    >
    <Header/>
    </View>
  )
}
