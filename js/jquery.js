$(document).ready(function() {

    //jBox is a jQuery plugin that makes it easy to create
    //customizable tooltips, modal windows, image galleries and more
    //https://stephanwagner.me/jBox


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
        attach: '#desktopIcon1',
        width: 220,
        title: 'A textbox',
        overlay: false,
        content: ' <div class="textbox" contenteditable="true">type here...</div>',
        draggable: 'title',
        repositionOnOpen: false,
        repositionOnContent: false
    });

    new jBox('Modal', {
        attach: '#desktopIcon2',
        width: 220,
        title: 'A textbox',
        overlay: false,
        content: ';ksdfuhg',
        draggable: 'title',
        repositionOnOpen: false,
        repositionOnContent: false
    });


    new jBox('Tooltip', {
        attach: '#startbutton',
        width: 220,
        title: '<h5><b>Start</b></h5>',
        overlay: false,
        content: '<ul class="startLinks"><li><a href="matthieufelker.io">Matthieufelker.io</a></li><li><a href="github.com/matthieu-ui">GitHub</a></li><li><a href="projectpage.html">Home</a></li></ul>',
        draggable: false,
        repositionOnOpen: true,
        repositionOnContent: true,
        trigger: 'click'


    });

    new jBox('Tooltip', {
        attach: '#taskbutton',
        width: 220,
        title: 'Widgets',
        overlay: false,
        content: '<ul class="startLinks"><li><a href="jquerywidgets.html">Examples</a></li></ul>',
        draggable: false,
        repositionOnOpen: true,
        repositionOnContent: true,
        trigger: 'click'


    });




});