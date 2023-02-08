export const rerend = () => {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.setAttribute('style',`
    margin: 0;
    font-family: Roboto; 
  `);
  const wrapper = document.querySelector('.wrapper') as HTMLDivElement;
  wrapper.setAttribute('style', `
    max-width: 960px;
    margin: 0 auto;
  `);
  const h1 = document.querySelector('h1') as HTMLHeadingElement;
  h1.setAttribute('style', `
    margin: 40px auto;
    color: black;
    text-align: center;
  `);
  const form = document.querySelector('form') as HTMLFormElement;
  form.setAttribute('style',`
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  `);

  const label = document.querySelectorAll('label') as NodeListOf<HTMLLabelElement>;
  for(let i = 0; i < label.length; i++) {
  label[i].setAttribute('style', `
    display: block;
    font-weight: bold;
    font-size: 0.8em;
    color: black;
    margin: 16px 0 6px;
    `);
  }
  const select = document.querySelectorAll('select') as NodeListOf<HTMLSelectElement>;
  for(let i = 0; i < select.length; i++) {
    select[i].setAttribute('style', `
      padding: 6px;
      border: 1px solid #e1e1e1;
      border-radius: 4px;
    `);
  }
  const field = document.querySelectorAll('.field') as NodeListOf<HTMLDivElement>;
  for(let i = 0; i < field.length; i++) {
    field[i].setAttribute('style', `
      display: inline-block;
      margin: 0 10px;
    `);
  }

  const button = document.querySelector('button') as HTMLButtonElement;
  button.setAttribute('style', `
    padding: 6px;
    border: 0;
    border-radius: 4px;
    min-width: 80px;
    background: green;
    color: white;
    cursor: pointer;
  `)


  const table = document.querySelector('.table.table-compact.w-full') as HTMLTableElement;
  table.setAttribute('style', `
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 1rem;
    color: #212529;
  `);

  const th = table.getElementsByTagName('th');
  const td = table.getElementsByTagName('td');

  for (let i = 0; i < th.length; i++) {
    th[i].setAttribute('style', `
      padding: 0.5rem;
      text-align: left;
      border-top: 1px solid #dee2e6;
      border-bottom: 2px solid #dee2e6;
    `);
    const t: string  = th[i].innerText;
    if(t === 'Earn') {
      th[i].style.color = 'green';
    } else if(t === 'Loss') {
      th[i].style.color = 'red';
    }
  }

  for (let i = 0; i < td.length; i++) {
    td[i].setAttribute('style', `
      padding: 0.5rem;
      text-align: left;
      border-top: 1px solid #dee2e6;
      border-bottom: 2px solid #dee2e6;
    `);
  }
  const del = document.querySelectorAll('.del') as NodeListOf<HTMLTableCellElement>
  for(let i = 0; i < del.length; i++) {
    del[i].setAttribute('style', `
      color: blue;
      cursor: pointer;
      padding: 0.5rem;
      text-align: left;
      border-top: 1px solid #dee2e6;
      border-bottom: 2px solid #dee2e6;
    `)
  }

}