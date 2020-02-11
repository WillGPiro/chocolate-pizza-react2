import React from 'react';
import Header from './Header';
import Title from './Title';
import Body from './Body';
import Ingredients from './Ingredients';
import './App.css';

const myLogo = 'logo.png'
const printLogo = 'print-icon.png'
const mainImg = 'choco-pizza.png'
//const noteCard = 'list-bg.png'
const imgItem1 = '1 ½ cups milk'
const imgItem2 = '½ cup marscapone'
const imgItem3 = '½ tsp pink salt'
const imgItem4 = '1 lb Black Mission Figsk'
const imgItem5 = '½ cup brown sugar'
const imgItem6 = '1 ½ cups heavy cream'
const imgItem7 = '1/3 granulated sugar'
const imgItem8 = '2 egg yolks'
const imgItem9 = '2-4 tbsp water'
const imgItem10 = '1 lemon, juiced'
const imgItem11 = '2 tbsp butter'
const imgItem12 = '1 cup honey roasted'

function App() {
  return (
    <div className="App">
     <Header logo = {myLogo}/>
     <Title print = {printLogo}/>
     <Body pizzaImg = {mainImg}/>
     <Ingredients img1 = {imgItem1} img2 = {imgItem2} img3 = {imgItem3} img4 = {imgItem4} img5 = {imgItem5} img6 = {imgItem6} img7 = {imgItem7} img8 = {imgItem8} img9 = {imgItem9} img10 = {imgItem10} img11 = {imgItem11} img12 = {imgItem12}/>
    </div>
  );
}

export default App;
