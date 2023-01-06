import React, {useState} from 'react';
import TitlePage from "../../components/TitlePage";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./index.module.scss";
const Index = () => {
  
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);

  const [userForm, setUserForm] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL }/api/v1/auth/login`, {
      method: "POST",
      headers: {
        'Content-type':"application/json"
      },
      body:JSON.stringify(userForm)
    }).then(res => res.json())
      .then(user => console.log(user))
      .catch(err=>console.log(err))
  }

  return (
    <div className="page__register">
      <TitlePage title="Login your account"/>
      <form className={styles.form__login}>
        <Input
          titleLabel="email"
          inputType="email"
          inputPlaceholder="email"
          inputName="email"
          inputValue={userForm.email || ""}
          inputOnChange={(e) => {
            handleInput(e);
          }}
        />
        <Input
          titleLabel="password"
          inputType="password"
          inputPlaceholder="password"
          inputName="password"
          inputValue={userForm.password || ""}
          inputOnChange={(e) => {
            handleInput(e);
          }}
        />
        <Button
          title="submit"
          handleClick={(e) => {
            submitForm(e);
          }}
          type="submit"
          btnClass="btn btn__primary"
        />
      </form>
    </div>
  );
}

export default Index;
