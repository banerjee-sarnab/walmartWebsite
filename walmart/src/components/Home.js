import React from 'react';
import Deals from "./Deals";
import Hero from "./Hero";
import axios from 'axios';
import { useEffect } from 'react';


function Home({ cards, setCards}) {
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/api/getRecommendations");
            setCards(response.data);
        }
        fetchData();
    }, [setCards]);
    return (
        <div className="bg-[#e6f1fc]">
            {/* <Hero /> */}
            <Deals cards={cards} />
        </div>
    )
}

export default Home;