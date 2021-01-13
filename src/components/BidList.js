import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BidItem from './BidItem';
import ReactPaginate from "react-paginate";

const BidListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 100%;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const BidList = () => {
    const [Bids,setBids] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    '1230000/BidPublicInfoService/getBidPblancListInfoCnstwk?inqryDiv=1&type=json&inqryBgnDt=202012010000&inqryEndDt=202101012359&pageNo=1&numOfRows=30&ServiceKey=55qUjIXFw%2BGrGdG44Ro8Hrmi4SHf5qpKJpWxtv47WZTXp8hDofXWHHctm8rE1ZUHGNFdY%2FemguVdw3h3PM5Zdg%3D%3D',
                );
                setBids(response.data.response.body.items);
            }
            catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if(loading){
        return <BidListBlock>loading...</BidListBlock>;
    }

    if(!Bids){
        return null;
    }
    const bidRow = Bids.map(Bid => (
        <BidItem key={Bid.bidNtceNo+Bid.bidNtceOrd} Bid={Bid}/>
    ));

    return (
        <div>
            <div>
                <h1>공고조회</h1>
            </div>
            <div className = "App">
                    <BidListBlock>{bidRow}</BidListBlock>
            </div>
        </div>

    );
};

export default BidList;