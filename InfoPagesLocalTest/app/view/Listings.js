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
                items: [
                    {
                        ui: 'back',
                        text: 'BACK ',
                        handler: function () {
                            //console.log('back:' + Ext.getCmp('ListingsPanels').getActiveItem().getId());
                            if (Ext.getCmp('ListingsPanels').getActiveItem().getId() == 'ListingsDirectory')
                            {
                                Ext.getCmp('Main').setActiveItem(0);
                                $.jStorage.set('search', null);
                            }
                            if (Ext.getCmp('ListingsPanels').getActiveItem().getId() == 'ListingsResults')
                            {
                                var record = Ext.create('Mobile.model.ListingsSearchModel', {
                                    ListingsSearchField: null
                                });

                                Ext.getCmp('ListingsSearchFormPanel').setRecord(record);
                                Ext.getCmp('ListingsSearchFormPanel').fireEvent('change');

                                $.jStorage.set('search', null);

                                Ext.getCmp('ListingsPanels').setActiveItem(0);
                                Ext.getCmp('ListingsDetails').removeAt(0);
                            }
                            if (Ext.getCmp('ListingsPanels').getActiveItem().getId() == 'ListingsDetails')
                            {
                                Ext.getCmp('ListingsPanels').setActiveItem(1);
                            }
                        }
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'image',
                        cls: 'Toolbar_Logo'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        ui: 'forward',
                        text: 'DEALS ',
                        handler: function () {
                            console.log('click');
                            Ext.getCmp('Main').setActiveItem(1);
                        }
                    }
                ]
            },
            {
                xtype: 'ListingsSearch',
                id: 'ListingsSearch',
                style: 'background-color:#643d87;',
                height: '30px'
            },
            {
                xtype: 'ListingsPanels',
                id: 'ListingsPanels',
                flex: 1
            }
        ]
    }
});
