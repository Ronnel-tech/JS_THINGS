// todo: Initial State

export const initialStudentInfo = {
  name:"",
  age:"",
  address: "",
  section: "",
  yearLevel: ""
}

//todo: Action Creations

export function updateStudentInfo(name,age, address, section, yearLevel) {
  return {
    type: "UPDATE_STUDENT_INFO",
    payload: {
      name,
      age,
      address,
      section,
      yearLevel
    }
  }
}

// todo: Reducer

export function studentInfoReducer(state = initialStudentInfo, action) {
  switch (action.type) {
    case "UPDATE_STUDENT_INFO":
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
        address: action.payload.address,
        section: action.payload.section,
        yearLevel: action.payload.yearLevel
      }
    default:
      return state;
  }
}