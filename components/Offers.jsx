import { Text, View, TouchableOpacity } from "react-native"
import React from "react"
import { COLORS, SIZES } from "../constans"
import TitleOffers from "./TitleOffers"

const Offers = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Text style={{ color: COLORS.white, fontSize: SIZES.h1 }}>Offers</Text>
        <TouchableOpacity>
          <Text
            accessibilityRole='button'
            style={{ color: COLORS.orange, fontSize: SIZES.h4 }}
          >
            See more
          </Text>
        </TouchableOpacity>
      </View>
      <TitleOffers />
    </View>
  )
}

export default Offers
