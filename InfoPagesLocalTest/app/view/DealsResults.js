Ext.define('Mobile.view.DealsResults', {
    extend: 'Ext.Container',
    xtype: 'DealsResults',
    id: 'DealsResults',

    config: {
        layout: { type: 'vbox' },
        defaults: { flex: 1 },
        
        items: [
            {
                xtype: 'dataview',
                id: 'DealsResultsList',
                baseCls: 'manage-list',
                style: 'font-size: 11px;',
                flex: 1,

                store: Ext.create('Mobile.store.DealsResultsStore'),

                emptyText: '<p class="no-searches">No results found matching that search</p>',
                autoLoad: false,

                itemTpl: Ext.create('Ext.XTemplate',
                    '<tpl for=".">',
                        '<table border=\"0\"><tr>',
                        '<td width=\"32px"\ height=\"32px\"><img src=\"{Logo}\" width=\"32px\" height=\"32px\"></img></td>',
                        '<td width=\"*"\>{Name}<br/>{ValueStatement}</td>',
                        '<td width=\"32px"\ height=\"32px\" class=\"List_Deal\" width=\"32px\" height=\"32px\"></img></td>',
                        '<td width=\"2px"\></td>',
                        '</tr></table>',
                    '</tpl>'
                ),

                //plugins: [
                //    { 
                //        xclass: 'Ext.plugin.ListPaging',
                //        loadMoreText: '<div style="height:60px;text-align:center;vertical-align:middle;background-color:yellow;border: 1px solid #BBBBBB;border-radius: 5px 5px 5px 5px;">Load More Deals...</div>',
                //        noMoreRecordsText: '<div style="height:60px;text-align:center;vertical-align:middle;background-color:yellow;border: 1px solid #BBBBBB;border-radius: 5px 5px 5px 5px;">End Of Deals</div>',
                //    }
                //],

                listeners: {
                    itemtap: function (view, index, item, e) {
                        var record = view.getStore().getAt(index);
                        console.log(record.data);

                        var dealsArray = [];
                        var dealsListArray = [];
                        var deals = record.data.Deals;
                        var dealsCount = record.data.DealsCount;

                        var menusArray = [];
                        var menus = record.data.Menus;
                        var menusCount = menus.length;

                        var tabsArray = [];

                        if (dealsCount != 0) {
                            tabsArray.push(
                            {
                                xtype: 'carousel',
                                id: 'DealsDetailsTabPanel_Deals_Carousel',
                                style: 'background-color:#1A5496;',
                                title: 'Deals',
                                iconCls: 'info',
                                items: [
                                    { html: 'DealsCarousel' }
                                ]
                            });
                        }

                        tabsArray.push(
                        {
                            xtype: 'container',
                            id: 'DealsDetailsTabPanel_Listings',
                            //style: 'background-color:#1A5496;',
                            scrollable: true,
                            title: 'Listing',
                            iconCls: 'download',
                            layout: { type: 'vbox', align: 'center' },
                            styleHtmlContent: 'true',
                            style: 'text-align:center;background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;',
                            items: [
                                {
                                    xtype: 'container',
                                    id: 'DealsDetailsTabPanel_Listings_Info',
                                    flex: 3,                                                                        
                                    html: ''
                                },
                                {
                                    xtype: 'toolbar',
                                    id: 'DealsDetailsTabPanel_Listings_ToolBar',
                                    ui: 'none',
                                    //docked: 'top',
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
                                    id: 'DealsDetailsTabPanel_Listings_ValueStatement',
                                    flex: 2,
                                    html: ''
                                },
                                {
                                    xtype: 'dataview',
                                    id: 'DealsDetailsTabPanel_Listings_DealsList',
                                    scrollable: false,
                                    flex: 3,
                                    width: '95%',
                                    store: {
                                        fields: ['deal'],
                                        data: []
                                    },

                                    itemTpl: '<div style="text-align:center;background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;"><b>{deal}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<image src="./resources/images/list_deal.png"/></div>',

                                    listeners: {
                                        itemtap: function (view, index, item, e) {
                                            var record = view.getStore().getAt(index);
                                            console.log(record.get('deal'));
                                            console.log(index);
                                            Ext.getCmp('DealsDetailsTabPanel').setActiveItem(0);
                                            Ext.getCmp('DealsDetailsTabPanel_Deals_Carousel').setActiveItem(index);
                                        }
                                    }
                                }
                            ]
                        });

                        if (menusCount != 0) {
                            tabsArray.push(
                            {
                                xtype: 'carousel',
                                id: 'DealsDetailsTabPanel_Menus_Carousel',
                                style: 'background-color:#1A5496;',
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
                            id: 'DealsDetailsTabPanel_Locations',
                            style: 'background-color:#1A5496;',
                            title: 'Map',
                            iconCls: 'favorites',
                            layout: { type: 'card' },
                            items: [
                                //{
                                //    xtype: 'image',
                                //    id: 'DealsDetailsTabPanel_Locations_StaticMap',
                                //    centered: true,
                                //    width: 320,
                                //    height: '98%',
                                //    style: 'background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;',
                                //    src: '',
                                //    flex: 1
                                //}
                                {
                                    xtype: 'image',
                                    id: 'DealsDetailsTabPanel_Locations_StaticMap',
                                    centered: true,
                                    width: 320,
                                    height: '98%',
                                    style: 'background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;',
                                    src: '',
                                    flex: 1
                                }
                            ]
                        });

                        tabsArray.push(
                        {
                            xtype: 'container',
                            id: 'DealsDetailsTabPanel_Redeem',
                            style: 'background-color:#1A5496;',
                            disabled: true,
                            layout: { type: 'card' },
                            title: 'Redeem',
                            iconCls: 'action',
                            items: [
                                {
                                    xtype: 'container',
                                    centered: true,
                                    width: 320,
                                    height: '98%',
                                    id: 'DealsDetailsTabPanel_Redeem_Text',
                                    flex: 1,
                                    html: ''
                                }
                            ]
                        });

                        tabsArray.push(
                        {
                            xtype: 'container',
                            id: 'DealsDetailsTabPanel_Share',
                            style: 'background-color:#1A5496;',
                            disabled: true,
                            layout: { type: 'card' },
                            title: 'Share',
                            iconCls: 'action',
                            items: [
                                {
                                    xtype: 'container',
                                    centered: true,
                                    width: 320,
                                    height: '98%',
                                    id: 'DealsDetailsTabPanel_Share_Text',
                                    flex: 1,
                                    html: ''
                                }
                            ]
                        });

                        //                        console.log(tabsArray);

                        

                        var tabs = [];
                        tabs.push(
                            {
                                xtype: 'tabpanel',
                                id: 'DealsDetailsTabPanel',
                                ui: 'customdeals',
                                style: 'background-color:#1A5496;',
                                tabBar: {
                                    docked: 'bottom',
                                    height: 55
                                },

                                activeTab: 0,
                                layoutOnTabChange: true,
                                flex: 1,
                                items: tabsArray,
                                listeners: {
                                    activeitemchange: function (tabPanel, tab, oldTab) {
                                        if (tabPanel.rendered) {
                                            console.log('rendered');
                                            console.log('Current tab: ' + tab.config.title);

                                            if (tab.config.title == 'Deals') {
                                                Ext.getCmp('DealsDetailsTabPanel_Redeem').setDisabled(false);
                                                Ext.getCmp('DealsDetailsTabPanel_Share').setDisabled(false);
                                            }
                                            if (tab.config.title == 'Redeem') {
                                                Ext.getCmp('DealsDetailsTabPanel_Redeem').setDisabled(false);
                                                Ext.getCmp('DealsDetailsTabPanel_Share').setDisabled(false);

                                                var currentIndex = Ext.getCmp('DealsDetailsTabPanel_Deals_Carousel').getActiveIndex();
                                                console.log('redeem:' + currentIndex);

                                                var deal = deals[currentIndex].Deal
                                                var dealId = deals[currentIndex].DealId

                                                Ext.Ajax.request({
                                                    url: 'http://74.81.211.118/InfoPagesLocal/Test/Redeem.aspx?Type=Deals&DealID=' + dealId,

                                                    success: function (response) {
                                                        console.log("Success");
                                                        console.log("dealId=" + dealId);
                                                        var redeemHtml = '<div style="text-align:center;vertical-align:middle;background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;height:98%"><b>Redeem</b><br/><b>' + deal + '</b></div>';
                                                        Ext.getCmp('DealsDetailsTabPanel_Redeem_Text').setHtml(redeemHtml);
                                                    },

                                                    failure: function (response) {
                                                        console.log("Failure");
                                                    },

                                                    callback: function (response) {
                                                        console.log("Callback");
                                                    }
                                                });
                                            }
                                            if (tab.config.title == 'Share') {
                                                Ext.getCmp('DealsDetailsTabPanel_Redeem').setDisabled(false);
                                                Ext.getCmp('DealsDetailsTabPanel_Share').setDisabled(false);

                                                var currentIndex = Ext.getCmp('DealsDetailsTabPanel_Deals_Carousel').getActiveIndex();
                                                console.log('share:' + currentIndex);

                                                var deal = deals[currentIndex].Deal
                                                var dealId = deals[currentIndex].DealId

                                                Ext.Ajax.request({
                                                    url: 'http://74.81.211.118/InfoPagesLocal/Test/Share.aspx?Type=Deals&DealId=' + dealId,

                                                    success: function (response) {
                                                        console.log("Success");
                                                        console.log("dealId=" + dealId);
                                                        var shareHtml = '<div style="text-align:center;vertical-align:middle;background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;height:98%"><b>Share</b><br/><b>' + deal + '</b><br/><a href="mailto:deal@share-it.com?subject=TestSubject&body=' + deal + '">Send Mail</a></div>';
                                                        Ext.getCmp('DealsDetailsTabPanel_Share_Text').setHtml(shareHtml);                                                    
                                                    },

                                                    failure: function (response) {
                                                        console.log("Failure");
                                                    },

                                                    callback: function (response) {
                                                        console.log("Callback");
                                                    }
                                                });
                                            }
                                            if (tab.config.title == 'Listing' || tab.config.title == 'Menus') {
                                                Ext.getCmp('DealsDetailsTabPanel_Redeem').setDisabled(true);
                                                Ext.getCmp('DealsDetailsTabPanel_Share').setDisabled(true);
                                            }
                                        }
                                        else {
                                            console.log('not rendered');
                                        }
                                    }
                                }
                            }
                        );

                        Ext.getCmp('DealsDetails').removeAt(0);
                        if (Ext.getCmp('DealsDetailsTabPanel')) {
                            console.log('already exists');
                            Ext.getCmp('DealsDetailsTabPanel').remove();
                        }
                        else {
                            console.log('not yet created');
                        }                        
                        Ext.getCmp('DealsDetails').add(tabs);

                        var listingsHtml = '<b>' + record.data.Name + '</b><br/><b>' + record.data.Phone + '</b><br/>' + record.data.Address + '<br/>';
                        Ext.getCmp('DealsDetailsTabPanel_Listings_Info').setHtml(listingsHtml);
                        var valueStatement = '<b>' + record.data.ValueStatement + '<b/>';
                        Ext.getCmp('DealsDetailsTabPanel_Listings_ValueStatement').setHtml(valueStatement);

                        if (dealsCount != 0) {
                            for (i = 1; i <= dealsCount; i = i + 1) {
                                dealsArray.push(
                                    {
                                        xtype: 'container',
                                        items: [
                                            { xtype: 'image', src: deals[i - 1].Image, centered: true, width: 320, height: '98%', style: 'background-color:gainsboro;border: 1px solid #BBBBBB;border-radius: 10px 10px 10px 10px;', flex: 1 }
                                        ]
                                    }
                                );
                            }
                            Ext.getCmp('DealsDetailsTabPanel_Redeem').setDisabled(false);
                            Ext.getCmp('DealsDetailsTabPanel_Share').setDisabled(false);

                            Ext.getCmp('DealsDetailsTabPanel_Deals_Carousel').setItems(dealsArray);
                            Ext.getCmp('DealsDetailsTabPanel_Deals_Carousel').setActiveItem(0);
                        }

                        if (dealsCount != 0) {
                            for (i = 1; i <= dealsCount; i = i + 1) {
                                var deal = deals[i - 1].Deal;
                                dealsListArray.push(
                                    { deal: deal }
                                );
                            }
                            Ext.getCmp('DealsDetailsTabPanel_Listings_DealsList').setData(dealsListArray);
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
                            Ext.getCmp('DealsDetailsTabPanel_Menus_Carousel').setItems(menusArray);
                            Ext.getCmp('DealsDetailsTabPanel_Menus_Carousel').setActiveItem(0);
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

                        var locationLink = '<a href=\"' + linkurl + '\" target=\"_blank\" ><img src=\"' + url + '\" /></a>';

                        Ext.getCmp('DealsDetailsTabPanel_Locations_StaticMap').setHtml(locationLink);
                        
                        //var geo = Ext.create('Ext.util.Geolocation', {
                        //    autoUpdate: false,
                        //    listeners: {
                        //        locationupdate: function (geo) {

                        //            var url = 'http://maps.googleapis.com/maps/api/staticmap?size=320x260';

                        //            url = url + record.data.LocationsRollup;

                        //            console.log('Current Location: ' + geo.getLatitude() + ':' + geo.getLongitude());

                        //            url = url + '&markers=color:blue%7Clabel:';
                        //            url = url + 'CurrentLocation';
                        //            url = url + '%7C';
                        //            url = url + geo.getLatitude();
                        //            url = url + ',';
                        //            url = url + geo.getLongitude();

                        //            url = url + '&sensor=false';
                        //            console.log(url);
                        //            alert(url);

                        //            var locationLink = '<a href=\"' + url + '\" ><img src=\"' + url + '\" /></a>';

                        //            Ext.getCmp('DealsDetailsTabPanel_Locations_StaticMap').setHtml(locationLink);
                        //        },
                        //        locationerror: function (geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                        //            if (bTimeout) {
                        //                alert('Timeout occurred.');
                        //            } else {
                        //                alert('Error occurred.');
                        //            }
                        //        }
                        //    }
                        //});
                        //geo.updateLocation();

                        Ext.getCmp('DealsPanels').setActiveItem(2);
                    }
                },

                useComponents: true,
                cls: 'manage-list',
                defaultType: 'DealsResultsTemplate'
            }
        ]
    }
});

