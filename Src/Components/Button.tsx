import { useContext } from "react";
import { TouchableOpacity , Text } from "react-native";
import { TheamContext } from "../Context/TheamContex";
import {Styles} from '../Styles/Globalstyles';

interface ButtonProps{
  onPress: ()=> void;
  title: string ;
  isBlue?: boolean;
  isGray?: boolean;

}


export default function Button ({title ,onPress , isBlue , isGray}:ButtonProps){
  const theam = useContext(TheamContext);

  return(
    <TouchableOpacity style={
      isBlue
      ?Styles.btnBlue
      :isGray
      ?Styles.btnGray
      :theam==='light'
      ?Styles.btnLight
      :Styles.btnDark

    } onPress={onPress}>
     <Text style={
      isBlue || isGray
      ?Styles.smallTextLight
      :theam==='dark'
      ?Styles.smallTextLight
      :Styles.smallTextDark
     }>
     {title}
     </Text>
    </TouchableOpacity>
  )
}