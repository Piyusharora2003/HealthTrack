"use client";
import React, {useState} from 'react'
import { UserDataBlock } from './Blocks/UserData.jsx';
import  ImageGallery  from './Blocks/ImageGallery.jsx';
// Home.jsx

import { BMI, BMR, IBW, RecomendedExercise, BFP } from './Blocks';

function Home({userData}) {

  return (
    <>
    <div className='flex flex-wrap md:flex-nowrap mx-auto'>
      
        <div className="float mx-auto">
            <UserDataBlock userData= {userData} />
            <div id='analyticsBlocks'>
                <BMI userData = {userData} />
                <BMR userData = {userData} />
                <IBW userData = {userData} />
            </div>
        </div>
        <div className='float-left mx-auto'>
            <BFP userData = {userData} />
            <RecomendedExercise userData = {userData} />
        </div>
        {
            window.screen.width > 768 &&
            <div className='float-left md:flex'>
                <ImageGallery />
            </div>
        }
    </div>
    </>
)
}

export default Home;