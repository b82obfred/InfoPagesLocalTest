Ext.define('Mobile.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: '#Main',
            homeDeals: '#Home_Deals',
            homeListings: '#Home_Listings',
            DealsSearchFormPanel: '#DealsSearchFormPanel',
            ListingsSearchFormPanel: '#ListingsSearchFormPanel'
        },

        routes: {
            ':id': 'showViewById',
            'Deals/:search': 'showDealsBySearch',
            'Listings/:search': 'showListingsBySearch'
        },

        control: {
            mainView: {
                activeitemchange: 'onMainViewActiveItemChange'
            },
            DealsSearchFormPanel: {
                change: function (field, newValue, oldValue) {
                    var value = Ext.getCmp('DealsSearchField').getValue();
                    this.addToHistory('Deals/' + value);
                    $.jStorage.set('search', value);
                    //alert('init jstorage get search ' + value);
                }
            },
            ListingsSearchFormPanel: {
                change: function (field, newValue, oldValue) {
                    var value = Ext.getCmp('ListingsSearchField').getValue();
                    this.addToHistory('Listings/' + value);
                    $.jStorage.set('search', value);
                    //alert('init jstorage get search ' + value);
                }
            }
        },

        history: null
    },

    init: function () {
        this.setHistory(this.getApplication().getHistory());
    },

    launch: function () {
        var id = $.jStorage.get("id");
        var search = $.jStorage.get("search");
        if (!id) {
            //alert('init no jstorage id found');
        }
        else {
            //alert('init jstorage get id ' + id);
            var mainView = this.getMainView();
            Ext.each(mainView.getInnerItems(), function (item) {
                if (item.getId() == id) {
                    mainView.setActiveItem(item);
                }
            });

            //alert('set active item to ' + id);
        }
        if (!search) {
            //alert('init no jstorage search found');
        }
        else {
            //alert('init jstorage get search ' + search);
            if (id == 'Deals') {
                this.showDealsBySearch(search);
            }
            if (id == 'Listings') {
                this.showListingsBySearch(search);
            }

            //alert('set search to ' + search);
        }
    },

    addToHistory: function (id) {
        this.getHistory().add(new Ext.app.Action({ url: id }), true);
    },

    onMainViewActiveItemChange: function (comp, activeItem, oldItem) {
        if (Ext.isDefined(oldItem)) {
            var id = activeItem.getId();
            this.addToHistory(id);
            $.jStorage.set('id', id);
            //alert('main view changed jstorage set ' + $.jStorage.get("id"));
        }
    },

    showViewById: function (id) {
        var mainView = this.getMainView();

        Ext.each(mainView.getInnerItems(), function (item) {
            if (item.getId() == id) {
                mainView.setActiveItem(item);
            }
        });
    },

    showDealsBySearch: function (search) {
        $.jStorage.set('search', search);
        //alert('deals search changed jstorage set search ' + $.jStorage.get("search"));
        this.addToHistory('Deals/' + search);
        
        var record = Ext.create('Mobile.model.DealsSearchModel', {
            DealsSearchField: search
        });

        Ext.getCmp('DealsSearchFormPanel').setRecord(record);

        Ext.getCmp('DealsSearchFormPanel').fireEvent('change');
    },

    showListingsBySearch: function (search) {
        $.jStorage.set('search', search);
        //alert('listings search changed jstorage set search ' + $.jStorage.get("search"));
        this.addToHistory('Listings/' + search);

        var record = Ext.create('Mobile.model.ListingsSearchModel', {
            ListingsSearchField: search
        });

        Ext.getCmp('ListingsSearchFormPanel').setRecord(record);

        Ext.getCmp('ListingsSearchFormPanel').fireEvent('change');
    }
});