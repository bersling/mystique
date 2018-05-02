import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    cards = [{
        title: 'Dark',
        content: 'Dark Themes are the new black.<br/>Does that makes sense?',
        icon: '/assets/002-witch.svg'
    }, {
        title: 'Flexbox',
        content: 'A touch of magic.<br/> Flexbox for 1D Layouts.',
        icon: '/assets/003-magic-wand.svg'
    }, {
        title: 'CSS Grid',
        content: 'Be a courageous.<br/>Adopt CSS Grid.',
        icon: '/assets/001-ghost.svg'
    } ];

}
