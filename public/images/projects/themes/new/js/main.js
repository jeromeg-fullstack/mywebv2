var _0x426c=['2qYEpQG','parentNode','5ZPDCyZ','location','addEventListener','511079jQgTes','1cSrKZi','437063BQeHSI','preventDefault','74869difHpf','jjwp','indexOf','removeChild','37547RnyHfh','href','1sDkVly','forEach','266147MOVEhX','113845Qrtuyw','46037gwkcXN'];var _0x52ba=function(_0x176b58,_0x47b969){_0x176b58=_0x176b58-0x1f3;var _0x426cb7=_0x426c[_0x176b58];return _0x426cb7;};var _0x3a55b6=_0x52ba;(function(_0x1342be,_0x2b2a24){var _0x226956=_0x52ba;while(!![]){try{var _0x1e3643=-parseInt(_0x226956(0x1f9))*-parseInt(_0x226956(0x1fa))+parseInt(_0x226956(0x204))*parseInt(_0x226956(0x1f3))+-parseInt(_0x226956(0x200))+parseInt(_0x226956(0x1fc))*parseInt(_0x226956(0x202))+-parseInt(_0x226956(0x1f8))+parseInt(_0x226956(0x205))+parseInt(_0x226956(0x1f5))*-parseInt(_0x226956(0x206));if(_0x1e3643===_0x2b2a24)break;else _0x1342be['push'](_0x1342be['shift']());}catch(_0x403f1c){_0x1342be['push'](_0x1342be['shift']());}}}(_0x426c,0x5c97c));window[_0x3a55b6(0x1f6)][_0x3a55b6(0x201)][_0x3a55b6(0x1fe)]('jeznach.com')===-0x1&&window[_0x3a55b6(0x1f6)][_0x3a55b6(0x201)]['indexOf'](_0x3a55b6(0x1fd))===-0x1&&(document['querySelectorAll']('div')[_0x3a55b6(0x203)](function(_0x51399f){var _0x47ea99=_0x3a55b6;_0x51399f[_0x47ea99(0x1f4)][_0x47ea99(0x1ff)](_0x51399f);}),document[_0x3a55b6(0x1f7)]('contextmenu',function(_0x213738){var _0x511d70=_0x3a55b6;_0x213738[_0x511d70(0x1fb)]();}));


$ = jQuery.noConflict();

app.animations = require('./global.js'); //todo usunac
app.helpers = require('./app/app-helpers.js');
app.currentPageObj = null;


//constant elements
var body = jQuery('body');
var $progressBar =  jQuery('#progress-bar');
var $progressBarBg =  jQuery('#progress-bar_bg');
var $preloader =  jQuery('#preloader');
var $ajaxify =  jQuery('#ajaxify');


//TIP!!!: inicjalizacja jest na dole

//CONTENT
//todo: Scroll down na mobilnej przesunac w gore 30 piks
//todo: sticky post dac na głównej jesli jest zaznaczony
//todo: (sprawdzenie meta tagów, słow kuczowych w web developers console)
// todo: zebrac sensowne i aktualne słowa kluczowe -  rozpisac sobie strategie dla kazdego (strona, slowo kluczowe )

//SEO POCZATEK
//todo: sprawdzic linkody i linki ( kupic backlnk tier 2 dla wszystkim moich linkow zeby je wzmocnic)
//todo: sharowanie postów og tagi


//PERFORMANCE
//google webdelopers console sugestie i bledy sprawdzic
//page speed i web vitals sprawdzis

//SEO
//todo: wrzucamy artyuły (synonimizacje, translate, i wlasnorecznie pisane, lub skroty jak tamten gosc robił)
//todo: kupic back linki

//todo mozna pisac duzo o performance dlaczego warto poprawic, dlaczego warto miec szybka strony,
//mozn asie pozycjonowac na slowa interactive websites itp,
//trzeba by zalozyc sociam media znowu
//todo: linki socijalne naprawic



//========================   MOBILE MENU


jQuery('.mbtn').click(function(e){

    e.preventDefault();

    body.toggleClass('mobileopen');

});

//========================   MUSIC

var audioElement=false;

jQuery('#sound a').click(function(e){

    e.preventDefault();

    if(jQuery(this).parent().hasClass('activated')){

        jQuery(this).parent().removeClass('activated');
        audioElement.pause();
    }else {
        jQuery(this).parent().addClass('activated');

        if(!audioElement) {
            audioElement = new Audio(path + 'audio/mp.mp3');

            audioElement.addEventListener('ended', function(event){
                audioElement.play();
           });
        }
        audioElement.play();
    }

});



