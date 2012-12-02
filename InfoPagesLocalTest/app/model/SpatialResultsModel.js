﻿Ext.define('Mobile.model.Deals', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['Deal', 'Image'],
        belongsTo: 'Mobile.model.SpatialResultsModel'
    }
});

Ext.define('Mobile.model.Menus', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['Menu', 'Image'],
        belongsTo: 'Mobile.model.SpatialResultsModel'
    }
});

Ext.define('Mobile.model.SpatialResultsModel', {
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
        'Deals', 
        'Menus'],
        associations: [
            { type: 'hasMany', model: 'Deals', name: 'Deals' },
            { type: 'hasMany', model: 'Menus', name: 'Menus' }
        ]
    }
});
