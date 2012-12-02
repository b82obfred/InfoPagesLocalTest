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
        
        store.getProxy().setExtraParams({ 'q': value });

        //console.log(store.getProxy().getExtraParams());
        

        store.load();

        var storeData = store.getData();

    },

    onSearchClearIconTap: function () {
        console.log('onSearchClearIconTap');

        Ext.getCmp('DealsResultsList').getStore().clearFilter();
    }
});