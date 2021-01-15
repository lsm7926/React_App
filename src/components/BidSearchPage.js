import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import BidList from './BidList';

const BidSearchPage = (props) => {
  const [input, setInput] = useState('');
  const [bidListDefault, setBidListDefault] = useState();
  const [bidList, setBidList] = useState();
/*
  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setBidList(data) 
         setBidListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = bidListDefault.filter(bid => {
      return bid.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setBidList(filtered);
  }
*/
  //useEffect( () => {fetchData()},[]);
	
  return (
    <>
        <div>   
            <h1>입찰공고 목록</h1>
        </div>
        <SearchBar 
            input={input} 
            //onChange={updateInput}
        />
        <BidList/>
    </>
   );
}
export default BidSearchPage;
