Ext.define('Mobile.controller.ListingsDirectory', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            listingsDirectory: 'ListingsDirectory'
        },

        control: {
            listingsDirectory: {
                viewready: 'onListingsDirectoryReady'
            }
        }
    },

    onListingsDirectoryReady: function (carousel) {
        //console.log('ListingsDirectory onListingsDirectoryReady');
        var carousels = [];

        var listingsDirectoryStore = Ext.create('Ext.data.Store', {
            fields: ['Html', 'Search', 'DealsCount'],
            proxy: {
                type: 'ajax',
                url: './app/data/ListingsDirectory.json'
            },
            autoLoad: true
        });

        listingsDirectoryStore.on('load', function () {
            var listingsDirectoryStoreData = listingsDirectoryStore.getData();
            //            console.log(listingsDirectoryStoreData.items.length); 
            //            console.log(listingsDirectoryStoreData.items[1].data.Html)

            var l = 0;
            for (i = 1; i <= 2; i++) {
                var rows = [];
                for (j = 1; j <= 4; j++) {
                    var cols = [];
                    for (k = 1; k <= 3; k++) {
                        cols.push({
                            xtype: 'button',
                            id: 'L' + i + j + k + listingsDirectoryStoreData.items[l].data.Html,
                            itemId: listingsDirectoryStoreData.items[l].data.Search,
                            cls: listingsDirectoryStoreData.items[l].data.Html,
                            badgeText: listingsDirectoryStoreData.items[l].data.DealsCount,
                            handler: function () {

                                var search = this.getItemId();
                                console.log('Search Listings For:' + search);

                                var record = Ext.create('Mobile.model.ListingsSearchModel', {
                                    ListingsSearchField: search
                                });

                                Ext.getCmp('ListingsSearchFormPanel').setRecord(record);

                                Ext.getCmp('ListingsSearchFormPanel').fireEvent('change');
                            }
                        });
                        l = l + 1;
                    }

                    //console.log(cols);
                    rows.push({
                        layout: { type: 'hbox', align: 'center' },
                        items: cols
                    });
                }

                //console.log(rows);
                carousels.push({
                    layout: { type: 'vbox', align: 'center' },
                    defaults: { flex: 1 },
                    items: rows
                });
            }
            //console.log(carousels);
            carousel.setItems(carousels);
            carousel.setActiveItem(0);


            var l = 0;
            for (i = 1; i <= 2; i++) {
                var rows = [];
                for (j = 1; j <= 4; j++) {
                    var cols = [];
                    for (k = 1; k <= 3; k++) {

                        Ext.getCmp('L' + i + j + k + listingsDirectoryStoreData.items[l].data.Html).addCls('yellow');
                        l = l + 1;
                    }
                }
            }
        });
    }
});