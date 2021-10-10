import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuotes:Quote[] = [
    new Quote(1, 'Leadership Quote', 'You must be the change you wish to see in the world','Mahatma Gandhi',new Date(2021,9,11)),
    new Quote(2, 'Technology Quote', 'If you are trying to build a company, it is like baking a cake. All ingredients have to be in proportion','Elon Musk',new Date(2021,9,10)),
    
    

  ];
showAuthor(index){
  this.myQuotes[index].moreDetails = !this.myQuotes[index].moreDetails;
}
removeQuote(toDelete,index){
  if(toDelete){
    let confirmDelete = confirm('Are you sure you want to delete this quote?');

  if(confirmDelete){
    this.myQuotes.splice(index,1);
  }
}
}

addNewQuote(myQuote){
  let myQuoteLength = this.myQuotes.length;
  myQuote.id = myQuoteLength + 1;
  myQuote.datePosted = new Date();
  this.myQuotes.push(myQuote)
}
  constructor() { }

  ngOnInit() {
  }

}
