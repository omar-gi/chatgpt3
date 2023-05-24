import React from 'react';
import { Blog,Features,Footer,Header ,Possibility,WhatGPT3 ,Featuresagain} from './containers';
import {Brand ,Cta , Navbar} from './component';
import './App.css';



const App = () => {
  return (
    <div className="App">
    
        <div className="gradient__bg">

        <Navbar />
        <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Possibility />
        <Cta />
        <Features/>
        <Blog />
        <Footer />
    </div>
  )
}

export default App