var props_sms_script_is_running = false;
var props_sms_gtm_is_init = false;

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WP9SX2H');

var sc_jxos = document.createElement('script');sc_jxos.type = 'text/javascript';
sc_jxos.src = 'https://scripts.jixie.media/onescript/Me513gx2Hc/jx-me178513SB2d3.min.js';
sc_jxos.async = true;
document.head.appendChild(sc_jxos);

var script_gtm = document.createElement('noscript');
script_gtm.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WP9SX2H"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

var script_tag = document.createElement('script');script_tag.type = 'text/javascript';
script_tag.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
script_tag.async = true;

var stylesticky = document.createElement("style");
stylesticky.innerHTML = 
'.footer_sticky{'+
'   width:100%;'+
'   position:fixed;'+
'   bottom:0;left: 0;'+
'   z-index:1000;'+
'   background:white;'+
'   text-align:center;'+
'   box-shadow: rgb(17 58 102 / 35%) -2px -2px 2px 0px;'+
' }'+
' .close_sticky{'+
'   display: inline-block;'+
'   cursor: pointer;'+
'   color: black;'+
'   padding: 2px;'+
'   padding-left: 6px;'+
'   z-index: 9999;'+
'   font-family: Arial;'+
'   font-size: 12px;'+
'   right: 0px;'+
'   position: absolute;'+
'   top: -18px;'+
'   line-height: 20px;'+
'   height: 20px;'+
'   width: 20px;'+
'   box-shadow: rgba(17, 58, 102, 0.35) -2px -2px 2px 0px;'+
'   border-radius: 50% 0px 0px;'+
'   background-color: #fff;'+
' }'+
'.footer_stickyexp{'+
'   width:fit-content;'+
'   position:fixed;'+
'   bottom:0;left: 50%;'+
'   transform: translate(-50%);'+
'   z-index:1000;'+
'   background:white;'+
'   text-align:center;'+
'   box-shadow: rgb(17 58 102 / 35%) -2px -2px 2px 0px;'+
' }'+
' .close_stickyexp{'+
'   display: inline-block;'+
'   cursor: pointer;'+
'   color: black;'+
'   padding: 2px;'+
'   padding-left: 6px;'+
'   z-index: 9999;'+
'   font-family: Arial;'+
'   font-size: 12px;'+
'   right: 0px;'+
'   position: absolute;'+
'   top: -18px;'+
'   line-height: 20px;'+
'   height: 20px;'+
'   width: 20px;'+
'   box-shadow: rgba(17, 58, 102, 0.35) -2px -2px 2px 0px;'+
'   border-radius: 50% 0px 0px;'+
'   background-color: #fff;'+
' }';

var dv_l = document.createElement("div");
dv_l.id="div-gpt-ad-leaderboard";
dv_l.style="margin: 15px 0;";

var sc_l = document.createElement("script");
sc_l.innerHTML="googletag.cmd.push(function() { googletag.display('div-gpt-ad-leaderboard'); });";
dv_l.appendChild(sc_l);

var dv_m1 = document.createElement("div");
dv_m1.id="div-gpt-ad-multibanner1";
dv_m1.style="margin: 15px 0;";

var sc_m1 = document.createElement("script");
sc_m1.innerHTML="googletag.cmd.push(function() { googletag.display('div-gpt-ad-multibanner1'); });";
dv_m1.appendChild(sc_m1);

var dv_m2 = document.createElement("div");
dv_m2.id="div-gpt-ad-multibanner2";
dv_m2.style="margin: 15px 0;";

var sc_m2 = document.createElement("script");
sc_m2.innerHTML="googletag.cmd.push(function() { googletag.display('div-gpt-ad-multibanner2'); });";
dv_m2.appendChild(sc_m2);

var dv_m3 = document.createElement("div");
dv_m3.id="div-gpt-ad-multibanner3";
dv_m3.style="margin: 15px 0;";

var sc_m3 = document.createElement("script");
sc_m3.innerHTML="googletag.cmd.push(function() { googletag.display('div-gpt-ad-multibanner3'); });";
dv_m3.appendChild(sc_m3);

