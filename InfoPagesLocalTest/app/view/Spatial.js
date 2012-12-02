Ext.define('Mobile.view.Spatial', {
    extend: 'Ext.Container',
    xtype: 'Spatial',
    id: 'Spatial',

    config: {
        layout: { type: 'vbox' },
        flex: 1,

        items: [
            {
                xtype: 'toolbar',
                id: 'SpatialResults_Toolbar',
                docked: 'top',
                ui: 'customtest',
                title: 'Spatial Search',
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
                xtype: 'SpatialSearch',
                id: 'SpatialSearch',
                style: 'background-color:#33CC33;',
                height: '30px',
            },
            {
                xtype: 'SpatialResults',
                id: 'SpatialResults',
                flex: 1
            }
        ]
    }
});
