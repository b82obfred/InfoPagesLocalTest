Ext.define('Mobile.view.ListingsDirectory', {
    extend: 'Ext.Carousel',
    xtype: 'ListingsDirectory',
    id: 'ListingsDirectory',

    config: {
        layout: { type: 'card' },

        items: []
    },

    initialize: function () {
        var me = this;

        //console.log('listings directory initialize');
        me.on('painted', function () {
            //console.log('listings directory painted');
            me.fireEvent('viewready', me);
        },

        null, { single: true });

        me.callParent();
    }
});