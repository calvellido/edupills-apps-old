import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

/*
  Generated class for the UserPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'build/pages/user/user.html',

})
export class UserPage {

	user: any;

	constructor(private alertCtrl: AlertController, private navCtrl: NavController) {

		this.user = {
			username: 'Rita the Singer',
			usermail: 'iguana@gmail.com',
			profilePic: 'img/iguana.jpg',
			about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

			setUsername: function(newUsername) {
				this.user.username = newUsername;
			},

			getUsername: function() {
				return this.user.username;
			}

		}

	}

	// Present an alert with the current username populated
	// clicking OK will update the username and display it
	// clicking Cancel will close the alert and do nothing
	changeUsername() {
		let alert = this.alertCtrl.create({
			title: 'Change Username',
			buttons: [
				'Cancel'
			]
		});
		alert.addInput({
			name: 'username',
			value: this.user.username,
			placeholder: 'username'
		});
		alert.addButton({
			text: 'Ok',
			handler: data => {
				this.user.setUsername(data.username);
			}
		});

		alert.present();
	}

	changePassword() {
		console.log('Clicked to change password');
	}

	// TODO*
	changeMail() {
		console.log('Clicked to change user mail');
	}

}
