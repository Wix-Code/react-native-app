import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Radio from "../components/radio";
import { healthDisciplines } from "../dummyData";


type Props = {
  onNext: () => void;
};

export default function Discipline({ onNext }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>What's your discipline?</Text>

        {/* ONLY THIS PART SCROLLS */}
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {healthDisciplines.map(item => (
            <Radio
              key={item.id}
              label={item.name}
              selected={selected === item.id}
              onSelect={() => setSelected(item.id)}
            />
          ))}
        </ScrollView>
      </View>

      {/* FIXED BUTTON */}
      <BlurView intensity={20} tint="light" style={styles.footer}>
        <Pressable
          style={[
            styles.signIn,
            { opacity: selected ? 1 : 0.5 },
          ]}
          disabled={!selected}
          onPress={onNext}
        >
          <Text style={styles.signInText}>Continue</Text>
        </Pressable>
      </BlurView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  footer: {
    padding: 20,
    backgroundColor: "#ffffffff",
  },

  card: {
    flex: 1,
    padding: 20,
  },

  logo: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
    color: "#171A1F",
    marginBottom: 30,
  },

  signIn: {
    backgroundColor: "#4069E1",
    height: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
});
