import { Earn } from './classes/Earn.js';
import { Loss } from './classes/Loss.js';
import { TableTemplate } from './classes/TableTemplate.js';
import { totalamount } from './components/totalamount.js';
import { rerend } from './style.js';
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type'); //get id=type
const date = document.querySelector('#date');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//new table
const tb = document.querySelector('.new-list');
const table = new TableTemplate(tb);
rerend();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (amount.value === '' || details.value === '') {
        alert('Please fill all data');
        return;
    }
    let values;
    values = [date.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'Earn') {
        doc = new Earn(...values);
    }
    else {
        doc = new Loss(...values);
    }
    table.render(doc, type.value, 'end');
    totalamount();
    rerend();
});
