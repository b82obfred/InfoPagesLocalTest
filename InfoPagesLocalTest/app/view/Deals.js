Ext.define('Mobile.view.Deals', {
    extend: 'Ext.Container',
    xtype: 'Deals',
    id: 'Deals',

    config: {
        layout: { type: 'vbox' },
        flex: 1,

        items: [
            {
                xtype: 'toolbar',
                id: 'DealsResults_Toolbar',
                docked: 'top',
                ui: 'customdeals',
                title: 'Deals Search',
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
                xtype: 'DealsSearch',
                id: 'DealsSearch',
                style: 'background-color:#1A5496;',
                height: '30px',
            },
            {
                xtype: 'DealsResults',
                id: 'DealsResults',
                flex: 1
            }
        ]
    }
});
