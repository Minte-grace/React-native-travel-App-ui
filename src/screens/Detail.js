import React from 'react';
import {View,ImageBackground, Image,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Detail extends React.Component {
    render(){
        return(
            <View style={{
                backgroundColor:"#f8f8f8",
                height:"100%",
                paddingHorizontal:20
            }}> 
            <ImageBackground source={require('../images/dev2.png')} 
                  style={{marginLeft:50, width:"100%",height:250}}>
                      <View style={{
                          backgroundColor:"#000",
                          height:30,
                          width:40,
                          marginLeft:-50,
                          marginTop:70,
                          borderRadius:8,
                          alignItems:"center",
                          justifyContent:"center"
                      }}>
                          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                               <Image source={require('../images/back.png')} style={{width:25,height:10}}/>
                            </TouchableOpacity>
                    
                      </View>
            </ImageBackground>
                    <View style={{
                        backgroundColor:"#FFF",
                        padding:10,
                        borderRadius:15
                        }}>
                            <View style={{
                                flexDirection:"row",
                                alignItems:"center",
                               
                            }}>
                                            <View>
                                                    <Text style={{
                                                        fontSize:18,
                                                        fontFamily:"ExtraBold"
                                                        }}>Software Developer
                                                    </Text>

                                                    <View style={{flexDirection:"row",alignItems:"center"}}>
                                                        <Text style={{
                                                            fontFamily:"ExtraBold",
                                                            color:"#000",
                                                            opacity:0.6,
                                                            fontSize:14
                                                        }}>Parallel</Text>

                                                        <Text style={{
                                                            fontFamily:"Bold",
                                                            fontSize:13,
                                                            color:"#B8B8B8",
                                                            marginLeft:25
                                                        }}>Addis, Ethiopia</Text>
                                                    </View>
                                            </View>
                                <View style={{
                                    backgroundColor:"#DFDFDF",
                                    height:32,
                                    width:32,
                                    borderRadius:5,
                                    marginLeft:50,
                                    marginTop:5,
                                    alignItems:"center",
                                    justifyContent:"center"
                                    }}>
                                        <Image source={require('../images/favourite.png')} 
                                        style={{opacity:0.5, width:24,height:24}}/>

                                </View>
                              
                               
                            </View>
                                <View style={{
                                    flexDirection:"row",
                                    paddingTop:20,
                                    alignItems:"center"
                                }}>
                                    <Image source={require('../images/1.jpg')} style={{width:30,height:30}}/>
                                    <Image source={require('../images/2.jpg')} style={{width:30,height:30}}/>
                                    <Image source={require('../images/3.jpg')} style={{width:30,height:30}}/>
                                    <Image source={require('../images/4.jpg')} style={{width:30,height:30}}/>
                                <Text style={{
                                    fontFamily:"Bold",
                                    color:"#B8B8B8",
                                    paddingHorizontal:10
                                }}>4 Friends Work Here</Text>
                                </View>
                    </View>

                    <View style={{
                        flexDirection:"row",
                        marginTop:20
                    }}>
                            <View style={{
                                backgroundColor:"#FFF",
                                paddingVertical:10,
                                paddingHorizontal:10,
                                borderRadius:8,
                                width:140
                                    }}>
                                        <Text style={{
                                            fontFamily:"ExtraBold",
                                            color:"#B8B8B8",
                                        }}>Experiance</Text>
                                        <Text style={{
                                            fontFamily:"ExtraBold"
                                        }}>Minimum 2 year</Text>
                            </View>

                            <View style={{
                                backgroundColor:"#FFF",
                                paddingVertical:10,
                                paddingHorizontal:10,
                                marginLeft:35,
                                borderRadius:8,
                                width:140
                                    }}>
                                        <Text style={{
                                            fontFamily:"ExtraBold",
                                            color:"#B8B8B8",
                                        }}>Type</Text>
                                        <Text style={{
                                            fontFamily:"ExtraBold"
                                        }}>Full Time</Text>
                            </View>

                    </View>
                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                        <Text style={{
                            fontFamily:"ExtraBold",
                            fontSize:20,
                            marginBottom:10
                        }}>Job Description</Text>
                        <Text style={{
                            fontFamily:"SemiBold",
                            color:"#B2B2B2",
                        }}> 
                            Amet minim mollit non deserunt ulliamco est sit aliqua dolor
                            do amet sit. Vellit officoa consequat duis enim velit mollit. Extertation venoima consequat sunt notserud amet.
                        </Text>
                    </View>
                    <View style={{
                        width:"100%",
                        alignItems:"flex-end"
                    }}>
                        <View style={{
                            backgroundColor:"#000",
                            alignItems:"center",
                            justifyContent:"center",
                            width:90,
                            height:55,
                            marginTop:30,
                            borderRadius:15,
                            padding:10
                        }}>
                            <Image source={require('../images/for.png')} style={{width:30}} />
                            <Text style={{
                                color:"#FFF",
                                fontFamily:"Regular"
                            }}>Apply</Text>

                        </View>

                    </View>
            </View>
        )
    }
}