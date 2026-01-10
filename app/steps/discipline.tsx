import { Ionicons } from "@expo/vector-icons";
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
  back: () => void;
};

export default function Discipline({ back, onNext }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.arrow}>
          <Ionicons onPress={back} name="arrow-back-outline" size={20} color="black" />
        </View>

        <Text style={styles.logo}>What's your discipline?</Text>

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

      <View style={styles.footer}>
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
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  arrow: {
    marginBottom: 20
  },
  
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    right: 0,
    padding: 16,
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
