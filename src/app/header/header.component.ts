import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

// userdefined event creation
//@Output()- to share data from child to parent

   @Output() onMenuBtnClick = new EventEmitter()


  menubtnClicked(){
    // to occur an userdefined event
   this.onMenuBtnClick.emit()
  //  to rezise button
  setTimeout(() =>{
    window.dispatchEvent(
      new Event('resize')
    )
  },100);
  }
}
