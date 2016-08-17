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

    items: Array<{ title: string, note: string, ago: number, author: string, completed: number}>;

    constructor(private navCtrl: NavController, private navParams: NavParams) {

        this.items = [];
        for (let i = 1; i < 201; i++) {
            this.items.push({
                title: 'Conoce las licencias Creative Commons para proteger y compartir tus creaciones ' + i,
                note: 'Short description for PILL #' + i,
                ago: 5,
                author: 'Author',
                completed: 1
            });
        }

    }

    itemTapped(event, item) {
        this.navCtrl.push(PillDetailsPage, {
            selectedItem: item
        });
    }

}
