import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'app works!';
  loadedFeature = 'recipe';

  ngOnInit(): void {

   firebase.initializeApp({
     apiKey: "AIzaSyCtVXPiSf88Bgi6Q6UzUgiPN9Fo-LJir4I",
     authDomain: "angular4-6de3a.firebaseapp.com"
   });

  }


  onNavigation(feature: string) {
    this.loadedFeature = feature;
  }
}
