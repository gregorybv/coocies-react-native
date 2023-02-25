import { Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { COLORS, SIZES } from "../constans"
import HeroCookies from "./HeroCookies"

const Hero = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text style={{ color: COLORS.white, fontSize: SIZES.h1 }}>
            Cookies
          </Text>
          <Text style={{ color: COLORS.orange, fontSize: SIZES.h2 }}>
            Premium
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            accessibilityRole='button'
            style={{ color: COLORS.orange, fontSize: SIZES.h4 }}
          >
            See more
          </Text>
        </TouchableOpacity>
      </View>
      <HeroCookies />
    </View>
  )
}

export default Hero
