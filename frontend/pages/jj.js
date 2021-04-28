import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/Pet.module.css";
import Link from "next/link";
import withAuth from "../components/withAuth";
import Navbar from "../components/navbar";
const URL = "http://localhost/api/pets";
const URL_IN = "http://localhost/api/income";
const admin = ({ token  }) => {
  const [user, setUser] = useState({});
  
  const [pets, setPets] = useState({});
  const [income, setIncome] = useState();
  const [type, setType] = useState("");
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [price, setPrice] = useState();
  const [pet, setPet] = useState({});
  useEffect(() => {
    getPets();
    getIncome();
    profileUser();
  }, []);
  return (
    <div >
      <Navbar />
      <h1>PET SHOP</h1>
      
      <div className={styles.form_add}>
        <h2>Add Pets</h2>
        Type:
        <input
          type="text"
          name="type"
         
        ></input>
        Age:
        <input
          type="number"
          name="age"
        
        ></input>
        Weight:
        <input
          type="number"
          name="weight"
         
        ></input>
        Price:
        <input
          type="number"
          name="price"
         
        ></input>
        <button
          className={styles.button_add}
        
        >
          Add
        </button>
      </div>

    </div>
  );
};
export default withAuth(admin);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}