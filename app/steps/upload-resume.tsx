import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

type Props = {
  onNext: () => void;
  back: () => void;
};

export default function UploadResume({ back, onNext }: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <View style={styles.arrow}>
          <Ionicons onPress={back} name="arrow-back-outline" size={20} color="black" />
        </View>
        <Text style={styles.logo}>Upload Resume</Text>

        <View style={styles.welcomeSection}>
          <Text style={styles.subText}>Choose</Text>
          <AntDesign name="upload" size={20} color="black" />
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
    borderColor: "#DCDEE0",
    width: "100%",
    height: 48,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    //alignItems: "center",
    borderRadius: 16,
    marginTop: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
  },

  subText: {
    fontSize: 14,
    color: "#DCDEE0",
    letterSpacing: 0.25,
    fontFamily: "Poppins_400Regular",
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
