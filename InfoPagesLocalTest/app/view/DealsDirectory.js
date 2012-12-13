Ext.define('Mobile.view.DealsDirectory', {
    extend: 'Ext.Carousel',
    xtype: 'DealsDirectory',
    id: 'DealsDirectory',

    config: {
        layout: { type: 'card' },

        items: []
    },

    initialize: function () {
        var me = this;

        //console.log('deals directory initialize');
        me.on('painted', function () {
            //console.log('deals directory painted');
            me.fireEvent('viewready', me);
        }, 
        
        null, { single: true });

        me.callParent();
    }
});