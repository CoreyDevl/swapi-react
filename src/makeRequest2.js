import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export const StarData= () => {
  const {swParam} = useParams()
  const SWAPIBase = `https://swapi.dev/api/${swParam}` 
  const [category, setCategory] = useState('')
  const [page,setPage] = useState('')
  const [starList, setStarList] = useState([])

  
useEffect(()=>{
  axios.get(SWAPIBase)
  .then(response => {
    setStarList(response.data)
    console.log(starList)
  })

}, [SWApiBase])


}