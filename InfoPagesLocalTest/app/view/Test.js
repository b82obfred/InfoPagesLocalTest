Ext.define('Mobile.view.Test', {
    extend: 'Ext.Container',
    xtype: 'Test',
    id: 'Test',

    config: {
        layout: { type: 'vbox' },
        flex: 1,

        items: [
            {
                xtype: 'toolbar',
                id: 'TestResults_Toolbar',
                docked: 'top',
                ui: 'customtest',
                title: 'Test Search',
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
                xtype: 'TestSearch',
                id: 'TestSearch',
                style: 'background-color:#33CC33;',
                height: '30px',
            },
            {
                xtype: 'TestResults',
                id: 'TestResults',
                flex: 1
            }
        ]
    }
});
