import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { COLORS, SIZES } from "../constans"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"

const Footer = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.black,
        width: "100%",
        height: "100%",
        marginTop: 35,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
          bottom: 27,
        }}
      >
        <View>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: COLORS.gray,
                maxWidth: 60,
                borderRadius: 30,
              }}
            >
              <MaterialCommunityIcons
                name='home'
                size={35}
                style={{
                  color: COLORS.white,
                  padding: 10,
                }}
              />
            </View>
            <Text style={{ color: COLORS.gray, paddingTop: 5 }}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 30, paddingRight: 25 , bottom: 5 }}>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: COLORS.gray,
                maxWidth: 60,
                borderRadius: 30,
              }}
            >
              <AntDesign
                name='search1'
                size={40}
                style={{
                  color: COLORS.white,
                  padding: 10,
                }}
              />
            </View>
            <Text style={{ color: COLORS.gray, paddingTop: 5 }}>Search</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: COLORS.gray,
                maxWidth: 60,
                borderRadius: 30,
              }}
            >
              <MaterialCommunityIcons
                name='crown-outline'
                size={35}
                style={{
                  color: COLORS.white,
                  padding: 10,
                }}
              />
            </View>
            <Text style={{ color: COLORS.gray, paddingTop: 5 }}>Premium</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Footer
