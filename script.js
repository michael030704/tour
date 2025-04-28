// Get modal and buttons
const modal = document.getElementById('modal');
const signinBtn = document.getElementById('signinBtn');
const closeModal = document.querySelector('.close');

// Open modal
signinBtn.onclick = () => {
  modal.style.display = 'flex';
};

// Close modal
closeModal.onclick = () => {
  modal.style.display = 'none';
};

// Close modal if clicked outside the modal
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
