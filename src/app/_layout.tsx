import { Slot } from "expo-router";
import "../global.css";
import { ClerkProvider } from "@clerk/clerk-expo";

export default function Layout() {
  return (
  <ClerkProvider>
    <Slot />
  </ClerkProvider>
  );
}
