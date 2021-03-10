import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  kullanici = {
    ad: 'Ali',
    soyad: 'Yılmaz'
  };

  mesaj = '';

  goster() {
    alert('Merhaba Dünya');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