var ft_sticky = document.createElement("div");
ft_sticky.id = "footer_sticky";
ft_sticky.className = "footer_sticky";
ft_sticky.innerHTML = '<a onclick="closeAds()" class="close_sticky">X</a>';

var cls_sticky = document.createElement("script");
cls_sticky.innerHTML = 'function closeAds(){document.getElementById("footer_sticky").style.display = "none";}';

var dv_sticky = document.createElement("div");
dv_sticky.id="div-gpt-ad-sticky";
dv_sticky.style="margin: 15px 0;";

var sc_sticky = document.createElement("script");
sc_sticky.innerHTML= 
'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-sticky\'); });'+
'        setTimeout(function(){ '+
'          var a = document.getElementById(\'footer_sticky\').clientHeight;'+
'          if(a < 40)'+
'          document.getElementById(\'close_button\').style.display = "none";'+
'        }, 2500);';
dv_sticky.appendChild(sc_sticky);
ft_sticky.appendChild(cls_sticky);
ft_sticky.appendChild(dv_sticky);

var ft_stickyexp = document.createElement("div");
ft_stickyexp.id = "footer_stickyexp";
ft_stickyexp.className = "footer_stickyexp";
ft_stickyexp.innerHTML = '<a onclick="closeAdsExp()" class="close_stickyexp">V</a>';

var closeAdsExp = false;
var cls_stickyexp = document.createElement("script");
cls_stickyexp.innerHTML = `function closeAdsExp(){
      document.getElementById("footer_stickyexp").style.display = "none"; 
      var locsticky = document.getElementsByClassName("header")[0];
      var mapping2 = googletag.sizeMapping()
                              .addSize([1024, 0], [[970, 90]])
                              .addSize([800, 0], [[728, 90]])
                              .addSize([0, 0], [[320, 50]])
                              .build();
      googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/sticky', [[300,250],[320,50]], 'div-gpt-ad-sticky')
                 .defineSizeMapping(mapping2)
                 .addService(googletag.pubads());
      locsticky.after(ft_sticky);
    }
  `;

var dv_stickyexp = document.createElement("div");
dv_stickyexp.id="div-gpt-ad-stickyexp";
dv_stickyexp.style="margin: 15px 0;";

var sc_stickyexp = document.createElement("script");
sc_stickyexp.innerHTML= 
'googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-stickyexp\'); });'+
'        setTimeout(function(){ '+
'          var a = document.getElementById(\'footer_stickyexp\').clientHeight;'+
'          if(a < 40)'+
'          document.getElementById(\'close_stickyexp\').style.display = "none";'+
'        }, 2500);';
dv_stickyexp.appendChild(sc_stickyexp);
ft_stickyexp.appendChild(cls_stickyexp);
ft_stickyexp.appendChild(dv_stickyexp);

var dv_oop = document.createElement("div");
dv_oop.id="div-gpt-ad-oop";

var sc_oop = document.createElement("script");
sc_oop.innerHTML="googletag.cmd.push(function() { googletag.display('div-gpt-ad-oop'); });";
dv_oop.appendChild(sc_oop);

document.body.appendChild(script_gtm);

var cVisitorId = document.cookie.split(';').find(v => {
  return v.match('cProps');
});  

var cookieName = "cProps";
var cookieValue = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
var expirationTime = 2592000;
expirationTime = expirationTime * 1000;
var date = new Date(); 
var dateTimeNow = date.getTime(); 
date.setTime(dateTimeNow + expirationTime);
var date = date.toUTCString();
if(!cVisitorId){
  document.cookie = cookieName+"="+cookieValue+"; SameSite=None; Secure; expires="+date+"; path=/; domain=." + location.hostname.replace(/^www\./i, "");
}


