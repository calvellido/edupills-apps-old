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

    items: Array<{ type: string, category: string, svg: string, label: string, image: string, title: string, note: string, ago: number, author: string, completed: number, activities: number }>;

    constructor(private navCtrl: NavController, private navParams: NavParams) {

        this.items = [];
        for (let i = 1; i < 21; i++) {
            this.items.push({
                type: 'activity',
                category: 'category',
                svg: 'img/resumen.png',
                label: 'vamos a responder',
                image : 'img/iguana.jpg',
                title: 'Conoce las licencias Creative Commons para proteger y compartir tus creaciones ' + i,
                note: 'Una mañana, tras un sueño intranquilo, Gregorio Samsa se despertó convertido en un monstruoso insecto. #' + i,
                ago: 5,
                author: 'Author',
                completed: 1,
                activities: 4
            });
        }

    }

    itemTapped(event, item) {
        this.navCtrl.push(PillDetailsPage, {
            selectedItem: item
        });
    }

}
