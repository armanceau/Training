const links = document.querySelectorAll('.link');
const imagePreview = document.getElementById('image-preview');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    const image = link.dataset.image;
    imagePreview.src = image;
  });

  link.addEventListener('mouseout', () => {
    imagePreview.src = '';
  });
});