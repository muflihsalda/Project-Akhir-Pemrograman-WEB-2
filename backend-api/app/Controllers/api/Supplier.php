<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\SupplierModel;

class Supplier extends ResourceController
{
    protected $modelName = SupplierModel::class;
    protected $format = 'json';

    public function index()
    {
        return $this->respond($this->model->findAll());
    }

    public function show($id = null)
    {
        return $this->respond($this->model->find($id));
    }

    public function create()
{
    log_message(
        'error',
        'METHOD: ' . $this->request->getMethod()
    );

    log_message(
        'error',
        'BODY: ' . json_encode(
            $this->request->getJSON(true)
        )
    );

    $data = $this->request->getJSON(true);

    $this->model->insert($data);

    return $this->respondCreated([
        'message' => 'Supplier berhasil ditambahkan'
    ]);
}

    public function update($id = null)
    {
        $data = $this->request->getJSON(true);

        $this->model->update($id, $data);

        return $this->respond([
            'message' => 'Supplier berhasil diupdate'
        ]);
    }

    public function delete($id = null)
    {
        $this->model->delete($id);

        return $this->respond([
            'message' => 'Supplier berhasil dihapus'
        ]);
    }     
}