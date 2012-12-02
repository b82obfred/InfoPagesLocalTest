Ext.define('Mobile.controller.TestSearch', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            SearchField: '#TestSearchField',
            SearchFormPanel: '#TestSearchFormPanel'
        },

        control: {
            SearchField: {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },

            SearchFormPanel: {
                change: function (field, newValue, oldValue) {
                    console.log('test formchange');

                    var value = Ext.getCmp('TestSearchField').getValue();
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

        var store = Ext.getCmp('TestResultsList').getStore();
        //var store = Ext.create('Mobile.store.DealsResultsStore');

        //console.log(store.getProxy().getExtraParams());
        
        store.getProxy().setExtraParams({ 'q': value });

        //console.log(store.getProxy().getExtraParams());
        

        store.load();

        var storeData = store.getData();
    },

    onSearchClearIconTap: function () {
        console.log('onSearchClearIconTap');

        Ext.getCmp('TestResultsList').getStore().clearFilter();
    }
});