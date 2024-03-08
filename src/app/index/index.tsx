import { Text, View } from "react-native";
import { styles } from "./style";
import { IngredientList } from "@/components/IngredientList";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Esolha {`\n`}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu
      </Text>

      <IngredientList />
    </View>
  );
}