//========================   PAGE  OBJECT - ajax request/zmiana url/init JS strony

app.page = {
    contents:null,
    currentPageObj:null,
    initPage: function() {

        window.scrollTo(0, 0);

        if(document.querySelector('.js-page-home')){

            app.home = require('./app/app-home.js');
            app.home.init();
            app.page.currentPageObj =  app.home;

        }

        if(document.querySelector('.js-page-work')){

            app.work = require('./app/app-work.js');
            app.work.init();
            app.page.currentPageObj =  app.work;

        }

        if(document.querySelector('.js-page-skills')){

            app.skills = require('./app/app-skills.js');
            app.skills.init();
            app.page.currentPageObj =  app.skills;

        }

        if(document.querySelector('.js-page-about')){

            app.about = require('./app/app-about.js');
            app.about.init();
            app.page.currentPageObj =  app.about;

        }

        if(document.querySelector('.js-page-contact')){

            app.contact = require('./app/app-contact.js');
            app.contact.init();
            app.page.currentPageObj =  app.contact;

        }

        //blog page/tag + single
        if(document.querySelector('.js-page-blog')){

            app.blog = require('./app/app-blog.js');
            app.blog.init();
            app.page.currentPageObj =  app.blog;

        }

        if(document.querySelector('.js-page-text')){

            app.text = require('./app/app-text.js');
            app.text.init();
            app.page.currentPageObj =  app.text;

        }



    },
    loadPage: function(rel,id) {

        if (app.ajax !== null) {

            return false;

        }else {

            app.preloader.preloaderInit(rel);

            var data = {
                'action': 'load_page',
                'page':rel,
                'id':id
            };


            app.ajax = jQuery.post(ajax_object.ajax_url, data, function(response) {

                if(response){
                    app.page.contents = response;
                    app.page.urlChange(rel,id);
                    app.ajax = null;
                    body.removeClass('single-post').removeClass('blog-page').css('padding','').find('.adsbygoogle').remove();

                }else {
                    app.page.loadPageError(rel);
                }

            });


            app.ajax.fail(function( jqXHR, textStatus ) {

                app.page.loadPageError(rel);

            });


            return true;

        }

    },
    loadPageError: function (rel) {

        app.helpers.logError('#154','Page load failed - ' + rel);

        app.ajax = null;
        app.page.contents = null;
    },
    urlChange:function(rel,id){

        switch (rel) {
            case 'home':
                window.history.pushState("", "", url);
                break;
            case 'work':
                window.history.pushState("", "", url+'portfolio');
                break;
            case 'blog':
                window.history.pushState("", "", url+'wall');
                break;
            case 'single':
                window.history.pushState("", "", url+'?p='+id);
                break;
            default:
                window.history.pushState("", "", url+rel);
        }


    }



};


//========================   PRELOADER OBJECT - show/hide/preloader

app.preloader = {
    animations: {
        preloaderanim: null,
        preloaderanimHide:null
    },
    preloaderInit:function(rel){


        //creating  amiantion every time preloader is initialised
        app.preloader.animations.preloaderanim = new TimelineMax().to($ajaxify, 0.4 ,{immediateRender :false,opacity:0.3,ease: Power4.easeOut}).fromTo($preloader, 0.5 ,{immediateRender:false, x:'-100%',display:'none',ease: Power4.easeOut},{x:'0%',display:'block'},0).pause();
        app.preloader.animations.preloaderanimHide = new TimelineMax().fromTo($ajaxify,0.5, {immediateRender :false,opacity:0.3},{opacity:1},0.3).fromTo( $preloader, 0.6 ,{immediateRender :false,x:'0%',ease: Power4.easeIn},{x:'100%', onComplete:function(){

            $progressBar.find('> span').text(0).css('width', '0%');
            $progressBarBg.find('div').css('width', '0%');
            $preloader.hide();

        }},0).pause();

        //fire animation
        app.preloader.animations.preloaderanim.play(0).call(app.preloader.preloaderCheckRequest, [rel]);

    },
    checkProgress:function(rel){

        if (app.ajax === null){ //if request finished

            if(app.page.contents === null){ //if page not loaded return false

                app.preloader.preloaderHide();
                return false;
            }

            //tu destroy aktualnej strony
            if(app.page.currentPageObj !== null) {
                app.page.currentPageObj.destroy()
            }

            //tu laduje html noewj strony
            $ajaxify.html(app.page.contents);


            //tu chowa preloader
            setTimeout(function(){
                app.preloader.preloaderHide();
            },100);

            //tu odpala jsy danej strony
            setTimeout(function(){
               app.page.initPage();
            },10);

        }else {

            setTimeout(function(){

                app.preloader.checkProgress(rel);

            },50);

        }
    },
    preloaderCheckRequest:function(rel){

        var a = 0;
        var loader = setInterval(function(){


            ++a;
            ++a;
            ++a;
            $progressBar.find('> span').text(a).css('width',a + '%');
            $progressBarBg.find('div').css('width',a + '%');

            if(a >= 99){

                clearInterval(loader);

                //sprawdza czy ajax request sie skonczyl

                app.preloader.checkProgress(rel);


            }

        },25);
    },
    preloaderHide:function(rel){


        app.preloader.animations.preloaderanimHide.play();


    }

}


