import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { countries } from "../dummyData";

type Props = {
  onNext: () => void;
  back: () => void;
};

export default function WhereLicensed({ back, onNext }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const toggle = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.arrow}>
          <Ionicons onPress={back} name="arrow-back-outline" size={20} color="black" />
        </View>
        <Text style={styles.title}>Where are you licensed?</Text>
      </View>

      {/* SEARCH */}
      <View style={styles.search}>
        <FontAwesome5 name="search" size={16} color="#4069E1" />
        <TextInput
          placeholder="Search for states"
          value={query}
          onChangeText={setQuery}
          style={styles.input}
          placeholderTextColor="#D9D9D9"
        />
      </View>

      {/* SCROLLABLE LIST */}
      <ScrollView
        style={styles.list}
        showsVerticalScrollIndicator={false}
      >
        {filtered.map(item => (
          <View key={item.id} style={styles.row}>
            <Checkbox
              value={selected.includes(item.id)}
              onValueChange={() => toggle(item.id)}
              color="#4069E1"
            />
            <Text style={styles.label}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* FIXED BUTTON */}
      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={onNext}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },

  title: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    color: "#111827",
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginHorizontal: 20,
    paddingHorizontal: 14,
    height: 44,
    borderRadius: 16,
    backgroundColor: "#ffffffff",
    marginBottom: 8,
    boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px"
  },

  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#111827",
    outlineWidth: 0
  },

  list: {
    flex: 1,
    paddingHorizontal: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
  },

  label: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#171A1F",
  },

  arrow: {
    marginBottom: 20
  },

  footer: {
    padding: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    right: 0,
  },

  button: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#4169E1",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
});
