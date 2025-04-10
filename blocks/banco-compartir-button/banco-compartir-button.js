export default function decorate(block) {
  console.log('Decorating button', block); 

  block.className = 'banco-compartir-button-block';

  const url = block.firstElementChild;
  const content = block.lastElementChild;

  console.log({
    url: url,
    content: content,
  })

}