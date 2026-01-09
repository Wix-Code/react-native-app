import { useState } from "react";
import { View } from "react-native";
import Certificates from "./steps/certificates";
import Discipline from "./steps/discipline";
import EmailName from "./steps/email-name";
import Interests from "./steps/interests";
import Licensed from "./steps/liecensed";
import Location from "./steps/location";
import Phone from "./steps/phone";
import UploadResume from "./steps/upload-resume";
import WorkPlace from "./steps/workplace";
import YouLicensed from "./steps/you-licensed";

export default function RegisterScreen() {
  const [step, setStep] = useState(1);

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {step === 1 && <Phone onNext={next} />}
      {step === 2 && <EmailName onNext={next} />}
      {step === 3 && <Discipline onNext={next} />}
      {step === 4 && <Location onNext={next} />}
      {step === 5 && <Licensed onNext={next} />}
      {step === 6 && <YouLicensed onNext={next} />}
      {step === 7 && <Certificates onNext={next} />}
      {step === 8 && <Interests onNext={next} />}
      {step === 9 && <WorkPlace onNext={next} />}
      {step === 10 && <UploadResume onNext={next} />}
    </View>
  );
}
