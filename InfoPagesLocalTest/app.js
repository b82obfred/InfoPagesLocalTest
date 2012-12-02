//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Mobile': 'app'
});
//</debug>

Ext.application({
    name: 'Mobile',

    requires: [
        'Ext.Button',
        'Ext.Carousel',
        'Ext.Img',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.app.Controller',
        'Ext.data.Store',
        'Ext.dataview.DataView',
        'Ext.dataview.List',
        'Ext.device.Geolocation',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Search',
        'Ext.MessageBox',
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh',
        'Ext.tab.Panel',
        'Ext.util.Geolocation',
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh',
        'Mobile.store.DealsResultsStore',
        'Mobile.store.ListingsResultsStore'
    ],

    models: [
        'DealsResultsModel',
        'DealsSearchModel',
        'ListingsResultsModel',
        'ListingsSearchModel'
    ],

    views: [
        'Main',
        'Home',
        'Deals',
        'DealsSearch',
        'DealsPanels',
        'DealsDirectory',
        'DealsResults',
        'DealsResultsTemplate',
        'DealsDetails',
        'Listings',
        'ListingsSearch',
        'ListingsPanels',
        'ListingsDirectory',
        'ListingsResults',
        'ListingsResultsTemplate',
        'ListingsDetails'
    ],



    controllers: [
        'Main',
        'DealsSearch',
        'DealsDirectory',
        'ListingsSearch',
        'ListingsDirectory'
    ],

    stores: [
        'DealsResultsStore',
        'ListingsResultsStore'
    ],


    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Mobile.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
