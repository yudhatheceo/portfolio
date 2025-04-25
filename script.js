document.querySelectorAll('.portfolio-item img').forEach(img => {
  img.addEventListener('click', function() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');

    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('image-modal').style.display = "none";
});