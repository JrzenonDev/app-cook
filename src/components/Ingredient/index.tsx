import { Image, Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./style";

export type IndredientsProps = {
  name: string;
  image: string;
  selected?: boolean;
};

export function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IndredientsProps & PressableProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image style={styles.image} />
      <Text style={styles.title}>Maçã</Text>
    </Pressable>
  );
}
