<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\UserModel;

class Auth extends BaseController
{
    public function login()
    {
        $model = new UserModel();

        $data = $this->request->getJSON(true);

        $username = $data['username'] ?? '';
        $password = $data['password'] ?? '';

        $user = $model->where('username', $username)->first();

        if (!$user) {
            return $this->response
                ->setStatusCode(401)
                ->setJSON([
                    'message' => 'Username tidak ditemukan'
                ]);
        }

        if (!password_verify($password, $user['password'])) {
            return $this->response
                ->setStatusCode(401)
                ->setJSON([
                    'message' => 'Password salah'
                ]);
        }

        $token = bin2hex(random_bytes(32));

        return $this->response->setJSON([
            'status' => true,
            'token' => $token,
            'user' => [
                'id' => $user['id'],
                'username' => $user['username']
            ]
        ]);
    }
}