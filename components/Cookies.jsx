import { Text, View, Image } from "react-native"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { COLORS, SIZES } from "../constans"

const Cookies = () => {
  return (
    <View
      style={{
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <View>
        <Image
          source={{
            uri: "https://www.pngmart.com/files/16/Dark-Chocolate-Cookie-PNG-File.png",
          }}
          style={{
            width: 145,
            height: 145,
            zIndex: 5,
          }}
        />
        <View
          style={{
            padding: 10,
            paddingTop: 40,
            paddingBottom: 20,
            backgroundColor: COLORS.gray,
            width: 145,
            borderRadius: 15,
            borderBottomRightRadius: 60,
            position: "absolute",
            top: 105,
          }}
        >
          <Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>
            Chocolate chips
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 5,
              paddingBottom: 10,
            }}
          >
            <MaterialCommunityIcons
              name='crown'
              size={20}
              style={{
                color: COLORS.orange,
              }}
            />
            <Text style={{ color: COLORS.orange, paddingLeft: 5 }}>
              Premium
            </Text>
          </View>
          <Text style={{ color: COLORS.white }}>20 USD</Text>
        </View>
      </View>
      <View>
        <Image
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0641/2052/0918/products/4_SnickerDoodle.png?v=1661268960",
          }}
          style={{
            width: 145,
            height: 145,
            zIndex: 5,
          }}
        />
        <View
          style={{
            padding: 10,
            paddingTop: 40,
            paddingBottom: 20,
            backgroundColor: COLORS.gray,
            width: 145,
            borderRadius: 15,
            borderBottomRightRadius: 60,
            position: "absolute",
            top: 105,
          }}
        >
          <Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>
            Oafmeal with raisins
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 5,
              paddingBottom: 10,
            }}
          >
            <MaterialCommunityIcons
              name='crown'
              size={20}
              style={{
                color: COLORS.orange,
              }}
            />
            <Text style={{ color: COLORS.orange, paddingLeft: 5 }}>
              Premium
            </Text>
          </View>
          <Text style={{ color: COLORS.white }}>16 USD</Text>
        </View>
      </View>
    </View>
  )
}

export default Cookies
