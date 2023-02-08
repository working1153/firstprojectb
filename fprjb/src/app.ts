import { Earn } from './classes/Earn.js';
import { Loss } from './classes/Loss.js';
import { TableTemplate } from './classes/TableTemplate.js';
import { totalamount } from './components/totalamount.js';
import { AllData } from './interfaces/AllData.js';
import { rerend } from './style.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;
//inputs
const type = document.querySelector('#type') as HTMLSelectElement; //get id=type
const date = document.querySelector('#date') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//new table
const tb = document.querySelector('.new-list') as HTMLTableElement;
const table = new TableTemplate(tb);

rerend();

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  if(amount.value === '' || details.value === '') {
    alert('Please fill all data');
    return;
  }
  let values: [string, string, number];
  values = [date.value, details.value, amount.valueAsNumber]

  let doc: AllData;

  if(type.value === 'Earn') {
    doc = new Earn(...values);
  } else {
    doc = new Loss(...values);
  }

  table.render(doc, type.value, 'end');
  totalamount();
  rerend();
})

