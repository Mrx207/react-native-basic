import { Button, Image, Text, TextInput, View } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { cardStyle } from "../styles/CartFrom.style";

function CardForm({ navigation }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [cardForm, setCardForm] = useState({
    name: "",
    description: "",
    image: "",
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [24, 24],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    console.log(image);
  };
  return (
    <View>
      <View style={cardStyle.container}>
        <TextInput
          value={name}
          style={cardStyle.input}
          onChangeText={setName}
          placeholder="Enter Name"
        />
        <TextInput
          value={desc}
          style={cardStyle.input}
          placeholder="Enter Description"
          onChangeText={setDesc}
        />
        <View style={cardStyle.input}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
        </View>
        <View style={cardStyle.input}>
          <Button
            title="submit"
            onPress={() =>
              navigation.navigate("Profile Card", {
                name,
                desc,
                image,
              })
            }
          >
            Submit
          </Button>
        </View>
      </View>
    </View>
  );
}

export default CardForm;
