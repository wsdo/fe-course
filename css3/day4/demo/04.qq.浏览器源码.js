function macfix() { // $('#p0_btn_pc').css('display','none'); $('#p0_btn_beta').css('display','none'); $('#p0_btn span').css('display','none'); $('#p0_btn_mac').css('display','block'); } function mac(){ str = navigator.platform.toString(); if (str == 'MacIntel')
    {
        macfix();
        var jump = document.referrer.indexOf('http://browser.qq.com/mac') <
            0;
        jump ? window.location.href = "./mac/index.html" : null;
    }
}

function isIpad() {
    if (/iPad/i.test(navigator.userAgent)) {
        var jump = d ocument.referrer.indexOf(
            'http://browser.qq.com/ipad/index.html') == 0;
        !jump ? window.location.href = "./ipad/index.html?ADTAG=pc-qqbrowser-redirect" : null;
    }
}
ie = false;

function isIE() { if (!!window.ActiveXObject || "ActiveXObject" in window) { return true; } else { return false; } }
if (navigator.userAgent.indexOf(
        "Firefox") > 0) { window.location.href = "./index_static.html" + location.search; };
isIpad();

function IEVersion() {
    var ua = navigator.userAgent;
    var reg = /Trident\/(\d+\.\d+)/;
    reg = reg.exec(ua);
    if (reg && reg[1]) { return +reg[1] + 4; }
    reg = /MSIE\s*(\d+\.\d+)/;
    reg = reg.exec(ua);
    if (reg && reg[1]) { return +reg[1]; }
    return -1;
}
if (isIE()) {
    if (IEVersion() <
        10 && IEVersion() > 0) { if (IEVersion() > 7) { window.location.href = "./index_parallax.html" + location.search; } else { window.location.href = "./index_static.html" + location.search; }; }
};
if (/QQBrowser/.test(navigator.userAgent) && /Chrome\/31/.test(navigator.userAgent)) { window.location.href = "./index_parallax.html" + location.search; }
pn = 0;
direction = true;
inital = true;
playing = false;
playingduration = 1500;
var scrollFunc = function(event) {
    event = event || window.event;
    if (!playing) {
        if (event.wheelDelta <
            0) { motion(true); } else { motion(false); }
    };
}
if (document.addEventListener) { document.addEventListener('DOMMouseScroll', scrollFunc, false); }
window.onmousewheel = document.onmousewheel = scrollFunc;
document.onkeydown = f unction(event) {
    event = event ||
        window.event;
    var c = e vent.keyCode;
    if (c == 40 || c == 32 || c == 39) { motion(true); } else if (c == 38 || c == 37) { motion(false); }
}

function playingdelay() {
    playing = t rue;
    setTimeout(function() { playing = f alse; }, playingduration);
}

function motion(direction) {
    if (direction == t rue) {
        if (pn == 3) {
            pn = 0;
            core(0, true);
            playingdelay();
        } else {
            pnsnap = p n;
            pn += 1;
            core(pn, false);
            playingdelay();
        }
    } else {
        if (pn == 0) {} else {
            pnsnap = p n;
            pn -= 1;
            core(pn, false);
            playingdelay();
        }
    }
}

