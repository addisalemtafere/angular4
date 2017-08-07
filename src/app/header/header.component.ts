/**
 * Created by addis on 7/20/17.
 */
import {Component, EventEmitter, Output} from '@angular/core';
import {Response} from '@angular/http';

import {DataStorageService} from '../Shared/data-storage.service';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";


@Component({
  templateUrl: 'header.component.html',
  selector: 'app-header'

})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorage: DataStorageService,
              private authService: AuthService,
              private router: Router) {

  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onLogOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onSaveData() {
    this.dataStorage.storeRecipe()
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  onFetchData() {
    this.dataStorage.getRecipe();
  }

}
