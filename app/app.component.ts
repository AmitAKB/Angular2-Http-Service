import { Component } from '@angular/core';
import { UserServices } from './userServices.component';

@Component({
  selector: 'my-app',
  template: `<user-list></user-list><user-details></user-details>`,
  providers: [UserServices]
})
export class AppComponent { 
	
}
