Ext.define('Mobile.view.Listings', {
    extend: 'Ext.Container',
    xtype: 'Listings',
    id: 'Listings',

    config: {
        layout: { type: 'vbox' },
        flex: 1,

        items: [
            {
                xtype: 'toolbar',
                id: 'ListingsResults_Toolbar',
                docked: 'top',
                ui: 'customlistings',
                title: 'Listings Search',
                items: [
                    {
                        ui: 'back',
                        text: 'BACK ',
                        handler: function () {
                            Ext.getCmp('Main').setActiveItem(0);
                        }
                    }
                ]
            },
            {
                xtype: 'ListingsSearch',
                id: 'ListingsSearch',
                style: 'background-color:#1A5496;',
                height: '30px'
            },
            {
                xtype: 'ListingsResults',
                id: 'ListingsResults',
                flex: 1
            }
        ]
    }
});
