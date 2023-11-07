import { state, style, transition, trigger, animate } from "@angular/animations";

export const scrollAnimation = [
    trigger('animationLine', [
        state('frame0', style({})),
        state('frame1', style({ width: '50%', 
        height: '30%',
        'border-top-right-radius': '100%', 
        'border-right-color': '#FFC526',
         })),
        // state('frame2', style({  'border-top-right-radius': '100%', 'border-right-color': '#FFC526'})),
        transition('* => *', animate('0.3s'))
    ])
];

export const stainAnimation = [
    trigger('animationStain', [
        state('frame0', style({})),
        state('frame1', style({
            transform: 'translateY(-80%)',
        })),
        state('frame2', style({
            'transform': 'translateY(-60%)'
        })),
        state('frame3', style({
            'transform': 'translateY(-40%)'
        })),
        state('frame4', style({
            'transform': 'translateY(-20%)'
        })),
        state('frame5', style({
            'transform': 'translateY(0%)'
        })),
        transition('* => *', animate('1s'))
    ])
];