import React from 'react'
import '../components/Container.css'
import Image from '../image/phenrike.jpg'
import Pin from '../image/pin2.png'
import Web from '../image/web.png'
import Mobile from '../image/mobile.png'
import Book from '../image/book.png'
import Gear from '../image/gear.png'
import Folder from '../image/folder.png'
import Lang from '../image/lang.png'
import Links from '../image/links.png'

const Container = () => {

  return (
    <div className='container'>
        <div className='header'>
            <h1 className='name'>Paulo Henrike Prestes</h1> 
            <a href="https://gmail.com"><p className='email'>phenrikeprestes@gmail.com</p> </a>
              
        </div>
        <div className='navbar'>
            <img src={Image} alt="" className='image' />
            <div className='nasc'>
                <p className='year'>1981</p>
                <h1>January</h1>
                <h1 className='day'>08</h1>
               

            </div>
            <div className='local'>
              <img src={Pin} alt="" className='pin' />
              <h1 className='place'>Montpellier  France</h1>
            </div>

            <div className='web'>
                <img src={Web} alt="" className='webicon'/>
                <h1 className='webdev'>Web Developer</h1>
            </div>

            <div className='mobile'>
              <img src={Mobile} alt="" className='mobileicon' />
              <h1 className='mobiletext'>Mobile Developer</h1>
            </div>
           
        </div>

        <div className='main'>
            <div className='work'>
              <img src={Folder} alt="" className='folder' />
              <h1 className='recent'>Recent Work</h1>
              <h2 className='recentmain'>freelance website and app developer</h2>
            </div>

            <div className='sklcontainer'>
            <div className='skills'>
              <img src={Gear} alt="" className='gear'/>
                <h1 className='skillstitle'>Skills</h1>
                <h2 className='skillsmain'>JS, TS, React, Flutter, Git, Figma </h2>
            </div>

            <div className='education'>
              <img src={Book} alt="" className='book' />
              <h1 className='educationtitle'>Education</h1>
              <h2 className='educationmain'>Fatec São Sebastião - SP</h2>
              <h2 className='educationmain'>Business Administration</h2>
              <p className='educationmain'>Incomplete</p>
            </div>
            </div>

        <div className='langcontainer'>
          <div className='lang'>
            <img src={Lang} alt="" className='globe'/>
              <h1 className='langtitle'>Languages</h1>
              <h2 className='langmain'>English -- Advanced</h2>
              <h2 className='langmain'>Portuguese -- Native</h2>
              <h2 className='langmain'>French -- Intermediary</h2>
              <h2 className='langmain'>Spanish -- Intermediary</h2>

          </div>

        
            <div className='links'>
                <img src={Links} alt="" className='linkicon'/>
                <h1 className='linktitle'>Links</h1>
               <a href="https://linkedin.com/in/paulo-prestes-978556237/" className='linkedin'><h2 className='h2'>Linkedin P. Henrike Prestes</h2></a>
               <a href="https://github.com/phenrikeprestes" className='github'><h2 className='h2'>GitHub phenrikeprestes</h2></a>
               <a href="http://www.https://www.instagram.com/phenrikeprestes/" className='instagram'><h2 className='h2'>Instagram phenrikeprestes</h2></a>
            </div>
          
        </div>


        </div>
        <div className='footer'>
        <hr />
          <p><span >&copy; All rights reserved</span></p>
        </div>
       
    </div>
  )
}

export default Container