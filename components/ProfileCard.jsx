import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "../styles/PorfileCard.style";
import { FontAwesome } from "@expo/vector-icons";

function ProfileCard({ route }) {
  const { name, desc, image } = route.params;
  console.log(image);
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image
          style={s.avatar}
          source={{
            uri:
              image ||
              "https://images.pexels.com/photos/41008/cowboy-ronald-reagan-cowboy-hat-hat-41008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
        <View style={s.texts}>
          <Text style={s.name}>{name}</Text>
          <Text> {desc}</Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity>
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileCard;
