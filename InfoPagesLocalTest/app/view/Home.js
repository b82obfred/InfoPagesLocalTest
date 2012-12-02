Ext.define('Mobile.view.Home', {
    extend: 'Ext.Container',
    xtype: 'Home',
    id: 'Home',

    config: {
        layout: { type: 'vbox', align: 'center' },
        style: 'background-color:gainsboro;',
        scrollable: true,
        flex: 1,

        items: [
            {
                xtype: 'spacer'
            },
            {
                xtype: 'button',
                id: 'Home_Test',
                ui: 'decline',
                width: '80%',
                flex: 1,
                text: 'Test Search',
                handler: function () {
                    //console.log('click');
                    Ext.getCmp('Main').setActiveItem(1);
                }
            },
            {
                xtype: 'spacer'
            },
            {
                xtype: 'button',
                id: 'Home_Spatial',
                ui: 'decline',
                width: '80%',
                flex: 1,
                text: 'Spatial Search',
                handler: function () {
                    //console.log('click');
                    Ext.getCmp('Main').setActiveItem(2);
                }
            },
            {
                xtype: 'spacer'
            },
            {
                xtype: 'button',
                id: 'Home_Deals',
                ui: 'decline',
                width: '80%',
                flex: 1,
                text: 'Deals Search',
                handler: function () {
                    //console.log('click');
                    Ext.getCmp('Main').setActiveItem(3);
                }
            },
            {
                xtype: 'spacer'
            },
            {
                xtype: 'button',
                id: 'Home_Listings',
                ui: 'decline',
                width: '80%',
                flex: 1,
                text: 'Listings Search',
                handler: function () {
                    //console.log('click');
                    Ext.getCmp('Main').setActiveItem(4);
                }
            },
            {
                xtype: 'spacer'
            }

        ]
    }
});
