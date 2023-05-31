const links = document.querySelectorAll('.link');
const imagePreview = document.getElementById('image-preview');
const imageCaption = document.getElementById('image-caption');

links.forEach(link => {
  const image = link.dataset.image;
  const caption = link.dataset.caption;

  link.addEventListener('mouseover', () => {
    imagePreview.src = image;
    imageCaption.textContent = caption;
    imagePreview.classList.add('show');
  });

  link.addEventListener('mouseout', () => {
    imagePreview.src = '';
    imageCaption.textContent = '';
    imagePreview.classList.remove('show');
  });
});