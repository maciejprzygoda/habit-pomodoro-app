import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },
  empty: {
    marginTop: 40,
    textAlign: "center",
    fontStyle: "italic",
    color: "#888",
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#4ade80",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  pomodoroButton: {
    marginTop: 20,
    backgroundColor: "#f87171",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  pomodoroText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
