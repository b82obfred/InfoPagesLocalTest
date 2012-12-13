Ext.define('Mobile.view.DealsSearch', {
    extend: 'Ext.Container',
    xtype: 'DealsSearch',
    id: 'DealsSearch',

    config: {
        layout: { type: 'vbox', align: 'center' },
        items: [
            {
                xtype: 'formpanel',
                id: 'DealsSearchFormPanel',
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
                                id: 'DealsSearchField',
                                height: '30px',
                                name: 'DealsSearchField',
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
        //console.log('deals search initialize');
        me.on('painted', function () {
            //console.log('deals search painted');
            me.fireEvent('viewready', me);
        }, null, { single: true });

        me.callParent();
    }
});