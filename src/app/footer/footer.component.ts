import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // When the user clicks on the button, scroll to the top of the document
topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

}
