export default function decorate(block) {
  console.log('Decorating button', block); 

  block.className = 'banco-compartir-button-block';

  const url = [...block.children].firstElementChild;
  const content = [...block.children].lastElementChild;

  console.log({
    url: url,
    content: content,
  })

}