Ext.define('Mobile.model.SearchTermsMatching', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['Priority', 'Origin', 'SearchTerm'],
        belongsTo: 'Mobile.model.DealsResultsModel'
    }
});

Ext.define('Mobile.model.SearchTermsAll', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['Priority', 'Origin', 'SearchTerm'],
        belongsTo: 'Mobile.model.DealsResultsModel'
    }
});

Ext.define('Mobile.model.Deals', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['Deal', 'Image'],
        belongsTo: 'Mobile.model.DealsResultsModel'
    }
});

Ext.define('Mobile.model.Menus', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['Menu', 'Image'],
        belongsTo: 'Mobile.model.DealsResultsModel'
    }
});

Ext.define('Mobile.model.DealsResultsModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
        'Listing_Id',
        'Name',
        'Address',
        'Phone',
        'WebSite', 
        'Logo',
        'ValueStatement',
        'RedeemEmail',
        'LocationsRollup',
        'DealsCount',
        'SearchTermsMatching',
        'SearchTermsAll', 
        'Deals', 
        'Menus'],
        associations: [
            { type: 'hasMany', model: 'SearchTermsMatching', name: 'SearchTermsMatching' },
            { type: 'hasMany', model: 'SearchTermsAll', name: 'SearchTermsAll' },
            { type: 'hasMany', model: 'Deals', name: 'Deals' },
            { type: 'hasMany', model: 'Menus', name: 'Menus' }
        ]
    }
});
