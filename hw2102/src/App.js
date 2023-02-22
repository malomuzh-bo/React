import logo from './logo.svg';
import './App.css';
import CustomDiv from './Components/custom_div';
import Button from './Components/button';
import Random from './Components/random';
import Quote from './Components/regenerateQuotes';
import React, { useState } from 'react'

function App() {
  let back1 = "#A2A2D0";
  let back2 = "#6B574A";
  let back3 = "#456BD1";
  let text1 = "#4D296B";
  let text2 = "#D14A3C";
  let text3 = "#CDD14F";

  const [divBg, setDivBg] = useState("purple");

  const [divText, setDivText] = useState("white");

  const customFunc = (newBack, newText) => {setDivBg(newBack); setDivText(newText)};

  const quotes = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed.",
    "Sed pellentesque interdum magna, a tempus purus facilisis nec. Quisque.",
    "Nullam non facilisis urna. Nulla luctus justo sit amet purus.",
    "In varius lacinia purus ac cursus. Integer fringilla, justo vitae.",
    "Quisque in ornare sapien. Mauris vulputate, tortor vitae egestas porttitor.",
    "Maecenas tempus ligula et ligula consequat, vel elementum orci tincidunt.",
    "Donec laoreet justo ante, ut suscipit arcu pulvinar a. Mauris.",
    "Maecenas efficitur, velit in eleifend ultrices, tortor orci condimentum dui.",
    "Donec auctor pulvinar mauris sit amet tincidunt. Ut volutpat velit.",
    "Fusce scelerisque sapien turpis, eget vulputate urna pellentesque a. Nullam."
  ]
  const index = Random(0, quotes.length);

  return (
    <div className="App">
      <Button bgCol = {back1} textCol = {text1} onClickAction = {customFunc} />
      <Button bgCol = {back2} textCol = {text2} onClickAction = {customFunc} />
      <Button bgCol = {back3} textCol = {text3} onClickAction = {customFunc} />
      <CustomDiv bgCol = {divBg} textCol = {divText} />
      <hr/>
      <Quote arr = {quotes} number = {index} />
    </div>
  );
}

export default App;
