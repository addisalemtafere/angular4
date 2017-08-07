import {Directive, HostBinding, HostListener} from '@angular/core';
/**
 * Created by addis on 8/21/17.
 */
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{

  @HostBinding('class.open') isOpen= false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

}
