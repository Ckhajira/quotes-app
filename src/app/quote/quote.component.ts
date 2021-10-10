import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  defaultQuotes: Quote[] = [
    new Quote(1, "Energy quote", "We are the champions", "Freddy Mercury", new Date(2021, 10, undefined, 16, 44
    )),
    new Quote(1, "Inspirational quote", "Yes we can", "Barack Obama", new Date(2021, 10, undefined, 14, 44
    )),
    new Quote(1, "Political quote", "We will fight on land, in the sea and on air", "Churchill", new Date(2021, 10, undefined, 18, 44
    ))
  ];

  showAuthor(index){
    this.defaultQuotes[index].moreDetails = !this.defaultQuotes[index].moreDetails;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
