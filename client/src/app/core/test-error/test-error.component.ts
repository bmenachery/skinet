import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  get404Error() {
    this.http.get(this.baseurl + 'products/42').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get500Error() {
    this.http.get(this.baseurl + 'buggy/servererror').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get400Error() {
    this.http.get(this.baseurl + 'buggy/badrequest').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get400ValidationError() {
    this.http.get(this.baseurl + 'products/fourtytwo').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
