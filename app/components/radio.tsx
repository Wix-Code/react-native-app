// components/Radio.tsx
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

export default function Radio({ label, selected, onSelect }: Props) {
  return (
    <Pressable style={styles.container} onPress={onSelect}>
      <View style={styles.outer}>
        {selected && <View style={styles.inner} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  outer: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#4069E1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  inner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#4069E1",
  },
  label: {
    fontSize: 16,
    color: "#2A2A37",
    fontFamily: "Poppins_400Regular",
  },
});
