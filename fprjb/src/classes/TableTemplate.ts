import { totalamount } from "../components/totalamount.js";
import { AllData } from "../interfaces/AllData.js";


export class TableTemplate {
  constructor(private container: HTMLTableElement) {}

  render(item: AllData, heading: string, pos: 'start' | 'end') {
    const tr = document.createElement('tr');
    tr.classList.add('unit-data');
    const th = document.createElement('th');
    th.innerText = heading;
    tr.append(th);

    const date = document.createElement('td');
    date.innerText = item.getDate();
    tr.append(date);
    const details = document.createElement('td');
    details.innerText = item.getDetails();
    tr.append(details);
    const amount = document.createElement('td');
    amount.innerText = item.getAmount().toString();
    tr.append(amount);

    const del = document.createElement('td');
    del.innerText = 'del';
    del.classList.add('del');
    del.onclick = function() {
      tr.remove();
      totalamount();
    };
    tr.append(del);
    if(pos === 'start') {
      this.container.prepend(tr);
    } else {
      this.container.append(tr);
    }

  }
}