Ext.define('Mobile.controller.SpatialSearch', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            SearchField: '#SpatialSearchField',
            SearchFormPanel: '#SpatialSearchFormPanel'
        },

        control: {
            SearchField: {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },

            SearchFormPanel: {
                change: function (field, newValue, oldValue) {
                    console.log('deal formchange');

                    var value = Ext.getCmp('SpatialSearchField').getValue();
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

        var store = Ext.getCmp('SpatialResultsList').getStore();
        //var store = Ext.create('Mobile.store.SpatialResultsStore');

        //console.log(store.getProxy().getExtraParams());
        
        store.getProxy().setExtraParams({ 'q': value });

        //console.log(store.getProxy().getExtraParams());
        

        store.load();

        var storeData = store.getData();

    },

    onSearchClearIconTap: function () {
        console.log('onSearchClearIconTap');

        Ext.getCmp('SpatialResultsList').getStore().clearFilter();
    }
});