setTimeout(()=>{



var PWT={}; //Initialize Namespace
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var gptRan = false;
PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT
    loadGPT();
};
var loadGPT = function() {
    // Check the gptRan flag
    if (!gptRan) {
        gptRan = true;
        var gads = document.createElement('script');
        var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
    }
};
// Failsafe to call gpt
setTimeout(loadGPT, 500);

(function() {
  var purl = window.location.href;
  var url = '//ads.pubmatic.com/AdServer/js/pwt/160902/8463';
  var profileVersionId = '';
  if(purl.indexOf('pwtv=')>0){
    var regexp = /pwtv=(.*?)(&|$)/g;
    var matches = regexp.exec(purl);
    if(matches.length >= 2 && matches[1].length > 0){
      profileVersionId = '/'+matches[1];
    }
  }
  var wtads = document.createElement('script');
  wtads.async = true;
  wtads.type = 'text/javascript';
  wtads.src = url+profileVersionId+'/pwt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(wtads, node);
})();




try {
    var http = new XMLHttpRequest();
    let lochref = window.location.href.match(/^.+?[^\/:](?=[?\/]|$)/)[0].replace("http://", "").replace("https://", "");
    var url_check_props = `https://propsid.b-cdn.net/json/${lochref}/blocklist.json`;
    http.responseType = 'json';
    http.open('GET', url_check_props, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    http.timeout = 1500;
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && (http.status == 200 || http.status == 201)) {
          try {
              let parsed = http.response;
              let x = window.location.href.replace(/https:\/\//, "");
              let find = parsed.find((e) => {return e == x});
  
              if (!find) {
                  propsInitAds();
              }
              
          } catch (e) {
              console.log("props-parsing error");
              console.log(e);
              propsInitAds();
          }
        } else if (http.readyState == 4){
          propsInitAds();
          throw new Error("Timeout");
        }
    }
    http.send();
} catch (e) {
    console.log("ERROR");
    console.log(e);
    propsInitAds();
}

},5000);

