(function() {
    var _id="times";
     var  screen_width= window.screen.availWidth;
     

    while(document.getElementById("timer"+_id))_id=_id+"0";
    document.write("<div id='timer"+_id+"' style='min-width:452px;height:128px;'></div>");
    var _t=document.createElement("script");
    _t.src="http://megatimer.ru/timer/timer.min.js";
    var _f=function(_k) {

         if(screen_width<768 + "px"){            
        var l=new MegaTimer(_id, {
            "view":[0, 1, 1, 1], "type": {
                "currentType":"3", "params": {
                    "weekdays": [1, 1, 1, 1, 1, 1, 1], "usertime": false, "time": "20:00", "tz": -180, "hours": "24", "minutes": "00"
                }
            }
            , "design": {
                "type":"circle", "params": {
                    "width":"3", "radius":"49", "line":"solid", "line-color":"#e91231", "background":"solid", "background-color":"transparent", "direction":"direct", "number-font-family": {
                        "family": "Bebas Neue Bold", "link": " <link href='http://allfont.ru/allfont.css?fonts=bebas-neue'rel='stylesheet'type='text/css' />"
                    }
                    , "number-font-size":"20", "number-font-color":"#ffffff", "separator-margin":"17", "separator-on":false, "separator-text":":", "text-on":true, "text-font-family": {
                        "family": "Bebas Neue Bold", "link": "<link href='http://allfont.ru/allfont.css?fonts=bebas-neue'rel='stylesheet'type='text/css' />"
                    }
                    , "text-font-size":"16", "text-font-color":"#ffffff"
                }
            }
            , "designId":9, "theme":"black", "width":72, "height":72
        }
        );
         } 
         else{
        var l=new MegaTimer(_id, {
            "view":[0, 1, 1, 1], "type": {
                "currentType":"3", "params": {
                    "weekdays": [1, 1, 1, 1, 1, 1, 1], "usertime": false, "time": "20:00", "tz": -180, "hours": "24", "minutes": "00"
                }
            }
            , "design": {
                "type":"circle", "params": {
                    "width":"5", "radius":"79", "line":"solid", "line-color":"#e91231", "background":"solid", "background-color":"transparent", "direction":"direct", "number-font-family": {
                        "family": "Bebas Neue Bold", "link": " <link href='http://allfont.ru/allfont.css?fonts=bebas-neue'rel='stylesheet'type='text/css' />"
                    }
                    , "number-font-size":"72", "number-font-color":"#ffffff", "separator-margin":"17", "separator-on":false, "separator-text":":", "text-on":true, "text-font-family": {
                        "family": "Bebas Neue Bold", "link": "<link href='http://allfont.ru/allfont.css?fonts=bebas-neue'rel='stylesheet'type='text/css' />"
                    }
                    , "text-font-size":"22", "text-font-color":"#ffffff"
                }
            }
            , "designId":9, "theme":"black", "width":452, "height":128
        }
        );
         }
        
        if(_k!=null)l.run();
    }
    ;
    _t.onload=_f;
    _t.onreadystatechange=function() {
        if(_t.readyState=="loaded")_f(1);
    }
    ;
    var _h=document.head||document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}

).call(this);
 