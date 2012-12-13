Ext.define('Mobile.view.DealsPanels', {
    extend: 'Ext.Panel',
    xtype: 'DealsPanels',
    id: 'DealsPanels',

    config: {
        layout: { type: 'card' },
        //layout: { type: 'hbox' },
        defaults: { flex: 1, style: 'background-color:#1A5496;' },

        items: [
            {
                xtype: 'DealsDirectory',
                id: 'DealsDirectory'
            },

            {
                xtype: 'DealsResults',
                id: 'DealsResults'
            },
            
            {
                xtype: 'DealsDetails',
                id: 'DealsDetails'
            }
        ]
    }
});