function propsInitAds() {
  var wv = navigator.userAgent.toLowerCase();
  if(wv.includes('topbuzz') || wv.includes('babe') || wv.includes('bacaberita') || wv.includes('kurio') || wv.includes('ucbrowser') || wv.includes('line')) {
    ;
  } else{
        // console.log("SCRIPT SMS IS RUNNING");
        if (props_sms_script_is_running) {
            return;
        }
        if (googletag && googletag.apiReady) {
            if (!googletag.pubadsReady) {

                if (props_sms_gtm_is_init) {
                    setTimeout(() => {
                        propsInitAds();
                    }, 250);
                    return;
                }
                props_sms_gtm_is_init = true;
                addDocumentToWebsite();
                    
                setTimeout(() => {
                    propsInitAds();
                }, 250);
                return;
            } else {
                props_sms_script_is_running = true;
                var mapping1 = googletag.sizeMapping()
                                    .addSize([1024, 0], [[970, 250], [970, 90], [728, 250], [728, 90]])
                                    .addSize([800, 0], [[728, 250], [728, 90]])
                                    .addSize([0, 0], [[336, 280], [300, 250]])
                                    .build();

                var mapping2 = googletag.sizeMapping()
                                          .addSize([1024, 0], [[970, 90]])
                                          .addSize([800, 0], [[728, 90]])
                                          .addSize([0, 0], [[320, 50]])
                                          .build();

                var mapping3 = googletag.sizeMapping()
                                          .addSize([1024, 0], [[970, 250]])
                                          .addSize([800, 0], [[728, 250]])
                                          .addSize([0, 0], [[300, 250]])
                                          .build();

                if (window.innerWidth > 1024){
                    var locleaderboard = document.getElementsByClassName("main-content")[0];
                    if (locleaderboard != null) {
                      googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/Leaderboard', [[970,250],[970,90],[728,250],[728,90]], 'div-gpt-ad-leaderboard')
                                   .defineSizeMapping(mapping1)
                                   .addService(googletag.pubads());
                      locleaderboard.parentNode.insertBefore(dv_l, locleaderboard);
                    }

                    var locsticky = document.getElementsByClassName("main-content")[0];
                    if (locsticky != null) {
                      googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/StickyExpand', [[320,50]], 'div-gpt-ad-stickyexp')
                                   .defineSizeMapping(mapping3)
                                   .addService(googletag.pubads());
                      locsticky.after(ft_stickyexp);
                    }

                    var locoop = document.getElementsByClassName("main-content")[0];
                    if (locoop != null) {
                      googletag.defineOutOfPageSlot('/160553881,21835028929/mediaindonesia.com/OOP', 'div-gpt-ad-oop')
                                   .addService(googletag.pubads());
                      locoop.after(dv_oop);
                    }

                    var locmultibanner1 = document.getElementsByClassName("rows jap")[0];
                    if (locmultibanner1 != null) {
                      var locm = document.getElementsByClassName("rows jap")[0].getElementsByTagName("p");
                      var locm1 = Math.round(locm.length*30/100);
                      var locm2 = Math.round(locm.length*70/100);
                      var locm3 = Math.round(locm.length*50/100);
                      googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-multibanner1')
                                   .addService(googletag.pubads());
                      locmultibanner1.getElementsByTagName("p")[locm1].after(dv_m1);
                    }

                    var locmultibanner2 = document.getElementsByClassName("rows jap")[0];
                    if (locmultibanner2 != null) {
                      googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/Multibanner2', [[336,280],[300,250]], 'div-gpt-ad-multibanner2')
                                   .addService(googletag.pubads());
                      locmultibanner2.getElementsByTagName("p")[locm2].after(dv_m2);
                    }

                    var locmultibanner3 = document.getElementsByClassName("rows jap")[0];
                    if (locmultibanner3 != null) {
                      googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/Flying_Carpet', [[300,600]], 'div-gpt-ad-multibanner3')
                                   .addService(googletag.pubads());
                      locmultibanner3.getElementsByTagName("p")[locm3].after(dv_m3);
                    }

                    // var locfrmfly = document.getElementsByClassName("rows jap")[0].getElementsByTagName("p");
                    // var locfrmfly1 = Math.round(locfrmfly.length*50/100);
                    // var frmfly=window.parent.document.getElementsByClassName("rows jap")[0].getElementsByTagName("p")[locfrmfly1];
                    // var checkWidth = window.parent.document.getElementsByClassName("rows jap")[0].clientWidth;

                    // var scgpt = document.createElement("script");
                    // scgpt.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                    // scgpt.setAttribute("async","");

                    // var dvfly = document.createElement("div");
                    // dvfly.id="gpt-flyingcarpet";
                    // var stylefly = document.createElement("style");
                    // stylefly.innerHTML = 
                    // '.parallax_abs {'+
                    // '    width: 100%;'+
                    // '    height: 100%;'+
                    // '    position: absolute;'+
                    // '    top: 0;'+
                    // '    left: 0;'+
                    // '    clip: rect(auto, auto, auto, auto);'+
                    // '}'+
                    // '.parallax_fix {'+
                    // '    width: 100%;'+
                    // '    height: 100%;'+
                    // '    position: fixed;'+
                    // '    top: 0;'+
                    // '    -moz-transform: translateZ(0);'+
                    // '    -webkit-transform: translateZ(0);'+
                    // '    -ms-transform: translateZ(0);'+
                    // '    -o-transform: translateZ(0);'+
                    // '    transform: translateZ(0);'+
                    // '    margin: 0 auto;'+
                    // '}'+
                    // '.parallax_ads {'+
                    // '    width: 100%;'+
                    // '    height: 100%;'+
                    // '    height: auto;'+
                    // '    border: none;'+
                    // '    position: absolute;'+
                    // '    left: 50%;'+
                    // '    top: 80px;'+
                    // '    -moz-transform: translateX(-50%);'+
                    // '    -webkit-transform: translateX(-50%);'+
                    // '    -ms-transform: translateX(-50%);'+
                    // '    -o-transform: translateX(-50%);'+
                    // '    transform: translateX(-50%);'+
                    // '}';
                    // var scgpt2 = document.createElement("script");
                    // scgpt2.innerHTML = "var parallax = null;" +
                    // " window.googletag = window.googletag || {cmd: []}; "+
                    // " googletag.cmd.push(function() {"+
                    // " parallax = googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/Flying_Carpet', [300, 600], 'gpt-flyingcarpet').addService(googletag.pubads());"+
                    // " googletag.enableServices();"+
                    // " googletag.display('gpt-flyingcarpet');"+
                    // " });";

                    // dvfly.appendChild(scgpt2);

                    // var divfly = document.createElement("div");
                    // divfly.className="flying_carpet_div";
                    // divfly.style = "width: 100%;height: 400px;position: relative;margin-bottom:10px !important;margin-top:0 !important;";
                    // var divwrap = document.createElement("div");
                    // divwrap.className="parallax_abs";
                    // var divshow = document.createElement("div");
                    // divshow.className="parallax_fix";
                    // divshow.style.maxWidth = checkWidth + "px";
                    // var divshowads = document.createElement("div");
                    // divshowads.className="parallax_ads";

                    // divshowads.appendChild(scgpt);
                    // divshowads.appendChild(dvfly);
                    // divshow.appendChild(divshowads);
                    // divwrap.appendChild(divshow);
                    // divfly.appendChild(divwrap);
                    // divfly.appendChild(stylefly);

                    // if (frmfly != null) {
                    //   frmfly.after(divfly);
                    // }
                    // setTimeout(function(){
                    //   var checkFC = window.parent.document.getElementById('gpt-flyingcarpet').clientHeight;
                    //   if(checkFC < 40){
                    //     document.getElementsByClassName('flying_carpet_div')[0].style.display = "none";
                    //   }
                    // }, 2500);
                }

                if (window.innerWidth < 1024){
                    // var locleaderboard = document.getElementById("content");
                    // if (locleaderboard != null) {
                    //   googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/Leaderboard', [[970,250],[970,90],[728,250],[728,90]], 'div-gpt-ad-leaderboard')
                    //                .defineSizeMapping(mapping1)
                    //                .addService(googletag.pubads());
                    //   locleaderboard.parentNode.insertBefore(dv_l, locleaderboard);
                    // }

                    var locsticky = document.getElementById("content");
                    if (locsticky != null) {
                      googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/StickyExpand', [[320,50]], 'div-gpt-ad-stickyexp')
                                   .defineSizeMapping(mapping3)
                                   .addService(googletag.pubads());
                      locsticky.after(ft_stickyexp);
                    }

                    var locoop = document.getElementById("content");
                    if (locoop != null) {
                      googletag.defineOutOfPageSlot('/160553881,21835028929/mediaindonesia.com/OOP', 'div-gpt-ad-oop')
                                   .addService(googletag.pubads());
                      locoop.after(dv_oop);
                    }

                    var locmultibanner1 = document.getElementsByClassName("rows article")[0];
                    if (locmultibanner1 != null) {
                      var locm = document.getElementsByClassName("rows article")[0].getElementsByTagName("p");
                      var locm1 = Math.round(locm.length*30/100);
                      var locm2 = Math.round(locm.length*70/100);
                      var locm3 = Math.round(locm.length*50/100);
                      googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/Multibanner1', [[336,280],[300,250]], 'div-gpt-ad-multibanner1')
                                   .addService(googletag.pubads());
                      locmultibanner1.getElementsByTagName("p")[locm1].after(dv_m1);
                    }

                    var locmultibanner2 = document.getElementsByClassName("rows article")[0];
                    if (locmultibanner2 != null) {
                      googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/Multibanner2', [[336,280],[300,250]], 'div-gpt-ad-multibanner2')
                                   .addService(googletag.pubads());
                      locmultibanner2.getElementsByTagName("p")[locm2].after(dv_m2);
                    }

                    var locmultibanner3 = document.getElementsByClassName("rows article")[0];
                    if (locmultibanner3 != null) {
                      googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/Flying_Carpet', [[300,600]], 'div-gpt-ad-multibanner3')
                                   .addService(googletag.pubads());
                      locmultibanner3.getElementsByTagName("p")[locm3].after(dv_m3);
                    }

                    // var locfrmfly = document.getElementsByClassName("rows article")[0].getElementsByTagName("p");
                    // var locfrmfly1 = Math.round(locfrmfly.length*50/100);
                    // var frmfly=window.parent.document.getElementsByClassName("rows article")[0].getElementsByTagName("p")[locfrmfly1];
                    // var checkWidth = window.parent.document.getElementsByClassName("rows article")[0].clientWidth;

                    // var scgpt = document.createElement("script");
                    // scgpt.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                    // scgpt.setAttribute("async","");

                    // var dvfly = document.createElement("div");
                    // dvfly.id="gpt-flyingcarpet";
                    // var stylefly = document.createElement("style");
                    // stylefly.innerHTML = 
                    // '.parallax_abs {'+
                    // '    width: 100%;'+
                    // '    height: 100%;'+
                    // '    position: absolute;'+
                    // '    top: 0;'+
                    // '    left: 0;'+
                    // '    clip: rect(auto, auto, auto, auto);'+
                    // '}'+
                    // '.parallax_fix {'+
                    // '    width: 100%;'+
                    // '    height: 100%;'+
                    // '    position: fixed;'+
                    // '    top: 0;'+
                    // '    -moz-transform: translateZ(0);'+
                    // '    -webkit-transform: translateZ(0);'+
                    // '    -ms-transform: translateZ(0);'+
                    // '    -o-transform: translateZ(0);'+
                    // '    transform: translateZ(0);'+
                    // '    margin: 0 auto;'+
                    // '}'+
                    // '.parallax_ads {'+
                    // '    width: 100%;'+
                    // '    height: 100%;'+
                    // '    height: auto;'+
                    // '    border: none;'+
                    // '    position: absolute;'+
                    // '    left: 50%;'+
                    // '    top: 80px;'+
                    // '    -moz-transform: translateX(-50%);'+
                    // '    -webkit-transform: translateX(-50%);'+
                    // '    -ms-transform: translateX(-50%);'+
                    // '    -o-transform: translateX(-50%);'+
                    // '    transform: translateX(-50%);'+
                    // '}';
                    // var scgpt2 = document.createElement("script");
                    // scgpt2.innerHTML = "var parallax = null;" +
                    // " window.googletag = window.googletag || {cmd: []}; "+
                    // " googletag.cmd.push(function() {"+
                    // " parallax = googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/Flying_Carpet', [300, 600], 'gpt-flyingcarpet').addService(googletag.pubads());"+
                    // " googletag.enableServices();"+
                    // " googletag.display('gpt-flyingcarpet');"+
                    // " });";

                    // dvfly.appendChild(scgpt2);

                    // var divfly = document.createElement("div");
                    // divfly.className="flying_carpet_div";
                    // divfly.style = "width: 100%;height: 400px;position: relative;margin-bottom:10px !important;margin-top:0 !important;";
                    // var divwrap = document.createElement("div");
                    // divwrap.className="parallax_abs";
                    // var divshow = document.createElement("div");
                    // divshow.className="parallax_fix";
                    // divshow.style.maxWidth = checkWidth + "px";
                    // var divshowads = document.createElement("div");
                    // divshowads.className="parallax_ads";

                    // divshowads.appendChild(scgpt);
                    // divshowads.appendChild(dvfly);
                    // divshow.appendChild(divshowads);
                    // divwrap.appendChild(divshow);
                    // divfly.appendChild(divwrap);
                    // divfly.appendChild(stylefly);

                    // if (frmfly != null) {
                    //   frmfly.after(divfly);
                    // }
                    // setTimeout(function(){
                    //   var checkFC = window.parent.document.getElementById('gpt-flyingcarpet').clientHeight;
                    //   if(checkFC < 40){
                    //     document.getElementsByClassName('flying_carpet_div')[0].style.display = "none";
                    //   }
                    // }, 2500);
                }

                if (window.innerWidth < 1024){
                    var ct = window.parent.document.getElementById("content");
                    // var cth = window.parent.document.getElementById("wrapper");
                    var mbstyle = document.createElement('style');
                    mbstyle.innerHTML = 
                    '.t600 {'+
                    '    top: 500px;'+
                    '}'+
                    '.parallax-close {'+
                    '    background-color: #212121;'+
                    '    color: #fff;'+
                    '    font-size: 14px;'+
                    '    position: fixed;'+
                    '    padding: 4px 10px;'+
                    '    top: 70px;'+
                    '    right: 0;'+
                    '    z-index: 10;'+
                    '    border-radius: 0 0 0 10px;'+
                    '    cursor: pointer;'+
                    '    z-index: 1;'+
                    '}'+
                    '.parallax-ad {'+
                    '    position: fixed;'+
                    '    width: 100%;'+
                    '    background-color: #000000;'+
                    '    top: 70px;'+
                    '    z-index: 0;'+
                    '}'+
                    '.parallax-pos {'+
                    '    width: 320px;'+
                    '    height: auto;'+
                    '    margin: 0 auto;'+
                    '}'+
                    '.parallax-non {'+
                    '    position: relative;'+
                    '    background-color: #ffffff;'+
                    '    transition: all 1s ease 0s;'+
                    '    -moz-transition: all 1s ease 0s;'+
                    '    -webkit-transition: all 1s ease 0s;'+
                    '    -o-transition: all 1s ease 0s;'+
                    '    z-index: 3;'+
                    '}'+
                    '#gpt-megabillboard iframe{height: 480px;}';
                    var mbcont = document.createElement('div');
                    mbcont.className = "parallax-ad";
                    var mbpos = document.createElement('div');
                    mbpos.className = "parallax-pos";
                    var mbscgpt = document.createElement("script");
                    mbscgpt.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                    mbscgpt.setAttribute("async","");
                    var mbscgpt2 = document.createElement("script");
                    mbscgpt2.innerHTML = "" +
                    " window.googletag = window.googletag || {cmd: []}; "+
                    " googletag.cmd.push(function() {"+
                    " googletag.defineSlot('/160553881,21835028929/mediaindonesia.com/megabillboard', [320, 480], 'gpt-megabillboard').addService(googletag.pubads());"+
                    " googletag.enableServices();"+
                    " googletag.display('gpt-megabillboard');"+
                    " });";
                    var mbdivgpt = document.createElement('div');
                    mbdivgpt.id = 'gpt-megabillboard';
                    var mbclose = document.createElement('div');
                    mbclose.className = 'parallax-close';
                    mbclose.style = 'display:block;';
                    mbclose.onclick = function(){document.getElementById('megabillboard').style.display = "none";ct.classList.remove("t600");mbclose.style = ("display:none;");};
                    mbclose.innerHTML = 'Tutup';
                    var mbscroll = document.createElement('div');
                    mbscroll.style = 'top:550px;width:100%; z-index:999; position:absolute; color:white; background-color: #212121; text-align:center; font-size: 11px; padding: 2px; font-weight: bold; letter-spacing: .6px;';
                    mbscroll.innerHTML = 'SCROLL UNTUK MELANJUTKAN MEMBACA';

                    ct.classList.add("parallax-non");
                    ct.classList.add("t600");
                    // cth.classList.add("t600");

                    var mbdivall = document.createElement("div");
                    mbdivall.id = 'megabillboard';

                    mbpos.appendChild(mbdivgpt);
                    mbpos.appendChild(mbscgpt);
                    mbpos.appendChild(mbscgpt2);
                    mbcont.appendChild(mbstyle);
                    mbcont.appendChild(mbpos);

                    mbdivall.appendChild(mbcont);
                    mbdivall.appendChild(mbclose);
                    mbdivall.appendChild(mbscroll);
                    ct.parentNode.insertBefore(mbdivall, ct);

                    setTimeout(function(){ 
                      var checkMB = window.parent.document.getElementById('gpt-megabillboard').clientHeight;
                      if(checkMB < 40){
                          document.getElementById('megabillboard').style.display = "none";
                          ct.classList.remove("t600");
                          mbclose.style = ("display:none;");
                      }
                    }, 2500);
                }
                
            }
        } else {
            setTimeout(() => {
                propsInitAds();
            }, 250);
            return;
        }
    }   
}

