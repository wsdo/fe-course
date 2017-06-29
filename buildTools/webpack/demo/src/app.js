import Home from './components/home/home.js';
const App = function() {
    let dom = document.getElementById('app');
    let home = new Home();
    console.log(home.template);
    dom.innerHTML = home.template;
}

new App();