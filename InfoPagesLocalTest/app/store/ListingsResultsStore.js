Ext.define('Mobile.store.ListingsResultsStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Mobile.model.ListingsResultsModel',
        sorters: 'Name',

        pageSize: 10,
        autoLoad: true,

        proxy: {
            type: 'ajax',
            url: 'http://wcf.refinedlogic.com/wcfinfopages/service/ListingsDataFeed/',

            pageParam: 'page',
            limitParam: 'rpp',
            
            extraParams: {
                q: 'infopages'
            },

            method: 'get',

            reader: {
                type: 'json',
            }
        }
    }
});