function addDocumentToWebsite() {
    document.head.appendChild(script_tag);
    document.head.appendChild(stylesticky);
    window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
        googletag.defineOutOfPageSlot('/160553881,21835028929/mediaindonesia.com/Interstitial', 
            googletag.enums.OutOfPageFormat.INTERSTITIAL)
            .addService(googletag.pubads());

        var cVisitorId = (visId = document.cookie.split("cProps")[1]) ? visId.split(';')[0].replace(/[^a-zA-Z0-9]/ig, '') : false;
        if (cVisitorId) {
                googletag.pubads().setPublisherProvidedId(cVisitorId + 'props');
        }
        googletag.pubads().setCentering(true);
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
    });
}

var listGptExisting = [];

setTimeout(()=>{
  let allExistingRunningAds = googletag.pubads().getSlots();
  if (Array.isArray(allExistingRunningAds)) {
    for (let row of allExistingRunningAds) {
        let adUnitExistingIds = '160553881';
        let checkExistingRunningAds = row.getAdUnitPath();
        let checkIsExistingPropsAds = checkExistingRunningAds.match(adUnitExistingIds);

        if (checkIsExistingPropsAds) {
            listGptExisting.push(row.getSlotElementId());
        }
    }
  }
  runScript();
}, 5500);
 
