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
                items: [
                    {
                        ui: 'back',
                        text: 'BACK ',
                        handler: function () {
                            //console.log('back:' + Ext.getCmp('DealsPanels').getActiveItem().getId());
                            if (Ext.getCmp('DealsPanels').getActiveItem().getId() == 'DealsDirectory')
                            {
                                Ext.getCmp('Main').setActiveItem(0);
                                $.jStorage.set('search', null);                                
                            }
                            if (Ext.getCmp('DealsPanels').getActiveItem().getId() == 'DealsResults')
                            {
                                var record = Ext.create('Mobile.model.DealsSearchModel', {
                                    DealsSearchField: null
                                });

                                Ext.getCmp('DealsSearchFormPanel').setRecord(record);
                                Ext.getCmp('DealsSearchFormPanel').fireEvent('change');

                                $.jStorage.set('search', null);

                                Ext.getCmp('DealsPanels').setActiveItem(0);
                                Ext.getCmp('DealsDetails').removeAt(0);
                            }
                            if (Ext.getCmp('DealsPanels').getActiveItem().getId() == 'DealsDetails')
                            {
                                Ext.getCmp('DealsPanels').setActiveItem(1);                                
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
                        //cls: 'Toolbar_Button',
                        text: 'LISTINGS ',
                        handler: function () {
                            console.log('click');
                            Ext.getCmp('Main').setActiveItem(2);
                        }
                    }
                ]
            },
            {
                xtype: 'DealsSearch',
                id: 'DealsSearch',
                style: 'background-color:#1A5496;',
                height: '30px'
            },
            {
                xtype: 'DealsPanels',
                id: 'DealsPanels',
                flex: 1
            }
        ]
    }
});
