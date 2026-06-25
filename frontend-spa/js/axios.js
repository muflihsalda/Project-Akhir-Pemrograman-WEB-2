const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(config => {

    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(

    response => response,

    error => {

        if (error.response &&
            error.response.status === 401) {

            alert('Sesi login habis, silakan login kembali');

            localStorage.removeItem('token');
            localStorage.removeItem('isLoggedIn');

            window.location.hash = '#/login';
        }

        return Promise.reject(error);
    }
);