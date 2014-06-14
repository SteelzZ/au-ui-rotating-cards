Package.describe({
  summary: "Rotating cards project template"
});

Package.on_use(function (api, where) {
    api.use(['au-cmsinn',], ['client', 'server']);
    api.use(['jquery', 'bootstrap-3', 'templating'], ['client']);
    api.add_files([
        'assets/images/loader.gif',

        'client/styles/rotating-card.css',

        'client/views/templates/loading.html',
        'client/views/templates/layout.html',
        'client/views/templates/home.html',

        'config.js',
    ], ['client', 'server']);
});

Package.on_test(function (api) {
});
