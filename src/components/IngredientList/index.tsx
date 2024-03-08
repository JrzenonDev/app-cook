import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./style";
import { Ingredient } from "../Ingredient";
import { useState } from "react";

export function IngredientList() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: 100 }).map((item, index) => (
        <Ingredient key={index} />
      ))}
    </ScrollView>
  );
}
