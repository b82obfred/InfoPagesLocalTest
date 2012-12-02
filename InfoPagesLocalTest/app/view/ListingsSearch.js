Ext.define('Mobile.view.ListingsSearch', {
    extend: 'Ext.Container',
    xtype: 'ListingsSearch',
    id: 'ListingsSearch',

    config: {
        layout: { type: 'card' },
        items: [
            {
                xtype: 'formpanel',
                id: 'ListingsSearchFormPanel',
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
                                id: 'ListingsSearchField',
                                height: '30px',
                                name: 'ListingsSearchField',
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
        //console.log('listings search initialize');
        me.on('painted', function () {
            //console.log('listings search painted');
            me.fireEvent('viewready', me);
        }, null, { single: true });

        me.callParent();
    }
});