import { useState } from "react";
import { Modal } from "./Modal";
import { InputField } from "./InputField";
import axios from "axios"

export const SignUp = () => {
  const [isVisible, setVisibility] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [street, setStreet] = useState("");
  const [ number, setNumber] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")



  const emptyFormFields = !firstName ||
  !lastName || 
  !email || 
  !password || 
  !city || 
  !zip || 
  !street || 
  !number || 
  !confirmPassword;

  const passwordsNoMatch = password !== confirmPassword

  if (!isVisible)
    return <button onClick={() => setVisibility(true)}>Sign Up</button>;

  return (
    <Modal setVisibility={setVisibility}>
      <InputField
        label="Vorname:"
        value={firstName}
        setValue={setFirstName}
      />
      <InputField label="Nachname:" value={lastName} setValue={setLastName} />
      <InputField label="Stadt:" value={city} setValue={setCity} />
      <InputField label="Postleitzahl:" value={zip} setValue={setZip} />
      <InputField label="Straße:" value={street} setValue={setStreet} />
      <InputField label="Hausnummer:" value={number} setValue={setNumber} />
      <InputField label="Email:" value={email} setValue={setEmail} />
      <InputField
        label="Passwort:"
        value={password}
        setValue={setPassword}
        type="password"
      />
      <InputField
        label="Passwort bestätigen:"
        value={confirmPassword}
        setValue={setConfirmPassword}
        type="password"
      />

      {errorMessage && <div
      style={{ border: "2px solid red"}}
      ><p style={{color:"red"}}>{errorMessage}</p></div>}

      <button onClick ={async ()=> {
        setIsSubmitted(true)
        if(emptyFormFields) return setErrorMessage("Alle Felder sind erforderlich")

        if(passwordsNoMatch) return setErrorMessage("Passwörter stimmen nicht überein")

        setErrorMessage("")

        try {
          const response = await axios.post("http://localhost:8080/api/signup", {firstName, lastName, email, password, city, zip, street, number})

          const {data:{token}} = response
          console.log(token)
        } catch(e){
          setErrorMessage("Account erstellen fehlgeschlagen")
          console.log(e)

        }
      }}>Sign Up</button>
    </Modal>
  );
};
