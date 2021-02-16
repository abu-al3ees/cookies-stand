/* eslint-disable no-unused-vars */
'use strict';

let hours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
let globalArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let div=document.getElementById('cookies');
let table = document.createElement('table');
div.appendChild(table);
function hoursArray(){
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let theader=document.createElement('th');
  tr.appendChild(theader);
  theader.textContent=' ';
  let th;
  for(let i=0;i<hours.length;i++){
    th=document.createElement('th');
    tr.appendChild(th);
    th.textContent =hours[i];

  }
  let total=document.createElement('th');
  tr.appendChild(total);
  total.textContent='Daily Location Total ';
}
hoursArray();

function Citys(location,min,max,avg_cookies){
// eslint-disable-next-line indent
this.location=location;
  this.min=min;
  this.max=max;
  this.avg_cookies=avg_cookies;
  this.numberOFcustumer=[];
  this.total=0;

}

Citys.prototype.calculate=function(){

  for(let i=0;i<hours.length;i++){
    this.numberOFcustumer.push(Math.ceil( randomValue(this.min,this.max) * this.avg_cookies));
    this.total+=this.numberOFcustumer[i];
    globalArray[i]+=this.numberOFcustumer[i];
  }
};
Citys.prototype.render=function(){
  let tr1 = document.createElement('tr');
  table.appendChild(tr1);
  let tdFORloca=document.createElement('td');
  tr1.appendChild(tdFORloca);
  tdFORloca.textContent=this.location;
  let td;
  for(let i=0;i<this.numberOFcustumer.length;i++){
    td=document.createElement('td');
    tr1.appendChild(td);
    td.textContent =this.numberOFcustumer[i];

  }
  let tdFortotal=document.createElement('td');
  tr1.appendChild(tdFortotal);
  tdFortotal.textContent=this.total;
};
function footerRow(){
  let megaTotal=0;
  let tr2=document.createElement('tr');
  table.appendChild(tr2);
  let thTotal=document.createElement('th');
  tr2.appendChild(thTotal);
  thTotal.textContent='Totals';
  let td;
  for(let i=0;i<globalArray.length;i++){
    td=document.createElement('td');
    tr2.appendChild(td);
    td.textContent =globalArray[i];
    megaTotal+=globalArray[i];

  }
  let megatotal=document.createElement('td');
  tr2.appendChild(megatotal);
  megatotal.textContent=megaTotal;
}
// eslint-disable-next-line no-undef
let seatle = new Citys('seatle',23,65,6.3);
seatle.calculate();
seatle.render();
let tokyo = new Citys('tokyo',3,24,1.2);
tokyo.calculate();
tokyo.render();

let dubai  = new Citys('dubai',11,38,3.7);
dubai.calculate();
dubai.render();

let paris  = new Citys('paris',20,38,2.3);
paris.calculate();
paris.render();

let lima  = new Citys('lima',2,16,4.6);
lima.calculate();
lima.render();

footerRow();
