import { PhoneVerificationSignIn } from "@/Components/AdminSignInPage/PhoneVerificationSignIn/PhoneVerificationSignIn";
import { NavBar } from "@/components/NavBar/NavBar";

export default function signIn() {
  return (
    <section>
      <NavBar />
      <PhoneVerificationSignIn />
    </section>
  );
}
