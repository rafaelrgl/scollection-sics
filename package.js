Package.describe({
    name: 'rafaelrglima:scollection-sics',
    version: '0.0.3',
    // Brief, one-line summary of the package.
    summary: 'This package contains Static SIC Collection to use inside projects.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/rafaelrglima/scollection-sics',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.8.0.1');
    api.use('ecmascript');
    api.mainModule('_main.js', ['client', 'server']);
    api.addFiles('collections.js', ['client', 'server']);
    api.addFiles('server/_startup.js', 'server');
    api.addFiles('server/api.js', 'server');
    api.addFiles('client/main.js', 'client');

    api.addFiles('private/scollection-sics.json', 'server', {isAsset:true})

    api.use(['tracker', 'mongo', 'session', 'http', "nimble:restivus@0.8.12"]);
    api.export('SCollection', ['client', 'server']);
});
