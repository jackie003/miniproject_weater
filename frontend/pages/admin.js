import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/Pet.module.css";
import Link from "next/link";
import withAuth from "../components/withAuth";
import Navbar from "../components/navbar";
const URL = "http://localhost/api/movie";
const URL_IN = "http://localhost/api/income";
const admin = ({ token }) => {
  const [user, setUser] = useState({});

  const [movie, setmovie] = useState({});
  const [income, setIncome] = useState();
  const [type, setType] = useState("");
  const [imdb, setImdb] = useState();
  const [worldwide_gross, setworldwide_gross] = useState();
  const [storyline, setstoryline] = useState();
  const [pet, setPet] = useState({});
  useEffect(() => {
    getmovie();
    getIncome();
    profileUser();
  }, []);
  const profileUser = async () => {
    try {
      // console.log('token: ', token)
      const users = await axios.get(`${config.URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log('user: ', users.data)
      setUser(users.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getPetById = async (id) => {
    let result = await axios.get(`${URL}/${id}`);
    console.log(result.data);
    setPet(result.data);
  };

  const getIncome = async () => {
    let result = await axios.get(URL_IN);
    setIncome(result.data);
  };

  const getmovie = async () => {
    let result = await axios.get(URL);
    setmovie(result.data.list);
  };
  const getproile = async () => {
    let result = await axios.get(URL);
    <Link href="/profile"><a> Login </a></Link>;
  };

  const addPet = async () => {
    let result = await axios.post(URL, {
      type,
      imdb,
      worldwide_gross,
      storyline,
    });
    console.log(result);
    getmovie();
  };

  const deletePet = async (id) => {
    let result = await axios.delete(`${URL}/${id}`);
    getmovie();
  };

  const updatePet = async (id) => {
    let result = await axios.put(`${URL}/${id}`, {
      type,
      imdb,
      worldwide_gross,
      storyline,
    });
    console.log(result);
    getmovie();
  };

  const showmovie = () => {
    if (movie && movie.length) {
      return movie.map((item, index) => {
        return (
          <div className={styles.listItem} key={index}>
            <b>Type :</b> {item.type} 
            <b>Imdb :</b> {item.imdb} <br />
            <b>worldwide_gross :</b> {item.worldwide_gross} <br />
             <b>storyline :</b> {item.storyline} <br />

              <div className={styles.edit_button}>
              <button
                className={styles.button_get}
                onClick={() => getPetById(item.id)}
              >
                Get
              </button>
              <button
                className={styles.button_update}
                onClick={() => updatePet(item.id)}
              >
                Update
              </button>
              <button
                className={styles.button_delete}
                onClick={() => deletePet(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      });
    } else {
      return <p>Loading...</p>;
    }
  };
  return (
    <div className={styles.container}>
      
      <h1 className={styles.header}>PET SHOP</h1>
      <button
          className={styles.w3button}
        
          onClick={() => <Link href="/profile"></Link>}
        >
         <Link href="/profile"><a> profile </a></Link>
        </button>
      <div className={styles.form_add}>
        <h2>Add movie</h2>
        Type:
        <input
          type="text"
          name="type"
          onChange={(e) => setType(e.target.value)}
        ></input>
        Age:
        <input
          type="number"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        worldwide_gross:
        <input
          type="number"
          name="worldwide_gross"
          onChange={(e) => setworldwide_gross(e.target.value)}
        ></input>
        storyline:
        <input
          type="number"
          name="storyline"
          onChange={(e) => setstoryline(e.target.value)}
        ></input>
        <button
          className={styles.button_add}
          onClick={() => addPet(type, age, worldwide_gross, storyline)}
        >
          Add
        </button>
      </div>

      <div className={styles.list}>{showmovie()}</div>
    </div>
  );
};
export default withAuth(admin);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
