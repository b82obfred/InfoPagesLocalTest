Ext.define('Mobile.view.Main', {
    extend: 'Ext.Container',
    xtype: 'Main',
    id: 'Main',

    config: {
        fullscreen: true,
        styleHtmlContent: true,

        layout: { type: 'card' },
        //layout: { type: 'hbox' },
        height: '100%',
        flex: 1,

        items: [
            {
                xtype: 'Home',
                id: 'Home',
                flex: 1
            },
            {
                xtype: 'Deals',
                id: 'Deals',
                flex: 1
            },            
            {
                xtype: 'Listings',
                id: 'Listings',
                flex: 1
            }
        ]
    }
    });

    Ext.util.openLink = function (href) {

        var link = document.createElement('a');
        link.setAttribute('href', href);
        link.setAttribute('target', '_blank');
        var clickevent = document.createEvent('Event');
        clickevent.initEvent('click', true, false);
        link.dispatchEvent(clickevent);
        return false;
    }



    
