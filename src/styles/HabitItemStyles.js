import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 
item: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#eee',
  padding: 15,
  marginVertical: 8,
  borderRadius: 10,
  justifyContent: 'space-between',
},
checkboxContainer: {
  marginRight: 12,
},
checkbox: {
  fontSize: 22,
},
text: {
  fontSize: 18,
  flex: 1,
},
trash: {
  fontSize: 22,
  color: 'red',
  marginLeft: 18,
},
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
  },
  empty: {
    marginTop: 40,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#888',
  },
  pomodoroButton: {
    marginTop: 30,
    backgroundColor: '#f87171',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  pomodoroText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
