import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  showloader 
  showcontent

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.showloader = 'grid';
    this.showcontent = "none"
    this.spinner.show();
    // alert("R")
    setTimeout(() => {
      this.showloader = 'none'
      this.showcontent = ""
        this.spinner.hide();
    }, 3000);
  }

}
