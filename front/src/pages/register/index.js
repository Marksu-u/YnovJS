import React, {useState} from 'react';
import TitlePage from "../../components/TitlePage";
import Input from "../../components/Input";

const Index = () => {

  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }

  return (
    <div className="page__register">
      <form className="form form__register">
        <Input
          titleLabel="firstname"
          inputType="text"
          inputPlaceholder="firstname"
          inputName="firstName"
          inputValue={userForm.firstName || ""}
          inputOnChange={(e) => {
            handleInput(e);
          }}
        />
        <Input
          titleLabel="lastname"
          inputType="text"
          inputPlaceholder="lastname"
          inputName="lastName"
          inputValue={userForm.lastName || ""}
          inputOnChange={(e) => {
            handleInput(e);
          }}
        />
      </form>
    </div>
  );
}

export default Index;
