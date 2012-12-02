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
                xtype: 'Test',
                id: 'Test',
                flex: 1
            },
            {
                xtype: 'Spatial',
                id: 'Spatial',
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
