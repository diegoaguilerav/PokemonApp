<template>
  <div id="app">
    <div class="bg-light">
      <img class="logo" src="./assets/pokemon-logo.png">
    </div>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <a class="navbar-brand" href="#">POKEDEX</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">INICIO<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              REGIONES
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">JOHTO</a>
              <a class="dropdown-item" href="#">HOENN</a>
              <a class="dropdown-item" href="#">SINNOH</a>
              <a class="dropdown-item" href="#">UNOVA</a>
              <a class="dropdown-item" href="#">KALOS</a>
              <a class="dropdown-item" href="#">ALOLA</a>
              <a class="dropdown-item" href="#">GALAR</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">ACERCA DE<span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="router"></router-view>
    <footer>
      <div class="d-flex justify-content-center">
        <div class="w-75">
            <svg class="social" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="15" height="28" viewBox="0 0 15 28">
                <path d="M14.468,0.203 C14.016,0.137 12.459,0.003 10.651,0.003 C6.868,0.003 4.274,2.313 4.274,6.548 C4.274,6.548 4.274,10.197 4.274,10.197 C4.274,10.197 0.005,10.197 0.005,10.197 C0.005,10.197 0.005,15.151 0.005,15.151 C0.005,15.151 4.274,15.151 4.274,15.151 C4.274,15.151 4.274,27.856 4.274,27.856 C4.274,27.856 9.396,27.856 9.396,27.856 C9.396,27.856 9.396,15.151 9.396,15.151 C9.396,15.151 13.647,15.151 13.647,15.151 C13.647,15.151 14.300,10.197 14.300,10.197 C14.300,10.197 9.396,10.197 9.396,10.197 C9.396,10.197 9.396,7.033 9.396,7.033 C9.396,5.610 9.781,4.623 11.840,4.623 C11.840,4.623 14.468,4.623 14.468,4.623 C14.468,4.623 14.468,0.203 14.468,0.203 Z" id="path-1" class="cls-2" fill-rule="evenodd"/>
            </svg>
            <svg class="social" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="26" height="26" viewBox="0 0 26 26">
                <path d="M22.784,21.716 C22.784,22.285 22.332,22.737 21.763,22.737 C21.763,22.737 3.869,22.737 3.869,22.737 C3.300,22.737 2.848,22.285 2.848,21.716 C2.848,21.716 2.848,10.869 2.848,10.869 C2.848,10.869 5.208,10.869 5.208,10.869 C4.991,11.556 4.874,12.309 4.874,13.062 C4.874,17.347 8.456,20.812 12.858,20.812 C17.277,20.812 20.859,17.347 20.859,13.062 C20.859,12.309 20.742,11.556 20.524,10.869 C20.524,10.869 22.784,10.869 22.784,10.869 C22.784,10.869 22.784,10.869 22.784,10.869 C22.784,10.869 22.784,21.716 22.784,21.716 ZM18.030,12.794 C18.030,15.556 15.720,17.799 12.858,17.799 C10.012,17.799 7.702,15.556 7.702,12.794 C7.702,10.032 10.012,7.789 12.858,7.789 C15.720,7.789 18.030,10.032 18.030,12.794 ZM22.784,6.768 C22.784,7.404 22.265,7.923 21.629,7.923 C21.629,7.923 18.717,7.923 18.717,7.923 C18.081,7.923 17.562,7.404 17.562,6.768 C17.562,6.768 17.562,4.006 17.562,4.006 C17.562,3.370 18.081,2.851 18.717,2.851 C18.717,2.851 18.717,2.851 18.717,2.851 C18.717,2.851 21.629,2.851 21.629,2.851 C22.265,2.851 22.784,3.370 22.784,4.006 C22.784,4.006 22.784,6.768 22.784,6.768 ZM25.697,3.286 C25.697,1.479 24.207,-0.011 22.399,-0.011 C22.399,-0.011 3.283,-0.011 3.283,-0.011 C3.283,-0.011 3.283,-0.011 3.283,-0.011 C1.476,-0.011 -0.014,1.479 -0.014,3.286 C-0.014,3.286 -0.014,22.402 -0.014,22.402 C-0.014,24.210 1.476,25.700 3.283,25.700 C3.283,25.700 22.399,25.700 22.399,25.700 C24.207,25.700 25.697,24.210 25.697,22.402 C25.697,22.402 25.697,3.286 25.697,3.286 Z" id="path-1" class="cls-2" fill-rule="evenodd"/>
            </svg>
            <svg class="social" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="27" height="22" viewBox="0 0 27 22">
                <path d="M26.387,2.551 C25.416,2.969 24.361,3.271 23.273,3.388 C24.395,2.718 25.249,1.664 25.650,0.408 C24.612,1.028 23.441,1.480 22.219,1.714 C21.231,0.659 19.825,0.007 18.268,0.007 C15.272,0.007 12.862,2.434 12.862,5.413 C12.862,5.832 12.912,6.250 12.996,6.652 C8.510,6.418 4.509,4.275 1.848,0.994 C1.379,1.798 1.111,2.718 1.111,3.723 C1.111,5.597 2.065,7.254 3.521,8.225 C2.634,8.192 1.797,7.941 1.078,7.539 C1.078,7.556 1.078,7.589 1.078,7.606 C1.078,10.234 2.936,12.410 5.413,12.912 C4.961,13.029 4.476,13.096 3.990,13.096 C3.639,13.096 3.304,13.063 2.969,13.013 C3.655,15.155 5.647,16.712 8.024,16.762 C6.166,18.218 3.840,19.072 1.312,19.072 C0.860,19.072 0.442,19.055 0.006,19.005 C2.400,20.545 5.246,21.432 8.309,21.432 C18.252,21.432 23.692,13.197 23.692,6.049 C23.692,5.815 23.692,5.581 23.675,5.346 C24.730,4.576 25.650,3.622 26.387,2.551 Z" id="path-1" class="cls-2" fill-rule="evenodd"/>
            </svg>
        </div>
      </div>
      <div class="credits">
        <h5>Diseñado por</h5>
        <h2><a href="">Diego Aguilera</a></h2>
        <h5>© 2020</h5>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo{
  width: 80%;
}
nav{
  animation-name: nav-in;
  animation-duration: 2s;
}
nav li{
  color: #3F3844;
}
.router{
  padding: 30px 0;
}
footer{
  background-color: #eeeeee;
  padding-top: 30px;
  color: #F5F10C;
}
.social{
  fill: #3F3844;
  stroke: none;
  width: 33.3%;
}
.social:hover{
  fill: #C3C3C3;
}
.credits{
  color: #3F3844;
  text-align: left;
  padding: 48px 30px;
}
.credits h2 a{
  color: #3F3844;
  text-decoration: none;
}
.credits h2 a:hover{
  color: #C3C3C3;
}
.credits h2{
  font-family: 'Prompt', sans-serif;
  font-weight: 700 !important;
}
.credits h5{
  font-family: 'Oxygen', sans-serif;
  font-size: 16px;
  font-weight: 700 !important;
}
@keyframes nav-in {
  from {
    margin-left: 100%;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}

@media (min-width: 1024px){
  #app{
    background-image: url("./assets/pokedex.png");
    background-size: 20%;
  }
}
</style>
