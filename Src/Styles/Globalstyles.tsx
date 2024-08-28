import { StyleSheet } from "react-native";
import { myColors } from "./Colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Styles = StyleSheet.create({

 btnBlue:{
  width:72,
  height:73,
  borderRadius:24,
  backgroundColor:myColors.blue,
  justifyContent:"center",
  alignItems:"center",
  margin:8
 },
 btnDark:{
  width:72,
  height:73,
  borderRadius:24,
  backgroundColor:myColors.btnDark,
  justifyContent:"center",
  alignItems:"center",
  margin:8
 },
 btnLight:{
  width:72,
  height:73,
  borderRadius:24,
  backgroundColor:myColors.white,
  justifyContent:"center",
  alignItems:"center",
  margin:8
 },
 btnGray:{
  width:72,
  height:73,
  borderRadius:24,
  backgroundColor:myColors.gray,
  justifyContent:"center",
  alignItems:"center",
  margin:8
 },

 smallTextLight:{
  fontSize:32,
  color: myColors.white,
 },
 smallTextDark:{
  fontSize:32,
  color: myColors.black,
 },

row:{
 maxWidth:'100%',
 flexDirection:'row',

 },

 ViewButtom:{
  position:'absolute',
  bottom:50 ,
 },

 ScreenFirstNumber:{
  fontSize:96,
  color: myColors.gray,
  fontWeight:'200',
  alignSelf:'flex-end',
 },
 ScreenSecondNumber:{
  fontSize:40,
  color: myColors.gray,
  fontWeight:'200',
  alignSelf:'flex-end',
 },




});