import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class ListCard extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          paddingHorizontal: 32,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#FFF",
          height: 182,
          elevation: 1,
          width: 270,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 20,
            }}
          >
            NYC
          </Text>

          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 14,
            }}
          >
            {" "}
            - - - - - - - - - -
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 20,
            }}
          >
            IDN
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: -5,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              fontSize: 11,
            }}
          >
            New York
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              paddingLeft: 112,
            }}
          >
            Indonesia
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              fontSize: 16,
            }}
          >
            09:00 AM
          </Text>

          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              paddingLeft: 70,
              fontSize: 16,
            }}
          >
            21:00 PM
          </Text>
        </View>

        <Text
          style={{
            fontFamily: "RobotoRegular",
            color: "#a2a2db",
            fontSize: 12,
          }}
        >
          20JUNe, 2021
        </Text>

        <Text
          style={{
            fontSize: 17,
            marginRight: -5,
            marginVertical: 8,
            color: "#a2a2db",
          }}
        >
          - - - - - - - - - - - - - - - - - - - - - - -
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: -8,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              fontSize: 16,
            }}
          >
            Lorem ipsum
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              paddingLeft: 75,
              fontSize: 16,
            }}
          >
            $400
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
