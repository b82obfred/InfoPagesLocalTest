Ext.define('Mobile.view.ListingsResultsTemplate', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'ListingsResultsTemplate',

    config: {
        layout: {
            type: 'hbox',
            align: 'center'
        },
        //defaults: { flex: 1 },

        cls: 'manage-list-item',
        dataMap: {
            getListingLogo: {
                setSrc: 'Logo'
            },

            getListingText: {
                setHtml: 'ValueStatement'
            },

            getListingButton: {
                setBadgeText: 'DealsCount'
            }
        },

        ListingLogo: {
            height: 30,
            width: 30
        },

        ListingText: {
            flex: 5,
            align: 'center'
        },

        ListingButton: {
            cls: 'List_Deal',
            height: 30,
            width: 30
        }
    },

    applyListingLogo: function (config) {
        return Ext.factory(config, Ext.Img, this.getListingLogo());
    },

    updateListingLogo: function (newListingLogo, oldListingLogo) {
        if (newListingLogo) {
            this.add(newListingLogo);
        }
        if (oldListingLogo) {
            this.remove(oldListingLogo);
        }
    },

    applyListingText: function (config) {
        return Ext.factory(config, Ext.Component, this.getListingText());
    },

    updateListingText: function (newListingText, oldListingText) {
        if (newListingText) {
            this.add(newListingText);
        }

        if (oldListingText) {
            this.remove(oldListingText);
        }
    },

    applyListingButton: function (config) {
        return Ext.factory(config, Ext.Button, this.getListingButton());
    },

    updateListingButton: function (newListingButton, oldListingButton) {
        if (newListingButton) {
            var record = this.getRecord();
            //console.log(record.get('DealsCount'));
            if (record.get('DealsCount') > 0) {
                this.add(newListingButton);
            }
        }
        if (oldListingButton) {
            this.remove(oldListingButton);
        }
    },

    updateRecord: function (record) {
        this.callParent(arguments);
        var record = this.getRecord();

                var text = '';
                text = text + '&nbsp;<b>' + record.get('Name') + '</b><br/>';
                //text = text + record.get('Address') + '<br/>';
                text = text + '&nbsp;' + record.get('Phone') + '';
//                text = text + record.get('WebSite') + '<br/>';
//                text = text + record.get('Logo') + '<br/>'; 
//                text = text + record.get('ValueStatement') + '<br/>'; 
//                text = text + record.get('DealsCount') + '<br/>'; 
//                      
//                var keywords = record.data.Keywords;

//                for (i = 0; i <= keywords.length - 1; i = i + 1) {
//                    text = text + keywords[i].Keyword + '<br/>';
//                }
//                        
//                var locations = record.data.Locations;
//                text = text + '<i>Locations</i><br/>';
//                for (i = 0; i <= locations.length - 1; i = i + 1) {
//                    text = text + locations[i].Location + ' : ' + locations[i].Lat  + ' : ' + locations[i].Lon  + '<br/>';
//                }
//                            
//                var deals = record.data.Deals;
//                text = text + '<i>Deals</i><br/>';
//                for (i = 0; i <= deals.length - 1; i = i + 1) {
//                    text = text + deals[i].Deal + '<br/>';
//                }

//                var menus = record.data.Menus;
//                text = text + '<i>Menus</i><br/>';
//                for (i = 0; i <= menus.length - 1; i = i + 1) {
//                    text = text + menus[i].Menu + '<br/>';
        //                }


                var ListingText = this.getListingText();
                ListingText.setHtml(text);
    }
});
