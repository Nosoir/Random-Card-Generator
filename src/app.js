/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  const palos = ["♦", "♥", "♠", "♣"];
  const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let randomPalos = Math.floor(Math.random() * palos.length);
  let randomNumeros = Math.floor(Math.random() * numeros.length);

  let returnPalo1 = (document.getElementById("palo-top").innerHTML =
    palos[randomPalos]);
  let returnNumeros = (document.getElementById("number").innerHTML =
    numeros[randomNumeros]);
  let returnPalo2 = (document.getElementById("palo-bottom").innerHTML =
    palos[randomPalos]);

  return {
    returnPalo1,
    returnNumeros,
    returnPalo2
  };
};
setTimeout("location.reload()", 10000);
