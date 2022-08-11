import React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export default function Ninjas ({ninjas}) {

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja)=>(
        <Link href={`/ninjas/`+ninja.id}key={ninja.id}>
          <a className={styles.single}>
            {ninja.name}
          </a>
        </Link>
      )
      )}
    </div>
  );
}

export const getStaticProps=async()=>{
    let {data}=await axios('https://jsonplaceholder.typicode.com/users')
  return{
    props:{ninjas:data}
}}