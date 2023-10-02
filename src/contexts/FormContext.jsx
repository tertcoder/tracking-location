import { createContext, useContext, useState } from "react";

const FormContext = createContext();
/*
const initialState = {
  name: "",
  username: "",
  email: "",
  phone: "",
  profile: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "input/name":
      return { ...state, name: action.payload };

    case "input/username":
      return { ...state, username: action.payload };

    case "input/email":
      return { ...state, email: action.payload };

    case "input/phone":
      return { ...state, phone: action.payload };

    case "input/profile":
      return { ...state, profile: action.payload };

    default:
      throw new Error("Try Again!");
  }
}
*/
function FormProvider({ children }) {
  // const [{ name, username, email, phone, profile }, dispatch] = useReducer(
  //   initialState,
  //   reducer
  // );
  // console.log(initialState, dispatch);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("");
  /*
  function handleName(e) {
    dispatch({ type: "input/name", payload: e.target });
  }
  function handleUsername(e) {
    dispatch({ type: "input/username", payload: e.target });
  }
  function handleEmail(e) {
    dispatch({ type: "input/email", payload: e.target });
  }
  function handlePhone(e) {
    dispatch({ type: "input/phone", payload: e.target });
  }
  function handleProfile(e) {
    dispatch({ type: "input/profile", payload: e.target });
  }
  */
  function handleName(e) {
    setName(e.target);
  }
  function handleUsername(e) {
    setUsername(e.target);
  }
  function handleEmail(e) {
    setEmail(e.target);
  }
  function handlePhone(e) {
    setPhone(e.target);
  }
  function handleProfile(e) {
    setProfile(e.target);
  }

  return (
    <FormContext.Provider
      value={
        (name,
        username,
        email,
        phone,
        profile,
        handleName,
        handleUsername,
        handleEmail,
        handlePhone,
        handleProfile)
      }
    >
      {children}
    </FormContext.Provider>
  );
}

function useData() {
  const context = useContext(FormContext);
  if (context === undefined) console.error("Something went wrong!");

  return [context];
}

export { FormProvider, useData };
