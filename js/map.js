ymaps.ready(function(){
    var map = new ymaps.Map("custom_map", {
            center: [58.560953813155045,31.310069499999994],
            zoom: 5                  
        });
map.behaviors       
        .disable('scrollZoom')
        .disable('Zoom'); 
        var yakut = new ymaps.Placemark(
        [62.038987561230755,129.73935549999993], {
           hintContent: 'Якутск',
        },
        {
            iconImageHref: 'img/favicon.png', 
            iconImageSize: [70, 40],           
            iconLayout: 'default#image'
        }
    );
     var spb = new ymaps.Placemark(
        [59.916450564209136,30.34986949999995], {
            hintContent: 'Санкт-Петербург',
        },
        {
            iconImageHref: 'img/favicon.png', 
            iconImageSize: [80, 45],           
            iconLayout: 'default#image'
        }
    );
     var msk = new ymaps.Placemark(
        [55.71253256901457,37.69173749999998], {
            hintContent: 'Москва',
        },
        {
            iconImageHref: 'img/favicon.png', 
            iconImageSize: [80, 45],          
            iconLayout: 'default#image'
        }
    ); 
     var msk2 = new ymaps.Placemark(
        [55.77697806897162,37.54920149999997], {
            hintContent: 'Москва',
        },
        {
            iconImageHref: 'img/favicon.png', 
            iconImageSize: [80, 45],           
            iconLayout: 'default#image'
        }
    );  

    map.geoObjects
    .add(yakut)
    .add(spb)
    .add(msk2)
    .add(msk);
});






