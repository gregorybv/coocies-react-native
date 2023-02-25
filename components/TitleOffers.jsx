import { Text, View, Image, TouchableOpacity } from "react-native"
import React from "react"
import { COLORS, SIZES } from "../constans"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const TitleOffers = () => {
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 20,
        backgroundColor: COLORS.gray,
        borderRadius: 15,
        borderBottomRightRadius: 80,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 35,
          
        }}
      >
        <Image
          source={{
            uri: "https://gfc-russia.ru/upload/iblock/a1a/a1afa81de4a0f8cdb432f0e1225f35ad-600.webp",
          }}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingLeft: 10,
          }}
        >
          <View style={{}}>
            <Text
              style={{ color: COLORS.white, fontSize: SIZES.h3, width: 100 }}
            >
              Double chocolate
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
          </View>
          <View style={{ paddingLeft: 10 }}>
            <Text
              style={{
                color: COLORS.white,
                textDecorationLine: "line-through",
              }}
            >
              20 USD
            </Text>
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              12 USD
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.black,
            borderRadius: 30,
            position: "absolute",
            right: -5,
            bottom: 0,
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
  )
}

export default TitleOffers
