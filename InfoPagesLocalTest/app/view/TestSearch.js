Ext.define('Mobile.view.TestSearch', {
    extend: 'Ext.Container',
    xtype: 'TestSearch',
    id: 'TestSearch',

    config: {
        layout: { type: 'vbox', align: 'center' },
        items: [
            {
                xtype: 'formpanel',
                id: 'TestSearchFormPanel',
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
                                id: 'TestSearchField',
                                height: '30px',
                                name: 'TestSearchField',
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