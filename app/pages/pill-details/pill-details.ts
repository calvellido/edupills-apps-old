import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PillDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'build/pages/pill-details/pill-details.html',
})
export class PillDetailsPage {

	item: any;

	constructor(private navCtrl: NavController, private navParams: NavParams) {

		// If we navigated to this page, we will have an item available as a nav param
		this.item = navParams.get('selectedItem');

	}

}
