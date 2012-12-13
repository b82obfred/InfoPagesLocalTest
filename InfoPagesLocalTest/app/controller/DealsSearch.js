Ext.define('Mobile.controller.DealsSearch', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            SearchField: '#DealsSearchField',
            SearchFormPanel: '#DealsSearchFormPanel'
        },

        control: {
            SearchField: {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },

            SearchFormPanel: {
                change: function (field, newValue, oldValue) {
                    console.log('deal formchange');

                    var value = Ext.getCmp('DealsSearchField').getValue();
                    console.log('value:' + value);

                    this.onSearch(value);

                }
            }
        }
    },

    onSearchKeyUp: function (field) {
        console.log('onSearchKeyUp');

        var value = field.getValue();
        console.log('value:' + value);
        this.onSearch(value);
    },

    onSearch: function (value) {
        console.log('onSearch');        

        var store = Ext.getCmp('DealsResultsList').getStore();
        //var store = Ext.create('Mobile.store.DealsResultsStore');

        //console.log(store.getProxy().getExtraParams());

        if (value == 'NearMe') {
            console.log('add lonlat to search');
            //alert('add lonlat to search');

            var geo = Ext.create('Ext.util.Geolocation', {
                autoUpdate: false,
                listeners: {
                    locationupdate: function (geo) {
                        value = 'NearMe ' + geo.getLongitude() + ' ' + geo.getLatitude();
                        //alert(value);

                        //geolocation success
                        store.getProxy().setExtraParams({ 'q': 'NearMe ' + geo.getLongitude() + ' ' + geo.getLatitude() });
                        console.log(store.getProxy().getExtraParams());

                        store.load();

                        var storeData = store.getData();

                        Ext.getCmp('DealsPanels').setActiveItem(1);
                    },
                    locationerror: function (geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                        if (bTimeout) {
                            alert('Timeout occurred.');
                        } else {
                            alert('Error occurred.');
                        }
                        //geolocation error use infopages lonlat
                        store.getProxy().setExtraParams({ 'q': 'NearMe -122.747584 53.915042' });
                        console.log(store.getProxy().getExtraParams());

                        store.load();

                        var storeData = store.getData();

                        Ext.getCmp('DealsPanels').setActiveItem(1);
                    }
                }
            });
            geo.updateLocation();
        }
        else {
            if (value.length >= 1) {
                store.removeAll();
                store.getProxy().setExtraParams({ 'q': value });
                console.log(store.getProxy().getExtraParams());
                store.load();
            }

            //var storeData = store.getData();

            Ext.getCmp('DealsPanels').setActiveItem(1);
        }



    },

    onSearchClearIconTap: function () {
        console.log('onSearchClearIconTap');

        Ext.getCmp('DealsResultsList').getStore().clearFilter();
    }
});