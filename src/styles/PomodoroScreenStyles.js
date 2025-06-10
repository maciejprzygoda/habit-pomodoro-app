import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 18 },
  
  timer: { fontSize: 70, fontWeight: "bold", marginVertical: 30 },
  
  btnRow: { flexDirection: "row", gap: 20, marginBottom: 16 },
  
  pickerRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  
  pickerLabel: { marginRight: 8, fontSize: 16, fontWeight: "600" },
  
  pickerButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#aaa",
    marginHorizontal: 3,
    backgroundColor: "#fff",
  },
  
  pickerButtonActive: {
    backgroundColor: "#f87171",
    borderColor: "#f87171",
  },
  
  pickerText: { color: "#222", fontSize: 16 },
  
  pickerRow: {
    marginBottom: 16,
  },
  
  pickerLabel: {
    fontSize: 18,
    marginBottom: 6,
    textAlign: "center",
  },
  
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap", 
    gap: 8, 
},
})