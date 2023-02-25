import { Text, View, Image, TouchableOpacity } from "react-native"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { COLORS, SIZES } from "../constans"

const HeroCookies = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 10,
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
            width: 135,
            height: 135,
            zIndex: 5,
          }}
        />
        <View
          style={{
            padding: 10,
            paddingTop: 30,
            paddingBottom: 20,
            backgroundColor: COLORS.gray,
            width: 150,
            borderRadius: 15,
            borderBottomRightRadius: 80,
            position: "relative",
            bottom: 30,
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
              paddingBottom: 5,
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>20 USD</Text>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.black,
                borderRadius: 30,
                position: "absolute",
                right: -8,
              }}
            >
              <MaterialCommunityIcons
                name='arrow-right'
                size={25}
                style={{
                  color: COLORS.white,
                  padding: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Image
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0641/2052/0918/products/4_SnickerDoodle.png?v=1661268960",
          }}
          style={{
            width: 135,
            height: 135,
            zIndex: 5,
          }}
        />
        <View
          style={{
            padding: 10,
            paddingTop: 30,
            paddingBottom: 20,
            backgroundColor: COLORS.gray,
            width: 150,
            borderRadius: 15,
            borderBottomRightRadius: 80,
            position: "relative",
            bottom: 30,
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
              paddingBottom: 5,
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>16 USD</Text>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.black,
                borderRadius: 30,
                position: "absolute",
                right: -8,
              }}
            >
              <MaterialCommunityIcons
                name='arrow-right'
                size={25}
                style={{
                  color: COLORS.white,
                  padding: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HeroCookies
