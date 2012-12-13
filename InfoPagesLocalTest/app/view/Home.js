Ext.define('Mobile.view.Home', {
    extend: 'Ext.Container',
    xtype: 'Home',
    id: 'Home',

    config: {
        layout: { type: 'vbox', align: 'center' },
        style: 'background-color:gainsboro;',
        scrollable: true,
        flex: 1,

        items: [
            {
                xtype: 'image',
                id: 'Home_Logo',
                height: '100px',
                width: '288px',
                src: './resources/images/Home_Logo.png'

            },
            {
                xtype: 'button',
                id: 'Home_Deals',
                cls: 'Home_Deals',
                handler: function () {
                    //console.log('click');
                    Ext.getCmp('Main').setActiveItem(1);
                    
                }
            },
            {
                xtype: 'button',
                id: 'Home_Listings',
                cls: 'Home_Listings',
                handler: function () {
                    //console.log('click');
                    Ext.getCmp('Main').setActiveItem(2);
                }
            }

        ]
    }
});
