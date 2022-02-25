$(document).ready(function() {


    // Drag with title

    new jBox('Modal', {
        attach: '#desktopIcon',
        width: 220,
        title: 'Matthieu-UI Version 2022 v1.0',
        overlay: false,
        content: "I'm baby polaroid crucifix banjo pork belly. Hell of lyft gluten-free roof party woke street art austin PBR&B tbh prism pop-up cold-pressed. Normcore dreamcatcher pabst irony pug. DIY chillwave la croix, try-hard irony tbh put a bird on it snackwave.",
        draggable: 'title',
        repositionOnOpen: false,
        repositionOnContent: false
    });

    new jBox('Modal', {
        attach: '#taskbutton',
        width: 220,
        title: 'start',
        overlay: false,
        content: 'list links',
        draggable: false,
        repositionOnOpen: false,
        repositionOnContent: false,
        offset: { x: -200, y: 280 }

    });
});