//grab the links for the contact cards
const links = document.querySelectorAll('#contact a');

links.forEach(link => {
  //grab the image elements and their src attributes
  const img = link.querySelector('img');
  const src = img.getAttribute('src');

  //when the user hovers over an img, replace the .png with the -hover.png
  //this changes the img to an identical img that is a different color
  const srcHover = src.replace('.png', '-hover.png');

  //add event listeners on mouseenter to change the img
  link.addEventListener('mouseenter', () => {
    img.style.opacity = 0;
    setTimeout(() => {
      img.setAttribute('src', srcHover);
      img.style.opacity = 1;
    }, 300); // change the image after a 500ms delay to allow the opacity to animate
    link.style.backgroundColor = "#232735"; // change the background color on hover
  });

  //add event listeners on mouseleave to change the img back
  link.addEventListener('mouseleave', () => {
    img.style.opacity = 0;
    setTimeout(() => {
      img.setAttribute('src', src);
      img.style.opacity = 1;
    }, 300); // change the image after a 500ms delay to allow the opacity to animate
    link.style.backgroundColor = "#0F0606"; // set the background color back to the initial value
  });
});
