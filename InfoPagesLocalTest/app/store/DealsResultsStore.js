Ext.define('Mobile.store.DealsResultsStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Mobile.model.DealsResultsModel',
        //sorters: 'Name',

        pageSize: 10,
        autoLoad: false,

        proxy: {
            type: 'ajax',
            url: 'http://74.81.211.118/m.InfoPages/DesktopModules/WebApiInfoPagesLocal/API/InfoPagesLocal/DealsDataFeedGet',

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