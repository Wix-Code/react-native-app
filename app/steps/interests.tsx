import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { interests } from "../dummyData";


export default function Interests() {
  // Track which certs are selected
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCert = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Text style={styles.logo}>What are you interested in?</Text>

        <View>
          {interests.map(cert => (
            <View key={cert.id} style={styles.welcomeSection}>
              <Checkbox
                value={selected.includes(cert.id)}
                onValueChange={() => toggleCert(cert.id)}
                color={selected.includes(cert.id) ? "#4069E1" : undefined}
              />
              <Text style={styles.subText}>{cert.name}</Text>
            </View>
          ))}
        </View>

        <Pressable style={styles.signIn}>
          <Text style={styles.signInText}>Continue</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  card: {
    padding: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
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
  },
});
