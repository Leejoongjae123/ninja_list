import React from 'react';
import {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar () {
  return (
    <nav>
      <div className="logo">
      <Image src='/logo.png' alt='no__image' width={128} height={77}></Image>
      <h1>Ninja List</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href='/about'><a>About</a></Link>
      <Link href='/ninjas'><a>Ninja Listing</a></Link>
    </nav>
  );
}
