Ext.define('Mobile.view.ListingsPanels', {
    extend: 'Ext.Container',
    xtype: 'ListingsPanels',
    id: 'ListingsPanels',

    config: {
        layout: { type: 'card' },
        //layout: { type: 'hbox' },
        defaults: { flex: 1, style: 'background-color:#643d87;' },

        items: [
            {
                xtype: 'ListingsDirectory',
                id: 'ListingsDirectory'
            },

            {
                xtype: 'ListingsResults',
                id: 'ListingsResults'
            },
            
            {
                xtype: 'ListingsDetails',
                id: 'ListingsDetails'
            }
        ]
    }
});
