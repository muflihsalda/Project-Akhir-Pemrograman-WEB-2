<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->get('/', 'Home::index');

$routes->group('api', function ($routes) {

$routes->options('(:any)', static function () {
    return service('response')->setStatusCode(200);
});

    // LOGIN
    $routes->post('login', 'Api\Auth::login');

    // =====================
    // KATEGORI
    // =====================

    $routes->get('kategori', 'Api\Kategori::index');
    $routes->get('kategori/(:num)', 'Api\Kategori::show/$1');

    $routes->post('kategori', 'Api\Kategori::create', ['filter' => 'auth']);
    $routes->put('kategori/(:num)', 'Api\Kategori::update/$1', ['filter' => 'auth']);
    $routes->delete('kategori/(:num)', 'Api\Kategori::delete/$1', ['filter' => 'auth']);

    // =====================
    // SUPPLIER
    // =====================

    $routes->get('supplier', 'Api\Supplier::index');
    $routes->get('supplier/(:num)', 'Api\Supplier::show/$1');

    $routes->post('supplier', 'Api\Supplier::create', ['filter' => 'auth']);
    $routes->put('supplier/(:num)', 'Api\Supplier::update/$1', ['filter' => 'auth']);
    $routes->delete('supplier/(:num)', 'Api\Supplier::delete/$1', ['filter' => 'auth']);

    // =====================
    // BARANG
    // =====================

    $routes->get('barang', 'Api\Barang::index');
    $routes->get('barang/(:num)', 'Api\Barang::show/$1');

    $routes->post('barang', 'Api\Barang::create', ['filter' => 'auth']);
    $routes->put('barang/(:num)', 'Api\Barang::update/$1', ['filter' => 'auth']);
    $routes->delete('barang/(:num)', 'Api\Barang::delete/$1', ['filter' => 'auth']);

});