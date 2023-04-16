const links = document.querySelectorAll('#contact a');

links.forEach(link => {
  const img = link.querySelector('img');
  const src = img.getAttribute('src');
  const srcHover = src.replace('.png', '-hover.png');

  link.addEventListener('mouseenter', () => {
    img.style.opacity = 0;
    setTimeout(() => {
      img.setAttribute('src', srcHover);
      img.style.opacity = 1;
    }, 300); // change the image after a 500ms delay to allow the opacity to animate
    link.style.backgroundColor = "#232735"; // change the background color on hover
  });

  link.addEventListener('mouseleave', () => {
    img.style.opacity = 0;
    setTimeout(() => {
      img.setAttribute('src', src);
      img.style.opacity = 1;
    }, 300); // change the image after a 500ms delay to allow the opacity to animate
    link.style.backgroundColor = "#0F0606"; // set the background color back to the initial value
  });
});
