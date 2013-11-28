function HypixelWoot(){
stuff = {
    autowoot: true,
    clicks: 0,
    version: 1.01,
    close: function(){ API.off(API.DJ_ADVANCE, stuff.advance); API.off(API.CHAT, stuff.chat); $('#woot').unbind('click', stuff.click); },
    advance: function() { if (stuff.autowoot) { setTimeout(function(){ $("#woot").click() }, 2000); }},
    click: function() { stuff.clicks++; if (stuff.clicks == 2) { stuff.autowoot = !stuff.autowoot; stuff.clicks = 0; require("d2ba/aa39/fcab").trigger('notify', 'icon-woot', stuff.autowoot ? 'AutoWoot is now on' : 'AutoWoot is now off'); } setTimeout(function() { stuff.clicks = 0 }, 600)}
    }
    
    API.on(API.DJ_ADVANCE, stuff.advance, this);
    API.on(API.CHAT, stuff.chat, this);
    $("#woot").bind('click', stuff.click);
        
    API.chatLog("You are running the Hypixel Network AutoWoot v."+stuff.version);
    $('#woot').click();
}

if(typeof stuff !== "undefined") stuff.close();

HypixelWoot();