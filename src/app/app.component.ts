import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    cards = [{
        title: 'Card 1',
        content: 'Bla jajdlk faslkjklfdas jklds aljjlkafs kasfdj kasd jlkjlkfda s'
    }, {
        title: 'Card 2',
        content: 'afdkljj lljalsjfd jaklds adklfs jkldasf jljlkad slalasdfjk '
    }, {
        title: 'Card 3',
        content: 'ajlkdsf jlkadsjkl jklad sjlkjaklf jajd jdf jkl ajlkj lkajk fldsjlkdsfa jjlkasf '
    }, ];

}
