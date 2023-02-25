const toggleMenu = () => {
  const menuToggle = document.querySelector(".menuToggle");
  menuToggle.classList.toggle("active");
  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
}

const imgSlider = (parametros) => {
  document.getElementById("slider").src = parametros;
}