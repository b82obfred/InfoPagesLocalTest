Ext.define('Mobile.store.SpatialResultsStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Mobile.model.SpatialResultsModel',
        sorters: 'Name',

        pageSize: 10,
        autoLoad: true,

        proxy: {
            type: 'ajax',
            url: 'http://wcf.refinedlogic.com/wcfinfopages/service/SpatialDataFeed/',

            pageParam: 'page',
            limitParam: 'rpp',
            
            extraParams: {
                q: '-122.760715 53.910431'
            },

            method: 'get',

            reader: {
                type: 'json',
            }
        }
    }
});