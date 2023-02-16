// import logo from './logo.svg';
import './App.css';
import React from 'react';

class User extends React.Component{
  render(){
    return <p>Now is {new Date().toUTCString()}</p> 
  }
}

class Book extends React.Component{
  render(){
    return(
      <div class="container">
        <h1 class="custom_style">Думай і багатій</h1>
        <p class="custom_style">
          <i>407 сторінок</i>
        </p>
        <h3>Info:</h3>
        <ul>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, magna tempor laoreet imperdiet, 
          urna nibh bibendum justo, nec interdum purus felis nec nunc. Ut dapibus, nibh id molestie posuere, urna ante 
          dapibus justo, lobortis porttitor ipsum dolor quis mi. Mauris rhoncus nulla eget massa tempus volutpat. Sed 
          pulvinar lacus eu orci molestie aliquet. Curabitur congue nulla sed velit suscipit, placerat pharetra urna rutrum. 
          Integer viverra accumsan ipsum, sed lobortis diam dignissim sit amet.</p>
          </li>
          <li>
            <p> Vivamus euismod enim libero, quis pharetra nunc 
              accumsan nec. Suspendisse arcu orci, blandit vitae imperdiet eget, molestie at ligula. Donec ullamcorper dui at lectus 
              dictum dignissim. Vestibulum arcu velit, placerat in mollis lacinia, efficitur vel lacus. Suspendisse ut sodales nisi. 
              Donec venenatis, nulla eget maximus ullamcorper, ante augue egestas nibh, in vehicula velit libero at metus.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

class Gang extends React.Component{
  render(){
    return(
      <div>
        <img class="custom_img" src="https://i.scdn.co/image/ab6761610000e5ebf4593f7b778219838d858c34" alt='migos'></img>
        <br></br>
        <h1>Migos</h1>
        <div>
          <h3>Members:</h3>
          <p>Quavo</p>
          <p>Takeoff (RIP)</p>
          <p>Offset</p>
        </div>
      </div>
    );
  }
}

class MyBestFood extends React.Component{
  render(){
    return(
      <div>
        <h1>"Коктейльчік"</h1>
        <br></br>
        <h2>Інгрідієнти:</h2>
        <ul>
          <li>
            Вівсянка (Сер) - 60г
          </li>
          <li>
            Кисломолочний сир - 200г (макс. 300)
          </li>
          <li>
            Банан - 2 шт.
          </li>
          <li>
            Молоко - 300-400 мл
          </li>
          <li>
            Горіхова паста - 1 ст. л.
          </li>
        </ul>
        <ol>
          <li>
            Висипати вівсянку у чашку (об'єм не менше 1л).
          </li>
          <li>
            Додати сир та банани.
          </li>
          <li>
            Налити молоко. Зазвичай, це по бажанню к-сть молока, так як є люди, яким подобається "Коктейльчік" 
            як у рідкому стані, так і у дуже густому. Я роблю 1 варіант, додаю близько 350мл молока.
          </li>
          <li>
            Взбити блендером, щоб не було цяточок
          </li>
          <li>
            Подавати не на стіл, а якомога швидше до шлунку, тому що воно швидко густішає
          </li>
        </ol>
        <h4>Ви будете сильно задоволені, як цей гарний молодий хлопець:</h4>
        <img class="custon_img" src="img\image_2023-02-16_21-34-13.png" alt='дуже задоволена людина'/>
      </div>
    );
  }
}

function Alert(){
  alert("First alert in React");
}

function App() {
  return (
    <>
      <Book></Book>
      <input type="button" value="Call alert" onClick={Alert}></input>
      <hr></hr>
      <Gang></Gang>
      <hr></hr>
      <MyBestFood></MyBestFood>
    </>
  );
}

export default App;
