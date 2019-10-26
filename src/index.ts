//import application level css
import './styles/main.scss'
import {myTest} from 'app/test'

//application bootstrap goes here
const container = document.getElementById('container');
console.log({container});
if (container) {
  container.innerText = myTest() ? "Yes" : "No";
} else {
  document.getElementsByTagName("body")[0].innerText = myTest() ? "Yes" : "No";
}