import { StyleSheet } from "react-native";
import { AuthProvider } from "./context/LoginContext";
import MainScreens from "./screens/MainScreens";
import PriceContextAppProvider from "./context/PriceContextApp";
import UserContextAppProvider from "./context/UserContextCall";
export default function App() {
  return (
    <AuthProvider>
      <PriceContextAppProvider>
        <UserContextAppProvider>
          <MainScreens />
        </UserContextAppProvider>
      </PriceContextAppProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
