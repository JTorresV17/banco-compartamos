export default function decorate(block) {
  console.log('Decorating button', block); 

  block.className = 'banco-compartir-button-block';

  const urlContainer = [...block.children].firstElementChild;
  const contentContainer = [...block.children].lastElementChild;

  const url = urlContainer.textContent;
  const content = contentContainer.textContent;
  
  console.log('Button content:', content, 'URL:', url);

  block.removeChild(urlContainer);
  block.removeChild(contentContainer);
  
  const button = document.createElement('div');
  button.className = 'banco-compartir-button-div';
  button.textContent = content;

  button.addEventListener('click', () => {
    window.location.href = url;
  });

}