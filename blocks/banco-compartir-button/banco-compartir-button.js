export default function decorate(block) {
  console.log('Decorating button', block); 

  block.className = 'banco-compartir-button-block';

  const url = block.firstElementChild;
  const content = block.lastElementChild;

  const urlText = url.textContent.trim();
  const contentText = content.textContent.trim();

  block.removeChild(url);
  block.removeChild(content);

  const button = document.createElement('button');
  button.className = 'banco-compartir-button-cta';
  button.textContent = contentText;

  block.appendChild(button);

  button.addEventListener('click', () => {
    window.open(urlText, '_blank');
  });
}