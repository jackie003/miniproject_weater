import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/store.module.css'
import Navbar from "../components/navbar";
import Link from 'next/link'

const URL = "http://localhost/api/game_shops";
const URL2 = "http://localhost/api/purchase";

const fetcher = url => axios.get(url).then(res => res.data)

const SWR2 = () => {
    const [game_shops, setgame_shops] = useState({ })
    const [game_shop, setgame_shop] = useState({})
    const [id, setId] = useState(0)
    const [name, setname] = useState('')
    const [price, setPrice] = useState(0)
    const [date_sell, setdate_sell] = useState('')
    const [sell_buy, setsell_buy] = useState(0)
    const [imageurl, setimageurl] = useState('')
  //  const { data } = useSWR(URL, fetcher)
    //const { data } = useSWR(URL2, fetcher)


    useEffect(() => { getgame_shops() }, [])

    const getgame_shops = async () => {
        let game_shops = await axios.get(URL)
        setgame_shops(game_shops.data)
    }
    const buygame_shop = async (id) => {
        const result = await axios.delete(`${URL2}/${id}`)
        console.log(result.data)
        getgame_shops()
    }


    const printgame_shops = () => {
        
        if (game_shops && game_shops.length){
            return game_shops.map((game_shop, index) =>
                <li className={styles.listItem} key={index}>
                <div className={styles.box} >
                    <h6 >Id:{(game_shop ? game_shop.id : 0) }</h6>
                    <img src={game_shop.imageurl} width="100" height="100"></img>
                    <h6>name:{(game_shop) ? game_shop.name : 0}</h6>
                    <h6>Price:{(game_shop) ? game_shop.price : 0}</h6>
                    <h6>date_sell:{(game_shop) ? game_shop.date_sell : 0}</h6>
                    <h6>sell_buy:{(game_shop) ? game_shop.sell_buy : 0}</h6>
                    </div>
                    <button onClick={() => buygame_shop(game_shop.id)} className={styles.btnupdate} >Buy</button>
                </li>
            )}
        else
            return <li> Emtpy </li>
            
    }
    return (<div className={styles.container}>
        <Navbar />
        
        <h1>GameStore</h1>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Roboto+Mono:ital,wght@1,200&display=swap" rel="stylesheet"></link>
        <ul className={styles.list} >{printgame_shops()}</ul>
    </div>
    
    )

}

export default SWR2

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}