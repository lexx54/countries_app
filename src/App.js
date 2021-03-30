import React,{useState,useEffect} from 'react';
import {DEFAULT_END_POINT,DEFAULT_URL} from "./constants.js";
import axios from 'axios';
import Country from './components/Country';
import Filter from "./components/Filter";

const App = ()=> {
  const [countries,setCountries]=useState([]);
  const [searchCountries,setSearchCountries]=useState("");

  //functions 
  useEffect(()=>{
    axios.get(DEFAULT_URL+DEFAULT_END_POINT)
      .then(res=>{
        console.log(res.data)
        setCountries(res.data);
      })
      .catch(err => console.error(err))
  },[])
  return (
    <section>
      <h1>Hello World</h1>
      <Filter />
      <div>
      {
        typeof countries==="undefined"
        ?<p>Loading...</p>
        :countries.map(
          country => <Country 
                        key ={country.numericCode} 
                        countries={country}/>)
      }
      </div>
    </section>
  )
}

export default App;