import React from "react"
import { View } from "react-native"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { COLORS } from "./constans"
import { useFonts } from "expo-font"
import Offers from "./components/Offers"
import Footer from "./components/Footer"

export default function App() {
  const [loaded] = useFonts({
    Outfit: require("./assets/fonts/Outfit-Regular.ttf"),
  })

  if (!loaded) {
    return null
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 65,
        backgroundColor: COLORS.primary,
      }}
    >
      <Header />
      <Hero />
      <Offers />
      <Footer/>
    </View>
  )
}
