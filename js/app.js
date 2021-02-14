/* eslint-disable no-unused-vars */
'use strict';

let hours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// eslint-disable-next-line no-unused-vars
let seatl = {
  location: 'seatl',
  min:23,
  max:65,
  avg_cookies:6.3,
  numberOFcustumer:[],
  total:0,
  calculate:function(){
    for(let i=0;i<hours.length;i++){
      this.numberOFcustumer.push(Math.ceil( randomValue(this.min,this.max) * this.avg_cookies));
      this.total+=this.numberOFcustumer[i];
    }
    //console.log(this.total);
  },
  render:function() {
    let myshop=document.createElement('div');
    let h1=document.createElement('h1');
    let div= document.getElementById('cookies');
    let ulEl = document.createElement('ul');

    h1.textContent=this.location;
    console.log(h1);
    myshop.appendChild(h1);
    // each time im creating a list item
    myshop.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
    }
    div.appendChild(myshop);
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`total is : ${this.total}`;
  }


};
seatl.calculate();
seatl.render();


let tokyo ={
  location:'Tokyo',
  min:3,
  max:24,
  avg_cookies:1.2,
  total:0,
  numberOFcustumer:[],
  calculate:function(){
    for(let i=0;i<hours.length;i++){
      this.numberOFcustumer.push(Math.ceil( randomValue(this.min,this.max) * this.avg_cookies));
      this.total+=this.numberOFcustumer[i];
    }
  },
  render:function() {
    let myshop=document.createElement('div');
    let h1=document.createElement('h1');
    let div= document.getElementById('cookies');
    let ulEl = document.createElement('ul');

    h1.textContent=this.location;
    console.log(h1);
    myshop.appendChild(h1);
    // each time im creating a list item
    myshop.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
    }
    div.appendChild(myshop);
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`total is : ${this.total}`;
  }
};
tokyo.calculate();
tokyo.render();



let dubai ={
  location:'Dubai',
  min:11,
  max:38,
  avg_cookies:3.7,
  total:0,
  numberOFcustumer:[],
  calculate:function(){
    for(let i=0;i<hours.length;i++){
      this.numberOFcustumer.push(Math.ceil( randomValue(this.min,this.max) * this.avg_cookies));
      this.total+=this.numberOFcustumer[i];
    }},
  render:function() {
    let myshop=document.createElement('div');
    let h1=document.createElement('h1');
    let div= document.getElementById('cookies');
    let ulEl = document.createElement('ul');

    h1.textContent=this.location;
    console.log(h1);
    myshop.appendChild(h1);
    // each time im creating a list item
    myshop.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
    }
    div.appendChild(myshop);
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`total is : ${this.total}`;
  }

};

dubai.calculate();
dubai.render();


let paris ={
  location:'paris',
  min:20,
  max:38,
  avg_cookies:2.3,
  total:0,
  numberOFcustumer:[],
  calculate:function(){
    for(let i=0;i<hours.length;i++){
      this.numberOFcustumer.push(Math.ceil( randomValue(this.min,this.max) * this.avg_cookies));
      this.total+=this.numberOFcustumer[i];
    }},
  render:function() {
    let myshop=document.createElement('div');
    let h1=document.createElement('h1');
    let div= document.getElementById('cookies');
    let ulEl = document.createElement('ul');

    h1.textContent=this.location;
    console.log(h1);
    myshop.appendChild(h1);
    // each time im creating a list item
    myshop.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
    }
    div.appendChild(myshop);
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`total is : ${this.total}`;
  }


};


paris.calculate();
paris.render();



// eslint-disable-next-line no-unused-vars
let lima ={
  location:'lima',
  min:2,
  max:16,

  avg_cookies:4.6,
  numberOFcustumer:[],
  total:0,
  calculate:function(){
    for(let i=0;i<hours.length;i++){
      this.numberOFcustumer.push(Math.ceil( randomValue(this.min,this.max) * this.avg_cookies));
      this.total+=this.numberOFcustumer[i];
    }},
  render:function() {
    let myshop=document.createElement('div');
    let h1=document.createElement('h1');
    let div= document.getElementById('cookies');
    let ulEl = document.createElement('ul');

    h1.textContent=this.location;
    console.log(h1);
    myshop.appendChild(h1);
    // each time im creating a list item
    myshop.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
    }
    div.appendChild(myshop);
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`total is : ${this.total}`;
  }


};


lima.calculate();
lima.render();


// eslint-disable-next-line no-unused-vars

/*function render(){
  let ulEl = document.createElement('ul');
  // each time im creating a list item
  let liEl;
  for(let i = 0 ; i <hours.length; i++)
  {
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = hours[i];
  }}*/