function myScript() {
  let nListGptExisting = [];
  for (let gpt of listGptExisting) {

    if (gpt.toLowerCase().includes("interstitial") || gpt.toLowerCase().includes("oop")) {
      continue;
    }

    let findGptObjects = googletag.pubads().getSlots().find((e) => {
      return e.getSlotElementId() == gpt;
    });

    if (!findGptObjects) {
      console.log("Cannot adrefresh, gpt object not found!");
    }

    let getSizes = findGptObjects.getSizes();

    // console.log(getSizes);

    let sizesAsStr = "";

    for (let i = 0 ; i < getSizes.length ; i++) {
      if (i == getSizes.length - 1) {
        sizesAsStr += `[${getSizes[i].width},${getSizes[i].height}]`;
      } else {
        sizesAsStr += `[${getSizes[i].width},${getSizes[i].height}],`;
      }
    }

    let adUnitId = '/223513049,23002926681/ca-pub-5111137191506013-tag/23002926681_mediaindonesia.com_pg_display_std'; //ganti ad unit
    let adUnitSizes = `[${sizesAsStr}]`;

    // console.log(adUnitId);
    // console.log(adUnitSizes);

    var dv_adopRef = document.createElement("div");
    var randNumber1 = Math.floor((Math.random() * 10000000) + 1);

    var newIdAdrefreshAdop = gpt + `-${randNumber1}`;

    // console.log(`window.googletag = window.googletag || {cmd: []};
    // googletag.cmd.push(function() {
    // googletag.defineSlot('${adUnitId}', ${adUnitSizes}, '${newIdAdrefreshAdop}').addService(googletag.pubads());
    // googletag.enableServices();
    // googletag.display('${newIdAdrefreshAdop}');
    // });`)

    dv_adopRef.id= newIdAdrefreshAdop;
    dv_adopRef.style="margin: 15px 0; min-width: 120px; min-height: 50px;";

    var sc_adopRef = document.createElement("script");
    sc_adopRef.innerHTML= 
    `window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
      googletag.defineSlot('${adUnitId}', ${adUnitSizes}, '${newIdAdrefreshAdop}').addService(googletag.pubads());
      googletag.enableServices();
      googletag.display('${newIdAdrefreshAdop}');
      });`;
    dv_adopRef.appendChild(sc_adopRef);

    var posRef = document.getElementById(gpt);
    // console.log(posRef);
    posRef.after(dv_adopRef);
    posRef.style.display = "none";

    nListGptExisting.push(newIdAdrefreshAdop);
  }
  listGptExisting = nListGptExisting;
}

function runScript() {
  console.log("running");
  setTimeout(function() {
    myScript();
    runScript();
    console.log("refresh");
  }, 30000); // Wait for 30 seconds
}