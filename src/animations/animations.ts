import { state, style, transition, trigger, animate } from "@angular/animations";

export const scrollAnimation = [
    trigger('animation', [
        state('frame0', style({})),
        state('frame1', style({ width: '50vw', 
        height: '30%',
        'border-top-right-radius': '100%', 
        'border-right-color': '#FFC526',
         })),
        // state('frame2', style({  'border-top-right-radius': '100%', 'border-right-color': '#FFC526'})),
        transition('* => *', animate('0.5s'))
    ])
];