import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  onNext: () => void;
  back: () => void;
};

export default function WorkPlace({ back, onNext }: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>

        <View style={styles.arrow}>
          <Ionicons onPress={back} name="arrow-back-outline" size={20} color="black" />
        </View>

        <Text style={styles.logo}>Where do you want to work?</Text>

        <View style={styles.welcomeSection}>
          <FontAwesome5 name="search" size={18} color="#4069E1" />
          <TextInput placeholder='Search for cities or states' style={styles.input} />
        </View>

        <Pressable onPress={onNext} style={styles.signIn}>
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

  arrow: {
    marginBottom: 20
  },

  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#171A1F",
    marginBottom: 20,
    fontFamily: "Poppins_700Bold",
  },

  welcomeSection: {
    marginBottom: 10,
    width: "100%",
    height: 46,
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    borderRadius: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#eeeeeeff",
    paddingHorizontal: 20,
  },

  subText: {
    fontSize: 14,
    color: "#2A2A37",
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginTop: 6,
    fontFamily: "Poppins_700Bold",
  },

  input: {
    width: "100%",
    fontFamily: "Poppins_400Regular",
    color: "#D9D9D9",
    fontSize: 16,
    outlineWidth: 0
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
    fontFamily: "Poppins_500Medium",
  },
});
