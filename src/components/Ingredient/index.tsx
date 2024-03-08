import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";

export function Ingredient() {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} />
      <Text style={styles.title}>Maçã</Text>
    </Pressable>
  );
}
