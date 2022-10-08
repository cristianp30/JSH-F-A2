import "./styles.css";
import { runCode } from "./exercise";

(() => {
  const array = [
    {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  }
];
  
  document.getElementById("app").innerHTML = `
  <h1>transformar un array</h1>
  <p>Array: <code>${JSON.stringify(array)}}</code></p>
  <p>Response from <code>runCode</code></p>
  <p><button id ="button" >Run Code</button></p>
  <pre><code id="rta"></code></pre>
  `;
  document.getElementById("button").addEventListener("click", () =>{
    const rta = runCode(array);
    document.getElementById("rta").innerHTML=rta;
  });
})();