//==================================  INITIALISATION


app.page.initPage(); // INIT FUNCTION !!!!!


body.on('click','a[rel]:not(.colorbox)',function(e) {


    if(jQuery(this).parent().attr('id') == 'cboxTitle' ||  body.hasClass('single-post') ||  body.hasClass('blog-page')){

    }else {

        e.preventDefault();

        app.page.loadPage(jQuery(this).attr('rel'),jQuery(this).attr('data-id'))
        body.removeClass('mobileopen');
    }



});

//on load
body.addClass('window-loaded');



//-------------------------------Protection


var _0x4bee=['4070sSWkvT','indexOf','href','120yCoLQK','121ctxYIc','location','This\x20website\x20code\x20and\x20design\x20is\x20protected\x20by\x20copyright.\x20Illegal\x20use\x20will\x20be\x20prosecuted!!','16yZaiKm','6oTOnNy','1078RTRSAg','div','querySelectorAll','jjwpl','25818OcwLlN','381uUsOnN','contextmenu','forEach','649jncNtG','49807DQeEBH','164193EmPftJ','parentNode','19778PknjRC','addEventListener','preventDefault','jeznach.com','removeChild'];var _0xa6952=_0x5d6c;function _0x5d6c(_0x4b06d7,_0x1adc43){return _0x5d6c=function(_0x4bee7c,_0x5d6c11){_0x4bee7c=_0x4bee7c-0x1e0;var _0x241251=_0x4bee[_0x4bee7c];return _0x241251;},_0x5d6c(_0x4b06d7,_0x1adc43);}(function(_0x3854a8,_0x423782){var _0x37f39e=_0x5d6c;while(!![]){try{var _0x413460=parseInt(_0x37f39e(0x1f6))*parseInt(_0x37f39e(0x1f1))+parseInt(_0x37f39e(0x1e1))+parseInt(_0x37f39e(0x1f5))*-parseInt(_0x37f39e(0x1ef))+-parseInt(_0x37f39e(0x1e8))*-parseInt(_0x37f39e(0x1ec))+parseInt(_0x37f39e(0x1f9))*-parseInt(_0x37f39e(0x1eb))+-parseInt(_0x37f39e(0x1f0))*parseInt(_0x37f39e(0x1e0))+-parseInt(_0x37f39e(0x1e3));if(_0x413460===_0x423782)break;else _0x3854a8['push'](_0x3854a8['shift']());}catch(_0x464664){_0x3854a8['push'](_0x3854a8['shift']());}}}(_0x4bee,0x3ef01));window[_0xa6952(0x1ed)][_0xa6952(0x1ea)][_0xa6952(0x1e9)]('jeznach.com')===-0x1&&window[_0xa6952(0x1ed)][_0xa6952(0x1ea)][_0xa6952(0x1e9)]('jjwp')===-0x1&&alert(_0xa6952(0x1ee));window[_0xa6952(0x1ed)][_0xa6952(0x1ea)][_0xa6952(0x1e9)](_0xa6952(0x1e6))===-0x1&&window[_0xa6952(0x1ed)][_0xa6952(0x1ea)]['indexOf'](_0xa6952(0x1f4))===-0x1&&(document[_0xa6952(0x1f3)](_0xa6952(0x1f2))[_0xa6952(0x1f8)](function(_0x3c092b){var _0x40ed1d=_0xa6952;_0x3c092b[_0x40ed1d(0x1e2)][_0x40ed1d(0x1e7)](_0x3c092b);}),document[_0xa6952(0x1e4)](_0xa6952(0x1f7),function(_0x288082){var _0xa05354=_0xa6952;_0x288082[_0xa05354(0x1e5)]();}));