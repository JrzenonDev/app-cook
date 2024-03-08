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

  const handleToggleSelected = (value: string) => {
    if (selected.includes(value)) {
      return setSelected(selected.filter((item) => item !== value));
    }

    setSelected((state) => [...state, value]);
    console.log(selected);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: 100 }).map((item, index) => (
        <Ingredient
          key={index}
          name="Tomate"
          image=""
          selected={selected.includes(index.toString())}
          onPress={() => {
            handleToggleSelected(index.toString());
          }}
        />
      ))}
    </ScrollView>
  );
}
