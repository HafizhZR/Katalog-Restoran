import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const drawer = document.querySelector('#drawer_icon');
const sidebar = document.querySelector('#sidebar');

function toggleDrawer() {
  drawer.classList.toggle('open');
}

sidebar.addEventListener('click', toggleDrawer);
