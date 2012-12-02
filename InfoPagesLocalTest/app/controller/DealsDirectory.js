Ext.define('Mobile.controller.DealsDirectory', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            dealsDirectory: 'DealsDirectory'
        },

        control: {
            dealsDirectory: {
                viewready: 'onDealsDirectoryReady'
            }
        }
    },

    onDealsDirectoryReady: function (carousel) {
        //console.log('DealsDirectory onDealsDirectoryReady');
        var carousels = [];

        var dealsDirectoryStore = Ext.create('Ext.data.Store', {
            fields: ['Html', 'Search', 'DealsCount'],
            proxy: {
                type: 'ajax',
                url: './app/data/DealsDirectory.json'
            },
            autoLoad: true
        });

        dealsDirectoryStore.on('load', function () {
            var dealsDirectoryStoreData = dealsDirectoryStore.getData();
            //            console.log(dealsDirectoryStoreData.items.length); 
            //            console.log(dealsDirectoryStoreData.items[1].data.Html)

            var l = 0;
            for (i = 1; i <= 2; i++) {
                var rows = [];
                for (j = 1; j <= 4; j++) {
                    var cols = [];
                    for (k = 1; k <= 3; k++) {
                        cols.push({
                            xtype: 'button',
                            id: 'D' + i + j + k + dealsDirectoryStoreData.items[l].data.Html,
                            itemId: dealsDirectoryStoreData.items[l].data.Search,
                            cls: dealsDirectoryStoreData.items[l].data.Html,
                            badgeText: dealsDirectoryStoreData.items[l].data.DealsCount,
                            handler: function () {

                                var search = this.getItemId();
                                console.log('Search Deals For:' + search);

                                var record = Ext.create('Mobile.model.DealsSearchModel', {
                                    DealsSearchField: search
                                });

                                Ext.getCmp('DealsSearchFormPanel').setRecord(record);

                                Ext.getCmp('DealsSearchFormPanel').fireEvent('change');
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

                        Ext.getCmp('D' + i + j + k + dealsDirectoryStoreData.items[l].data.Html).addCls('yellow');
                        l = l + 1;
                    }
                }
            }
        });
    }
});