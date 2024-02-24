import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "#000",
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 10,
  },
  avatar: { width: 70, height: 70, borderRadius: 50 },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  texts: { flex: 1, paddingLeft: 15 },
  header: {
    flexDirection: "row",
    paddingBottom: 20,
  },
  social: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialBtn: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#eee",
  },
});
