Ext.define('Mobile.view.DealsResultsTemplate', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'DealsResultsTemplate',

    config: {
        layout: {
            type: 'hbox',
            align: 'center'
        },
        //defaults: { flex: 1 },

        cls: 'manage-list-item',
        dataMap: {
            getDealLogo: {
                setSrc: 'Logo'
            },

            getDealText: {
                setHtml: 'ValueStatement'                
            },

            getDealButton: {
                //setBadgeText: 'DealsCount'
            }
        },

        DealLogo: {
            height: 40,
            width: 40
        },

        DealText: {
            flex: 5,
            align: 'center'
        },

        DealButton: {
            cls: 'List_Deal',
            height: 30,
            width: 30
        }
    },

    applyDealLogo: function (config) {
        return Ext.factory(config, Ext.Img, this.getDealLogo());
    },

    updateDealLogo: function (newDealLogo, oldDealLogo) {
        if (newDealLogo) {
            this.add(newDealLogo);
        }
        if (oldDealLogo) {
            this.remove(oldDealLogo);
        }
    },

    applyDealText: function (config) {
        return Ext.factory(config, Ext.Component, this.getDealText());
    },

    updateDealText: function (newDealText, oldDealText) {
        if (newDealText) {
            this.add(newDealText);
        }

        if (oldDealText) {
            this.remove(oldDealText);
        }
    },

    applyDealButton: function (config) {
        return Ext.factory(config, Ext.Button, this.getDealButton());
    },

    updateDealButton: function (newDealButton, oldDealButton) {
        if (newDealButton) {
            this.add(newDealButton);
        }
        if (oldDealButton) {
            this.remove(oldDealButton);
        }
    },

    updateRecord: function (record) {
        this.callParent(arguments);
        var record = this.getRecord();

        var text = '';
        text = text + '&nbsp;<b>' + record.get('Name') + '</b><br/>';
//        text = text + record.get('Address') + '<br/>';
//        text = text + record.get('Phone') + '<br/>';
//        text = text + record.get('WebSite') + '<br/>';
//        text = text + record.get('Logo') + '<br/>'; 
        text = text + record.get('ValueStatement') + ''; 
//        text = text + record.get('DealsCount') + '<br/>'; 
//              
//        var keywords = record.data.Keywords;

//        for (i = 0; i <= keywords.length - 1; i = i + 1) {
//            text = text + keywords[i].Keyword + '<br/>';
//        }
//                
//        var locations = record.data.Locations;
//        text = text + '<i>Locations</i><br/>';
//        for (i = 0; i <= locations.length - 1; i = i + 1) {
//            text = text + locations[i].Location + ' : ' + locations[i].Lat  + ' : ' + locations[i].Lon  + '<br/>';
//        }
//                    
//        var deals = record.data.Deals;
//        text = text + '<i>Deals</i><br/>';
//        for (i = 0; i <= deals.length - 1; i = i + 1) {
//            text = text + deals[i].Deal + '<br/>';
//        }

//        var menus = record.data.Menus;
//        text = text + '<i>Menus</i><br/>';
//        for (i = 0; i <= menus.length - 1; i = i + 1) {
//            text = text + menus[i].Menu + '<br/>';
        //        }

        var DealText = this.getDealText();
        DealText.setHtml(text);
    }
});
