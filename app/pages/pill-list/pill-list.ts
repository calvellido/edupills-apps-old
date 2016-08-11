import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PillDetailsPage} from '../pill-details/pill-details';

/*
  Generated class for the PillListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/pill-list/pill-list.html',
})
export class PillListPage {

    items: Array<{ title: string, note: string }>;

    constructor(private navCtrl: NavController, private navParams: NavParams) {

        this.items = [];
        for (let i = 1; i < 201; i++) {
            this.items.push({
                title: 'Pill ' + i,
                note: 'Short description for pill #' + i
            });
        }

    }

    itemTapped(event, item) {
        this.navCtrl.push(PillDetailsPage, {
            selectedItem: item
        });
    }

}