function core(pn, loop) {
    if (typeof(pgvMain) == 'function') { pgvSendClick({ hottag: 'browser.qb9.scroll' + (pn + 1) }); } // var bg=$ ( '#container'); $( '#add_nav div').removeClass( 'on'); $( '#add_nav div:nth-child('+(pn+1)+ ')').addClass( 'on'); var bg=$ ( '#bg'); var pub_t=1
    000;
    var p0 = $('#p0');
    var p1 = $('#p1');
    var p2 = $('#p2');
    var p3 = $('#p3');
    var p081 = $('#p0_8_1');
    var p082 = $('#p0_8_2');
    var p0t1 = $('#p0_t_1');
    var p0t2 = $('#p0_t_2');
    var slogan1 = $('#slogan_1');
    var slogan2 = $('#slogan_2');
    var
        slogan3 = $('#slogan_3');
    var slogan4 = $('#slogan_4');
    var p0btn = $('#p0_btn');
    var p1t1 = $('#p1_t_1');
    var p1t2 = $('#p1_t_2');
    var p1ui0 = $('#p1_ui_0');
    var p2t1 = $('#p2_t_1');
    var p2t2 = $('#p2_t_2');
    var p2pop = $('#p2_pop');
    var p2pop1 = $('#p2_pop_1');
    var p2pop2 = $('#p2_pop_2');
    var p2pop3 = $('#p2_pop_3');
    var p2pop4 = $('#p2_pop_4');
    var p2popicon = $('#p2_pop img');
    var p3t1 = $('#p3_t_1');
    var p3t2 = $('#p3_t_2');
    var p3def = $('#p3_defence');
    var p3list = $('#p3_list');
    var bgspeed = p ub_t * 4;
    if (pn == 0) {
        $('#add_links').css('display', 'none');
        $('#add_scrolling').velocity({ opacity: 1 }, { duration: 1000 });
        $('#add_lefttop').velocity({ opacity: 0 }, { duration: pub_t });
        bg.velocity({
            rotateZ: '90deg',
            translateX: '-7000px',
            scale: 3
        }, { duration: 0 }).velocity({ opacity: 1, scale: 0.6, translateX: '0px', translateY: '0px', rotateZ: '0deg' }, { duration: pub_t * 3, easing: 'ease' });
    } else if (pn == 1) {
        $('#gotomac').css('display', 'none');
        $('#add_scrolling').velocity({ opacity: 0 }, { duration: 500 });
        $('#add_lefttop').velocity({ opacity: 1 }, { duration: pub_t });
        bg.velocity('stop').velocity({ scale: 1, translateX: '-200px', translateY: '300px', rotateZ: '-60deg' }, { duration: pub_t * 2.5, easing: 'ease-in-out' });
    } else if (pn == 2) {
        $('#add_links').velocity({ opacity: 0 }, { duration: 1500 });
        // bg.velocity( 'stop').velocity({translateX: '-300px',translateY: '200px',rotateZ: '0deg'},{duration:pub_t*4,easing: 'ease-in-out'}); }else if (pn==3 ) { $( '#add_links').css( 'display', 'block').velocity({opacity:1},{duration:1500}); // bg.velocity(
        'stop').velocity({ translateX: '-400px', translateY: '300px', rotateZ: '-30deg' }, { duration: pub_t * 4, easing: 'ease-in-out' });
};
if (pn == 0) {
    if (inital == t rue) {
        p1.css('visibility', 'hidden');
        p2.css('visibility', 'hidden');
        p3.css('visibility',
            'hidden');
        inital = f alse;
    }
    if (loop == t rue) {
        setTimeout(function() { p3.css('visibility', 'hidden'); }, 1000) var p2away = f unction() {
            p2t1.velocity({ rotateY: '30deg', translateZ: '1300px', rotateX: '0deg', opacity: 0 }, { duration: pub_t });
            p2t2.velocity({ opacity: 0 }, { duration: pub_t / 2 });
            p2pop1.velocity({ rotateY: '60deg', translateZ: '1300px', rotateX: '90deg', scale: 0.1 }, { duration: pub_t });
            p2pop2.velocity({ rotateY: '60deg', translateZ: '1400px', rotateX: '90deg', scale: 0.1 }, { duration: pub_t * 1.2 });
            p2pop3.velocity({
                rotateY: '60deg',
                translateZ: '1500px',
                rotateX: '90deg',
                scale: 0.1
            }, { duration: pub_t * 1.4 });
            p2pop4.velocity({ rotateY: '60deg', translateZ: '1600px', rotateX: '90deg', scale: 0.1 }, { duration: pub_t * 1.6 });
        }
        p2away();
        p2t1.velocity({ opacity: 1, translateZ: 1100, rotateX: '-30deg' }, { duration: pub_t });
        p2pop1.velocity({ rotateY: '30deg', translateZ: '1300px', rotateX: '-180deg' }, { duration: pub_t });
        p2pop2.velocity({ rotateY: '30deg', translateZ: '1400px', rotateX: '-180deg' }, { duration: pub_t });
        p2pop3.velocity({
            rotateY: '30deg',
            translateZ: '1500px',
            rotateX: '-180deg'
        }, { duration: pub_t });
        p2pop4.velocity({ rotateY: '-30deg', translateZ: '1600px', rotateX: '180deg' }, { duration: pub_t });
    } // p0 init & back p081.velocity({rotateY: '20deg',translateZ: '1000px',rotateX: '180deg'},{duration:0}); p082.velocity({rotateY:
    '20deg', translateZ: '1500px', rotateX: '360deg'
}, { duration: 0 });
p0t1.velocity({ opacity: 0, translateZ: 0, rotateY: 0, rotateX: 0 }, { duration: 0 });
$('#subtitle').velocity({ opacity: 0, translateZ: 0, rotateY: 0, rotateX: 0 }, { duration: 0 }); // p0t2.velocity({opacity:0,translateZ:0,rotateY:0,rotateX:0},{duration:0});
slogan1.velocity({ rotateY: '-15deg', rotateX: '-30deg', translateZ: '3000px', translateX: '0px', translateY: '0px', scale: .1, opacity: 1 }, { duration: 0 });
slogan2.velocity({
    rotateY: '-15deg',
    rotateX: '-30deg',
    translateZ: '3100px',
    translateX: '0px',
    translateY: '0px',
    scale: .1,
    opacity: 1
}, { duration: 0 });
slogan3.velocity({ rotateY: '0deg', rotateX: '-30deg', translateZ: '3000px', translateX: '0px', translateY: '0px', scale: .1, opacity: 1 }, { duration: 0 }); // p0 i p081.velocity({rotateY:0,translateZ: '0px',rotateX:0},{duration:pub_t*1});
p082.velocity({ rotateY: 0, translateZ: '0px', rotateX: 0 }, { duration: pub_t * 1.4 });
p0t1.velocity({ opacity: 1, rotateY: 0, rotateX: 0 }, { duration: pub_t / 2, delay: pub_t * 1.7 });
$('#subtitle').velocity({ opacity: 1, rotateY: 0, rotateX: 0 }, { duration: pub_t / 2, delay: pub_t * 1.7 });
// p0t2.velocity( 'fadeIn',{duration:pub_t,delay:pub_t*2}); slogan1.velocity({rotateZ: '0deg',rotateY: '0deg',rotateX: '0deg',translateZ: '0px',translateX: '0px',translateY: '0px',scale:1},{duration:pub_t*2.3,easing: 'ease'}); slogan2.velocity({rotateY:
'0deg', rotateX: '0deg', translateZ: '0px', translateX: '0px', translateY: '0px', scale: 1
}, { duration: pub_t * 2.3, easing: 'ease', delay: pub_t * 0.1 });
slogan3.velocity({ rotateY: '0deg', rotateX: '0deg', translateZ: '0px', translateX: '0px', translateY: '0px', scale: 1 }, {
    duration: pub_t * 2.3,
    easing: 'ease',
    delay: pub_t * 0.2
});
p0btn.css('display', 'block');
p0btn.velocity({ opacity: 1 }, { duration: pub_t, delay: 2000 }); // all page initalization p0.css( 'visibility', 'visible'); // p1 back p1ui0.velocity({rotateY: '30deg',translateZ: '1000px',opacity:0},{duration:pub_t*1});
p1t1.velocity({ rotateX: '0deg', translateZ: '0px', rotateY: '20deg', opacity: 0 }, { duration: pub_t * 1 });
p1t2.velocity({ opacity: 0 }, { duration: pub_t * 1 });
$('#stage2').velocity({ translateZ: '2000px' }, { duration: 2000, easing: 'ease' })
}
else if (pn == 1) {
    p1.css('visibility', 'visible');
    $('#p3ui').velocity({ translateZ: '1200px', rotateX: '120deg' }, { duration: 1500 }) $('#title3').velocity({ rotateX: '20deg', translateZ: '2000px' }, { duration: 2000 }) $('#title3_1').velocity({ opacity: 0 }, { duration: 2000 })
    var p0away = f unction() {
        slogan1.velocity({ opacity: 0 }, { duration: pub_t * 1 });
        slogan2.velocity({ opacity: 0 }, { duration: pub_t * 1 });
        slogan3.velocity({ opacity: 0 }, { duration: pub_t * 1 });
        p0btn.velocity({ opacity: 0 }, { duration: pub_t / 2 });
        setTimeout(function() {
            p0btn.css('display', 'none');
        }, 600) p081.velocity({ rotateY: '-60deg', translateZ: '1000px', rotateX: '180deg' }, { duration: pub_t * 1 });
        p082.velocity({ rotateY: '-60deg', translateZ: '1200px', rotateX: '360deg' }, { duration: pub_t * 1 });
        p0t1.velocity({
            rotateX: '0deg',
            translateZ: '0px',
            opacity: 0
        }, { duration: pub_t / 2 });
        $('#subtitle').velocity({ opacity: 0, translateZ: 0, rotateY: 0, rotateX: 0 }, { duration: pub_t / 2 }); // p0t2.velocity( 'fadeOut',{duration:pub_t}); } p0away(); // p1 in var p1in=f unction(){ $(
        '#stage2').velocity({ rotateX: '0deg', rotateY: '0deg', translateZ: '-6000px', scale: 0.1, opacity: 0 }, { duration: 0 }).velocity({ rotateX: '0deg', rotateY: '0deg', translateZ: '0px', scale: 1, opacity: 1 }, { duration: 1000, easing: 'ease-out', delay: 1200 }) $('#title1_2').velocity({
        rotateX: '-10deg',
        translateZ: '-2000px'
    }, { duration: 0 }).velocity({ rotateX: 0, translateZ: '0px' }, { duration: 1000, easing: 'ease', delay: 1200 });
    $('#stage0').velocity({ opacity: 1, translateZ: 0 }, { duration: 0 }).velocity({ translateZ: '2000px' }, {
        duration: 2200,
        easing: 'ease',
        delay: 1000
    }) $('#layer4 img').velocity({ rotateZ: '-120deg' }, { duration: 0 }).velocity({ rotateZ: '0deg' }, { duration: 1200, delay: 600 }) $('#page1').velocity({ rotateX: '120deg', rotateY: '-180deg', translateZ: '1000px', scale: 0.1, opacity: 0 }, { duration: 0 }).velocity({
        rotateX: '0deg',
        rotateY: '0deg',
        translateZ: '0px',
        scale: 1,
        opacity: 1
    }, { duration: 2200, easing: 'ease', delay: 0 });
}
p1in(); // p2 back var p2back=f unction(){ p2t1.velocity({rotateY: '-60deg',translateZ: '800px',rotateX: '0deg',opacity:0},{duration:pub_t*1}); p2t2.velocity({opacity:0},{duration:pub_t/2});
p2pop1.velocity({ rotateY: '-60deg', translateZ: '800px', rotateX: '120deg', scale: 0.1 }, { duration: pub_t * 1 });
p2pop2.velocity({ rotateY: '-60deg', translateZ: '900px', rotateX: '120deg', scale: 0.1 }, { duration: pub_t * 1.2 });
p2pop3.velocity({
    rotateY: '-60deg',
    translateZ: '1000px',
    rotateX: '120deg',
    scale: 0.1
}, { duration: pub_t * 1.4 });
p2pop4.velocity({ rotateY: '-60deg', translateZ: '1100px', rotateX: '120deg', scale: 0.1 }, { duration: pub_t * 1.6 });
}
p2back();
p2.velocity({ rotateZ: '-30deg' }, { duration: pub_t * 1.5 });
p0btn.velocity({ opacity: 0 }, { duration: 300 });
}
else if (pn == 2) {
    p2.velocity({ rotateZ: '0deg' }, { duration: pub_t * 2 });
    p2.css('visibility', 'visible');
    p2t1.css('visibility', 'visible');
    p3.css('visibility', 'visible');
    $('#p3ui').velocity({
            rotateY: 0,
            translateX: 0,
            translateZ: '-50px',
            rotateX: '30deg',
            opacity: 1
        }, { duration: 2000, easeing: 'ease' }) $('#title3').velocity({ rotateY: 0, translateZ: 0, rotateX: 0 }, { duration: 2000, easeing: 'ease' }) $('#title3_1').velocity({ opacity: .7 }, { duration: 600, easeing: 'ease', delay: 1800 }) // p1 away
    var p1away = f unction() { $('#stage2').velocity({ translateZ: '2000px' }, { duration: 2000, easing: 'ease' }) $('#title1_2').velocity({ translateZ: '1000px' }, { duration: 2000, easing: 'ease' }); }
    p1away(); // p2 in var p3standby=f unction () { } p3standby();
    var p3in = f unction() {}
    p3in();
    var p2back = f unction() {
        p2t1.velocity({ rotateY: '-60deg', translateZ: '800px', rotateX: '0deg', opacity: 0 }, { duration: pub_t * 1 });
        p2t2.velocity({ opacity: 0 }, { duration: pub_t / 2 });
        p2pop1.velocity({
            rotateY: '-60deg',
            translateZ: '800px',
            rotateX: '120deg',
            scale: 0.1
        }, { duration: pub_t * 1 });
        p2pop2.velocity({ rotateY: '-60deg', translateZ: '900px', rotateX: '120deg', scale: 0.1 }, { duration: pub_t * 1.2 });
        p2pop3.velocity({ rotateY: '-60deg', translateZ: '1000px', rotateX: '120deg', scale: 0.1 }, { duration: pub_t * 1.4 });
        p2pop4.velocity({ rotateY: '-60deg', translateZ: '1100px', rotateX: '120deg', scale: 0.1 }, { duration: pub_t * 1.6 });
    }
    p2back();
} else if (pn == 3) {
    $('#p3ui').velocity({ rotateY: '-45deg', translateX: '3000px', translateZ: '-200px', rotateX: '0deg' }, { duration: 1500 })
    $('#title3').velocity({ rotateY: '-60deg', translateZ: '2000px' }, { duration: 2000 }) $('#title3_1').velocity({ opacity: 0 }, { duration: 500 }) var p3back = f unction() {}
    p3back();
    p2.velocity({ rotateZ: '0deg' }, { duration: pub_t * 2 });
    p2.css('visibility',
        'visible');
    p2t1.css('visibility', 'visible');
    var p2wave = f unction(num) { eval('wave' + num).velocity({ opacity: 1 }, { duration: pub_t }); }
    var p2in = f unction() {
        p2t1.velocity({ rotateY: 0, translateZ: 0, rotateX: 0, opacity: 1 }, { duration: pub_t * 2 }) p2t2.velocity({ opacity: 1 }, { duration: pub_t, delay: pub_t * 1.5 });
        p2pop1.velocity({ rotateY: 0, translateZ: 0, rotateX: 0, opacity: 1, scale: 1 }, { duration: pub_t * 2 });
        p2pop2.velocity({ rotateY: 0, translateZ: 0, rotateX: 0, opacity: 1, scale: 1 }, { duration: pub_t * 2 });
        p2pop3.velocity({ rotateY: 0, translateZ: 0, rotateX: 0, opacity: 1, scale: 1 }, { duration: pub_t * 2 });
        p2pop4.velocity({ rotateY: 0, translateZ: 0, rotateX: 0, opacity: 1, scale: 1 }, { duration: pub_t * 2 }); // p2popicon.velocity({opacity:1,scale:1,rotateZ: '-30deg'},{duration:pub_t*0.5,delay:pub_t*1.5,easing: 'easeOutBack'}); } p2in(); // p2 away }; } $(document).ready(function(){
        core(0, false);
        mac();
    });