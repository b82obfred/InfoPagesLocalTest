Ext.define('Mobile.controller.ListingsSearch', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            SearchField: '#ListingsSearchField',
            SearchFormPanel: '#ListingsSearchFormPanel'
        },

        control: {
            SearchField: {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },

            SearchFormPanel: {
                change: function (field, newValue, oldValue) {
                    console.log('deal formchange');

                    var value = Ext.getCmp('ListingsSearchField').getValue();
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

        var store = Ext.getCmp('ListingsResultsList').getStore();
        //var store = Ext.create('Mobile.store.ListingsResultsStore');

        //console.log(store.getProxy().getExtraParams());
        
        store.getProxy().setExtraParams({ 'q': value });

        //console.log(store.getProxy().getExtraParams());


        store.load();
        //console.log(store.data);

        var storeData = store.getData();
    },

    onSearchClearIconTap: function () {
        console.log('onSearchClearIconTap');

        Ext.getCmp('ListingsResultsList').getStore().clearFilter();
    }
});