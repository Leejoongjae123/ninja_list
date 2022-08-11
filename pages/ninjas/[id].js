import React from 'react';
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Details ({ninjas}) {
  
  return (
    <div>
      <h1>{ninjas.name}</h1>
      <p>{ninjas.email}</p>
      <p>{ninjas.website}</p>
      <p>{ninjas.address.city}</p>
    </div>
  );
}

export const getStaticPaths= async ()=>{
  const {data}=await axios('https://jsonplaceholder.typicode.com/users')
  
  const paths = data.map((ninja)=>{
    return {
      params:{id:ninja.id.toString()} 
    }
  })
  return {
    paths,
    fallback:false,
  }
}

export const getStaticProps = async (context)=>{
  const id=context.params.id;
  let {data}=await axios('https://jsonplaceholder.typicode.com/users/'+id)
  return {
    props:{ninjas:data}
  }
}