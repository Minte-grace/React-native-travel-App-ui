import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, TextInput } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/back.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Icon name="menu" size={30} color="#a2a2db" style={{ width: 20 }} />
          <Icon
            name="account-circle"
            size={33}
            color="#a2a2db"
            style={{ marginLeft: 230 }}
          />
        </View>

        <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
          <Text
            style={{
              fontSize: 40,
              color: "#522289",
              fontFamily: "RobotoBold",
            }}
          >
            Hello
          </Text>

          <Text
            style={{
              fontSize: 15,
              paddingVertical: 10,
              paddingRight: 80,
              lineHeight: 22,
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipscing elit.
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFF",
              borderRadius: 40,
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 30,
            }}
          >
            <Image
              source={require("../images/search.png")}
              style={{ height: 14, width: 14 }}
            />
            <TextInput
              placeholder="Lorem ipsum"
              style={{ paddingHorizontal: 20, fontSize: 15, color: "#ccccef" }}
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginRight: -40, marginTop: 30 }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#5facdb",
              }}
            >
              <Image
                source={require("../images/p.png")}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#ff5c83",
                marginHorizontal: 22,
              }}
            >
              <Icon name="office-building" color="white" size={32} />
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#ffa06c",
              }}
            >
              <Icon name="bus" color="white" size={32} />
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#bb32fe",
                marginLeft: 22,
              }}
            >
              <Icon name="dots-horizontal" color="white" size={32} />
            </View>
          </ScrollView>

          <Text
            style={{
              color: "#FFF",
              fontFamily: "RobotoRegular",
              marginTop: 50,
              fontSize: 17,
            }}
          >
            Recommended
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -40, marginTop: 30 }}
          >
            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../images/1.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../images/2.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#5facdb" />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../images/3.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#bb32fe" />
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
