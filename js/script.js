const fileInput = document.getElementById('fileInput');
const previewImg = document.getElementById('previewImg');
const removeImg = document.getElementById('remove-preview');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', (event) => {
    previewImg.src = event.target.result;
  });

  reader.readAsDataURL(file);
});


removeImg.addEventListener('click', () => {
    previewImg.src = "";
    fileInput.value = "";
});