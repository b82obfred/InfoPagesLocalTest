Ext.define('Mobile.store.TestResultsStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Mobile.model.TestResultsModel',
        sorters: 'Name',

        pageSize: 10,
        autoLoad: true,

        proxy: {
            type: 'ajax',
            url: 'http://wcf.refinedlogic.com/wcfinfopages/service/TestDataFeed/',

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