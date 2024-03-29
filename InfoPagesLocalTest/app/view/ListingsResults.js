Ext.define('Mobile.view.ListingsResults', {
    extend: 'Ext.Container',
    xtype: 'ListingsResults',
    id: 'ListingsResults',

    config: {
        layout: { type: 'vbox' },
        defaults: { flex: 1 },
        styleHtmlContent: 'true',
        style: 'background-color:gainsboro;',

        items: [
            {
                xtype: 'dataview',
                id: 'ListingsResultsList',
                style: 'font-size: 10px;',
                flex: 1,

                store: Ext.create('Mobile.store.ListingsResultsStore'),

                emptyText: '<p class="no-searches">No results found matching that search</p>',
                autoLoad: false,

                itemTpl: Ext.create('Ext.XTemplate',
                    '<tpl for=".">',
                        '<div style=\"height:60px;text-align:center;vertical-align:middle;background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 5px 5px 5px 5px;\">',
                        '<table border=\"0\"><tr>',
                        '<td width=\"60px"\ height=\"60px\"><img src=\"{Logo}\" width=\"32px\" height=\"32px\"></img></td>',
                        '<td width=\"*"\ height=\"60px\">{Name} ({DealsCount})<br/>{Phone}</td>',
                        '<tpl if="DealsCount &gt; 0">',
                            '<td width=\"60px"\ height=\"60px\"><img class=\"List_Deal\" width=\"32px\" height=\"32px\"></img></td>',
                        '</tpl>',
                        '<tpl if="DealsCount == 0">',
                            '<td width=\"60px"\ height=\"60px\">&nbsp;</td>',
                        '</tpl>',
                                   
                        '</tr></table>',
                        '</div>',
                    '</tpl>'
                ),

                plugins: [
                    { 
                        xclass: 'Ext.plugin.ListPaging',
                        loadMoreText: '<div style="height:60px;text-align:center;color:#643d87;vertical-align:middle;background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 5px 5px 5px 5px;"><table border=\"0\" height=\"60px\"><tr><td>Load More Listings...</td></tr></table></div>',
                        noMoreRecordsText: '<div style="height:60px;text-align:center;color:#643d87;vertical-align:middle;background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 5px 5px 5px 5px;">End Of Listings</div>'
                    }
                ],

                listeners: {
                    itemtap: function (view, index, item, e) {
                        var record = view.getStore().getAt(index);
                        //console.log(record.data);

                        var dealsArray = [];
                        var dealsListArray = [];
                        var deals = record.data.Deals;
                        var dealsCount = record.data.DealsCount;

                        var menusArray = [];
                        var menus = record.data.Menus;
                        var menusCount = menus.length;

                        var tabsArray = [];

                        tabsArray.push(
                        {
                            xtype: 'container',
                            id: 'ListingsDetailsTabPanel_Listings',
                            //style: 'background-color:#643d87;',
                            scrollable: true,
                            title: 'Listing',
                            iconCls: 'download',
                            layout: { type: 'vbox', align: 'center' },
                            styleHtmlContent: 'true',
                            style: 'text-align:center;background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;',
                            items: [
                                {
                                    xtype: 'container',
                                    id: 'ListingsDetailsTabPanel_Listings_Info',
                                    flex: 3,
                                    html: ''
                                },
                                {
                                    xtype: 'toolbar',
                                    id: 'ListingsDetailsTabPanel_Listings_ToolBar',
                                    ui: 'none',
                                    docked: 'bottom',
                                    items: [
                                        {
                                            ui: 'confirm',
                                            width: 80,
                                            height: 30,
                                            text: 'CALL ',
                                            handler: function () {
                                                //console.log('call:' + record.data.Phone);
                                                Ext.util.openLink('tel:' + record.data.Phone);
                                            }
                                        },
                                        {
                                            xtype: 'spacer'
                                        },
                                        {
                                            ui: 'confirm',
                                            width: 80,
                                            height: 30,
                                            text: 'WEBSITE ',
                                            handler: function () {
                                                //console.log('website:' + record.data.WebSite);
                                                Ext.util.openLink('http://' + record.data.WebSite);
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'spacer'
                                },
                                {
                                    xtype: 'container',
                                    id: 'ListingsDetailsTabPanel_Listings_ValueStatement',
                                    flex: 2,
                                    html: ''
                                },
                                {
                                    xtype: 'dataview',
                                    id: 'ListingsDetailsTabPanel_Listings_DealsList',
                                    scrollable: false,
                                    flex: 3,
                                    width: '95%',
                                    store: {
                                        fields: ['deal'],
                                        data: []
                                    },

                                    itemTpl: '<div style="text-align:center;vertical-align:middle;background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;height:40px;"><b>{deal}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<image src="./resources/images/list_deal.png"/></div>',

                                    listeners: {
                                        itemtap: function (view, index, item, e) {
                                            var record = view.getStore().getAt(index);
                                            console.log(record.get('deal'));
                                            console.log(index);
                                            Ext.getCmp('ListingsDetailsTabPanel').setActiveItem(1);
                                            Ext.getCmp('ListingsDetailsTabPanel_Deals_Carousel').setActiveItem(index);
                                        }
                                    }
                                }
                            ]
                        });

                        if (dealsCount != 0) {
                            tabsArray.push(
                            {
                                xtype: 'container',
                                id: 'ListingsDetailsTabPanel_Deals',
                                //style: 'background-color:#643d87;',
                                scrollable: false,
                                title: 'Deals',
                                iconCls: 'info',
                                layout: { type: 'vbox', align: 'center' },
                                styleHtmlContent: 'true',
                                style: 'text-align:center;background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;',                                
                                items: [
                                    {
                                        xtype: 'carousel',
                                        id: 'ListingsDetailsTabPanel_Deals_Carousel',
                                        flex: 1,
                                        width: '100%',
                                        //fullscreen: true,
                                        defaults: {
                                            styleHtmlContent: true
                                        },
                                        items: [
                                            { html: 'DealsCarousel' }
                                        ]
                                    },
                                    {
                                        xtype: 'toolbar',
                                        id: 'ListingsDetailsTabPanel_Deals_ToolBar',
                                        ui: 'none',
                                        docked: 'bottom',
                                        items: [
                                            {
                                                ui: 'confirm',
                                                width: 80,
                                                height: 30,
                                                text: 'REDEEM ',
                                                handler: function () {
                                                    //console.log('call:' + record.data.Phone);
                                                    var currentIndex = Ext.getCmp('ListingsDetailsTabPanel_Deals_Carousel').getActiveIndex();
                                                    console.log('redeem:' + currentIndex);

                                                    var deal = deals[currentIndex].Deal;
                                                    var dealId = deals[currentIndex].DealId;

                                                    Ext.Ajax.request({
                                                        url: 'http://74.81.211.118/InfoPagesLocal/Test/Redeem.aspx?Type=Listings&DealId=' + dealId,

                                                        success: function (response) {
                                                            console.log("Success");
                                                            Ext.util.openLink('http://74.81.211.118/InfoPagesLocal/Test/RedeemSuccess.aspx?Type=Listings&DealId=' + dealId);
                                                        },

                                                        failure: function (response) {
                                                            console.log("Failure");
                                                        },

                                                        callback: function (response) {
                                                            console.log("Callback");
                                                        }
                                                    });
                                                }
                                            },
                                            {
                                                xtype: 'spacer'
                                            },
                                            {
                                                ui: 'confirm',
                                                width: 80,
                                                height: 30,
                                                text: 'SHARE ',
                                                handler: function () {
                                                    //console.log('website:' + record.data.WebSite);
                                                    var currentIndex = Ext.getCmp('ListingsDetailsTabPanel_Deals_Carousel').getActiveIndex();
                                                    console.log('share:' + currentIndex);

                                                    var deal = deals[currentIndex].Deal;
                                                    var dealId = deals[currentIndex].DealId;

                                                    Ext.Ajax.request({
                                                        url: 'http://74.81.211.118/InfoPagesLocal/Test/Share.aspx?Type=Listings&DealId=' + dealId,

                                                        success: function (response) {
                                                            console.log("Success");
                                                            //Ext.util.openLink('http://74.81.211.118/InfoPagesLocal/Test/ShareSuccess.aspx?Type=Listings&DealId=' + dealId);
                                                            Ext.util.openLink('mailto:deal@share-it.com?subject=TestSubject&body=' + deal);
                                                        },

                                                        failure: function (response) {
                                                            console.log("Failure");
                                                        },

                                                        callback: function (response) {
                                                            console.log("Callback");
                                                        }
                                                    });
                                                }
                                            }
                                        ]
                                    }
                                ]
                            });
                        }

                        if (menusCount != 0) {
                            tabsArray.push(
                            {
                                xtype: 'carousel',
                                id: 'ListingsDetailsTabPanel_Menus_Carousel',
                                style: 'background-color:#643d87;',
                                title: 'Menus',
                                iconCls: 'settings',
                                items: [
                                    { html: 'MenusCarousel' }
                                ]
                            });
                        }

                        tabsArray.push(
                        {
                            xtype: 'container',
                            id: 'ListingsDetailsTabPanel_Locations',
                            style: 'background-color:#643d87;',
                            title: 'Map',
                            iconCls: 'favorites',
                            layout: { type: 'card' },
                            items: [
                                {
                                    xtype: 'image',
                                    id: 'ListingsDetailsTabPanel_Locations_StaticMap',
                                    centered: true,
                                    width: 320,
                                    height: '98%',
                                    style: 'background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;',
                                    src: '',
                                    flex: 1
                                }
                            ]
                        });

                        var tabs = [];
                        tabs.push(
                            {
                                xtype: 'tabpanel',
                                id: 'ListingsDetailsTabPanel',
                                ui: 'customlistings',
                                style: 'background-color:#643d87;',
                                tabBar: {
                                    docked: 'bottom',
                                    height: 55
                                },

                                activeTab: 0,
                                layoutOnTabChange: true,
                                flex: 1,
                                items: tabsArray
                            }
                        );

                        Ext.getCmp('ListingsDetails').removeAt(0);
                        if (Ext.getCmp('ListingsDetailsTabPanel')) {
                            console.log('already exists');
                            Ext.getCmp('ListingsDetailsTabPanel').remove();
                        }
                        else {
                            console.log('not yet created');
                        }
                        Ext.getCmp('ListingsDetails').add(tabs);

                        var listingsHtml = '<b>' + record.data.Name + '</b><br/><b>' + record.data.Phone + '</b><br/>' + record.data.Address + '<br/>';
                        Ext.getCmp('ListingsDetailsTabPanel_Listings_Info').setHtml(listingsHtml);
                        var valueStatement = '<b>' + record.data.ValueStatement + '<b/>';
                        Ext.getCmp('ListingsDetailsTabPanel_Listings_ValueStatement').setHtml(valueStatement);

                        if (dealsCount != 0) {
                            for (i = 1; i <= dealsCount; i = i + 1) {
                                dealsArray.push(
                                    {
                                        xtype: 'container',
                                        items: [
                                            { xtype: 'image', src: deals[i - 1].Image, centered: true, width: '100%', height: '100%', style: 'background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;', flex: 1 }
                                        ]
                                    }
                                );                                
                            }
                            Ext.getCmp('ListingsDetailsTabPanel_Deals_Carousel').setItems(dealsArray);
                            Ext.getCmp('ListingsDetailsTabPanel_Deals_Carousel').setActiveItem(0);
                        }

                        if (dealsCount != 0) {
                            for (i = 1; i <= dealsCount; i = i + 1) {
                                var deal = deals[i - 1].Deal;
                                dealsListArray.push(
                                    { deal: deal }
                                );
                            }
                            Ext.getCmp('ListingsDetailsTabPanel_Listings_DealsList').setData(dealsListArray);
                        }

                        if (menusCount != 0) {
                            for (i = 1; i <= menusCount; i = i + 1) {
                                menusArray.push(
                                    {
                                        xtype: 'container',
                                        items: [
                                            { xtype: 'image', src: menus[i - 1].Image, centered: true, width: 320, height: '98%', style: 'background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;', flex: 1 }
                                        ]
                                    }
                                );
                            }
                            Ext.getCmp('ListingsDetailsTabPanel_Menus_Carousel').setItems(menusArray);
                            Ext.getCmp('ListingsDetailsTabPanel_Menus_Carousel').setActiveItem(0);
                        }

                        var url = 'http://maps.googleapis.com/maps/api/staticmap?size=320x260';

                        url = url + record.data.LocationsRollup;

                        console.log('Current Location: ' + Mobile.globalLat + ':' + Mobile.globalLon);

                        url = url + '&markers=color:blue%7Clabel:';
                        url = url + 'CurrentLocation';
                        url = url + '%7C';
                        url = url + Mobile.globalLat;
                        url = url + ',';
                        url = url + Mobile.globalLon;

                        url = url + '&sensor=false';
                        console.log(url);
                        //alert(url);

                        var linkurl = "http://maps.google.com/maps?q=" + record.data.Address;

                        var locationLink = '<a href=\"' + linkurl + '\" target=\"blank\" ><img src=\"' + url + '\" /></a>';

                        Ext.getCmp('ListingsDetailsTabPanel_Locations_StaticMap').setHtml(locationLink);

                        Ext.getCmp('ListingsPanels').setActiveItem(2);                                                
                    }
                }                
            }
        ]
    }
});