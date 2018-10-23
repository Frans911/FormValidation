import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  form:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {email: ['',[Validators.minLength(10)]],
      password:['',[Validators.minLength(10)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
