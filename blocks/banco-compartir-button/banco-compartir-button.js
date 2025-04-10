export default function decorate(block) {
  console.log('Decorating button', block); 

  block.className = 'banco-compartir-button-block';

  const urlContainer = [...block.children].firstElementChild;
  const contentContainer = [...block.children].lastElementChild;

  const url = urlContainer.textContent.trim();
  const content = contentContainer.textContent.trim();

  block.removeChild(urlContainer);
  block.removeChild(contentContainer);
  
  const button = document.createElement('div');
  button.className = 'banco-compartir-button-div';
  button.textContent = content;

  console.log('Button content:', content, 'URL:', url);

  button.addEventListener('click', () => {
    window.location.href = url;
  });

}