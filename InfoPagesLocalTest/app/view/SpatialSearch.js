Ext.define('Mobile.view.SpatialSearch', {
    extend: 'Ext.Container',
    xtype: 'SpatialSearch',
    id: 'SpatialSearch',

    config: {
        layout: { type: 'vbox', align: 'center' },
        items: [
            {
                xtype: 'formpanel',
                id: 'SpatialSearchFormPanel',
                style: 'background-color:#1A5496;',
                height: '30px',
                width: '99%',
                
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        height: '30px',
                        items: [
                            {
                                xtype: 'searchfield',
                                id: 'SpatialSearchField',
                                height: '30px',
                                name: 'SpatialSearchField',
                                placeHolder: 'Search...',
                                autoCapitalize: true,
                                clearIcon: true
                            }
                        ]
                    }                   
                ]
            }
        ]
    },

    initialize: function () {
        var me = this;
        //console.log('test search initialize');
        me.on('painted', function () {
            //console.log('test search painted');
            me.fireEvent('viewready', me);
        }, null, { single: true });

        me.callParent();
    }
});