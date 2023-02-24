import { Text, View, Image, Icon } from "react-native"
import React from "react"
import { COLORS, SIZES } from "../constans"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Lefr */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6313f5141327055.6251a2f0566ad.png",
          }}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <View style={{ paddingLeft: 10, alignItems: "center" }}>
          <Text style={{ color: COLORS.white, fontSize: SIZES.h4, fontWeight: "bold" }}>Gregory</Text>
          <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}>Berezin</Text>
        </View>
      </View>

      {/* Right */}
      <View>
        <View
          style={{
            backgroundColor: COLORS.black,
            borderRadius: "30%",
            position: "absolute",
            zIndex: 5,
            left: 28,
            bottom: 75,
          }}
        >
          <MaterialCommunityIcons
            name='cart'
            size={20}
            style={{
              color: COLORS.white,
              padding: 10,
            }}
          />
        </View>
        <View style={{ position: "relative" }}>
          <View
            style={{
              padding: 10,
              paddingTop: 30,
              paddingBottom: 15,
              backgroundColor: COLORS.white,
              borderRadius: "20%",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <Text style={{ color: COLORS.black,fontSize: SIZES.h3, fontWeight: "bold", paddingBottom: 5 }}>5</Text>
            <Text style={{ color: COLORS.black, fontSize: SIZES.h4, fontWeight: "bold" }}>Products</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Header
