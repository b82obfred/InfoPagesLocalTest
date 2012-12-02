Ext.define('Mobile.view.ListingsResults', {
    extend: 'Ext.Container',
    xtype: 'ListingsResults',
    id: 'ListingsResults',

    config: {
        layout: { type: 'vbox' },
        defaults: { flex: 1 },

        items: [
            {
                xtype: 'list',
                id: 'ListingsResultsList',
                ui: 'round',
                flex: 1,
                style: 'font: 8px;',

                store: Ext.create('Mobile.store.ListingsResultsStore'),

                emptyText: '<p class="no-searches">No listings results found matching that search</p>',
                autoLoad: true,

                itemTpl: Ext.create('Ext.XTemplate',
                    '<tpl for=".">',
                        '<table border=\"0\">',
                        '<tr>',
                        '<td valign=top width=100%>',
                            '<table border=\"1\">',
                                '<tr><td colspan=2 bgcolor=gainsboro>Details</td></tr>',
                                '<tr><td><b>Address</b></td><td>{Address}</td></tr>',
                                '<tr><td><b>Phone</b></td><td>{Phone}</td></tr>',
                                '<tr><td><b>WebSite</b></td><td>{WebSite}</td></tr>',
                                '<tr><td><b>ValueStatement</b></td><td>{ValueStatement}</td></tr>',
                                '<tr><td><b>RedeemEmail</b></td><td>{RedeemEmail}</td></tr>',
                                '<tr><td><b>LocationsRollup</b></td><td>{LocationsRollup}</td></tr>',
                                '<tr><td><b>DealsCount</b></td><td>{DealsCount}</td></tr>',
                                '<tr><td><b>Logo</b></td><td><img src=\"{Logo}\" width=\"32px\" height=\"32px\"></img></td></tr>',
                                '<tr><td colspan=2>',
                                    '<table border=\"0\">',
                                    '<tr>',
                                        '<td valign=top width=25%>',
                                            '<table border=\"1\">',
                                                '<tr><td colspan=3 bgcolor=gainsboro>SearchTermsMatching</td></tr>',
                                                '<tr><td><b>Origin</b></td><td><b>Priority</b></td><td><b>SearchTerm</b></td></tr>',
                                                '<tpl for="SearchTermsMatching">',
                                                    '<tr><td>{Origin}</td><td>{Priority}</td><td>{SearchTerm}</td></tr>',
                                                '</tpl>',
                                            '</table>',
                                        '</td>',
                                        '<td valign=top width=25%>',
                                            '<table border=\"1\">',
                                                '<tr><td colspan=3 bgcolor=gainsboro>SearchTermsAll</td></tr>',
                                                '<tr><td><b>Origin</b></td><td><b>Priority</b></td><td><b>SearchTerm</b></td></tr>',
                                                '<tpl for="SearchTermsMatching">',
                                                    '<tr><td>{Origin}</td><td>{Priority}</td><td>{SearchTerm}</td></tr>',
                                                '</tpl>',
                                            '</table>',
                                        '</td>',
                                        '<td valign=top width=25%>',
                                            '<table border=\"1\">',
                                                '<tr><td colspan=2 bgcolor=gainsboro>Deals</td></tr>',
                                                '<tr><td><b>Deal</b></td><td><b>Image</b></td></tr>',
                                                '<tpl for="Deals">',
                                                    '<tr><td>{Deal}</td><td><img src=\"{Image}\" width=\"32px\" height=\"32px\"></img></td></tr>',
                                                '</tpl>',
                                            '</table>',
                                        '</td>',
                                        '<td valign=top width=25%>',
                                            '<table border=\"1\">',
                                                '<tr><td colspan=2 bgcolor=gainsboro>Menus</td></tr>',
                                                '<tr><td><b>Menu</b></td><td><b>Image</b></td></tr>',
                                                '<tpl for="Menus">',
                                                    '<tr><td>{Menu}</td><td><img src=\"{Image}\" width=\"32px\" height=\"32px\"></img></td></tr>',
                                                '</tpl>',
                                            '</table>',
                                        '</td>',
                                    '</tr>',
                                    '</table>',
                                '</td></tr>',
                            '</table>',
                        '</td>',
                        '</tr>',
                        '</table>',
                    '</tpl>'
                ),

                plugins: [
                    { xclass: 'Ext.plugin.ListPaging' }
                ]
            }
        ]
    }
});