import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/admin.module.css'
//import useSWR, { mutate } from 'swr'
import Navbar from "../components/navbar";
import withAuth from "../components/withAuth";
import Link from 'next/link'


const URL = "http://localhost/api/game_shops";
const URL2 = "http://localhost/api/income";


const fetcher = url => axios.get(url).then(res => res.data)
const SWR1 = () => {
    const [game_shops, setgame_shops] = useState({ list: [{ id: 1, name: "table", price:999, date_sell:"Ems"  ,sell_buy:99 },] })
    const [game_shop, setgame_shop] = useState({})
    const [id, setId] = useState(0)
    const [name, setname] = useState('')
    const [price, setPrice] = useState(0)
    const [date_sell,setdate_sell] = useState(0)
    const [sell_buy,setsell_buy] = useState(0)
    const [imageurl,setimageurl] = useState('')
    const [income, setIncome] = useState(0)



    useEffect(() => {
        getgame_shops();
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
    
    const getgame_shops = async () => {
        let game_shops = await axios.get(URL)
        setgame_shops(game_shops.data)
        //console.log('game_shop:', game_shops.data)
    }
    const getIncome = async () => {
        let income = await axios.get(URL2)
        setIncome(income.data)
        //console.log('income:', income.data)
    }

    const getgame_shop = async (id) => {
        let game_shop = await axios.get(`${URL}/${id}`)
        console.log('game_shop id: ', game_shop.data)
        setgame_shop({ id: game_shop.data.id, name: game_shop.data.name, price: game_shop.data.price,  date_sell: game_shop.data.date_sell, sell_buy: game_shop.data.sell_buy, imageurl: game_shop.data.imageurl})
    }



    const printgame_shops = () => {
        if (game_shops && game_shops.length)
            return game_shops.map((game_shop, index) =>
                <li className={styles.listItem} key={index}>
                     <div className={styles.box}>
                    <h6>Id:{(game_shop) ? game_shop.id : 0}</h6>
                    <img src={game_shop.imageurl} width="100" height="100"></img>
                    <h6>name:{(game_shop) ? game_shop.name : '-'}</h6>
                    Price:{(game_shop) ? game_shop.price : 0}
                    <h6>date_sell:{(game_shop) ? game_shop.date_sell : 0}</h6>
                    <h6>sell_buy:{(game_shop) ? game_shop.sell_buy : 0}</h6>
                    <button className={styles.btndelete} onClick={() => deletegame_shop(game_shop.id)} >Delete</button>
                    <button className={styles.btnget} onClick={() => getgame_shop(game_shop.id)}>Get</button>
                    <button className={styles.btnup} onClick={() => updategame_shop(game_shop.id)}>Update</button>

                    </div>
                </li>
            )
        else
            return <li> ไม่มีสินค้า </li>
    }

    const printIncome = () => {
        return income
    }


    const addgame_shop = async ( name, price, date_sell, sell_buy,imageurl) => {
        let game_shops = await axios.post(URL, {  name, price, date_sell, sell_buy, imageurl })
        setgame_shops(game_shops.data)
        
    }


    const deletegame_shop = async (id) => {
        const result = await axios.delete(`${URL}/${id}`)
        console.log(result.data)
        getgame_shops()
    }

    const updategame_shop = async (id) => {
        const result = await axios.put(`${URL}/${id}`, { id, name, price, date_sell, sell_buy, imageurl })
        //console.log('student id update: ', result.data)
        getgame_shops()
    }



    return (<div className={styles.container} >
         
          <Navbar />
          <br></br>
          <br></br>
          <div className={styles.listA} >
        <h1>Game Store</h1>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet"></link>
        <h2>Income:{printIncome()}</h2>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
</div>

        <ul className={styles.list}  >{printgame_shops()}</ul>
        <ul className={styles.btnadd} >
        
        <h2>Register Order</h2>
        
            name:<input type="text" onChange={(e) => setname(e.target.value)} /> <br />
        price:<input type="number" onChange={(e) => setPrice(e.target.value)} /> <br />
        date_sell:<input type="text" onChange={(e) => setdate_sell(e.target.value)} /> <br />
        sell_buy:<input type="text" onChange={(e) => setsell_buy(e.target.value)} /> <br />
        imageurl:<input type="Linkd" onChange={(e) => setimageurl(e.target.value)} /> <br />
            <button className={styles.btnadd} onClick={() => addgame_shop(name,  price, date_sell, sell_buy, imageurl)}>Add new order</button>
            
            
        </ul>          
    </div>
    
    )
}

export default withAuth(SWR1);

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
  }
