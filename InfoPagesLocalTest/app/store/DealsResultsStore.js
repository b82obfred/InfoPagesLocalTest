Ext.define('Mobile.store.DealsResultsStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Mobile.model.DealsResultsModel',
        sorters: 'Name',

        pageSize: 10,
        autoLoad: true,

        proxy: {
            type: 'ajax',
            url: 'http://wcf.refinedlogic.com/wcfinfopages/service/DealsDataFeed/',

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