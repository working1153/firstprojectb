export const totalamount = () => {
  const tr = document.querySelectorAll('.unit-data');
  const total_amount = document.querySelector('.total-amount') as HTMLSpanElement;
  let sumall: number = 0;
  for(let i = 0; i < tr.length; i++) {
    const head = tr[i].querySelector('th') as HTMLTableCellElement;
    const tds = tr[i].querySelectorAll('td');
    const amount = parseInt(tds[2].innerText);
    if(head.innerText === 'earn') {
      sumall += amount;
    } else {
      sumall -= amount;
    }
  }
  total_amount.innerText = sumall.toString();
  
}