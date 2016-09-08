import {Component, ViewChild} from "@angular/core";
import {Platform, MenuController, Nav} from "ionic-angular";
import {Splashscreen, StatusBar} from "ionic-native";
import {HomePage} from "./pages/home/home";
import {PillListPage} from "./pages/pill-list/pill-list";
import {UserPage} from "./pages/user/user";


@Component({
    templateUrl: 'build/app.html'
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;

    // make HelloIonicPage the root (or first) page
    rootPage: any = PillListPage;
    pages: Array<{ title: string, component: any }>;

    constructor(private platform: Platform, private menu: MenuController) {
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Highlighted courses', component: PillListPage },
            { title: 'All courses', component: PillListPage },
            { title: 'User', component: UserPage }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }
}

