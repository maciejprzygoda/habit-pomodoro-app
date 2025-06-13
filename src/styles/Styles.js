import { StyleSheet } from "react-native";

export default StyleSheet.create({
  item: {
    backgroundColor: "#eee",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  done: {
    backgroundColor: "#cdeccf",
  },
  text: {
    fontSize: 18,
  },

  levelText: {
    fontSize: 22,
  },

  footer: {
    fontSize: 18,
  },

  footerText: {
    fontSize: 18,
  },

  emptyText: {
    fontSize: 18,
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  stat: {
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },

  reminderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  reminderText: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 10,
  },
  timeText: {
    fontWeight: "bold",
    fontSize: 25,
    marginRight: 10,
    marginBottom: 45,
  },

  inputContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 8,
  },
  empty: {
    marginTop: 40,
    textAlign: "center",
    fontStyle: "italic",
    color: "#888",
  },
  pomodoroButton: {
    marginTop: 30,
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

  addButton: {
    marginTop: 10,
    backgroundColor: "#4ade80",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  container_stats: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  stat: {
    fontSize: 16,
    marginBottom: 10,
  },
});
