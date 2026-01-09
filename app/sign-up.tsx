import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Radio from "./components/radio";
import { licensed } from "./dummyData";

export default function Signup() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Text style={styles.logo}>Are you licensed?</Text>

        {licensed.map(item => (
          <Radio
            key={item.id}
            label={item.name}
            selected={selected === item.id}
            onSelect={() => setSelected(item.id)}
          />
        ))}

        <Pressable
          style={[
            styles.signIn,
            { opacity: selected ? 1 : 0.5 },
          ]}
          disabled={!selected}
        >
          <Text style={styles.signInText}>Continue</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    fontFamily: "Poppins_700Bold",
    backgroundColor: "#ffffff",
  },
  card: {
    padding: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
    color: "#171A1F",
    marginBottom: 30,
  },
  welcomeSection: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  subText: {
    fontSize: 16,
    color: "#2A2A37",
    fontWeight: "normal",
  },
  signIn: {
    backgroundColor: "#4069E1",
    height: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
});
