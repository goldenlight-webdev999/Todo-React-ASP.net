import axios from "axios";

export const getAxios = () => {
  let axiosInstance;

  const headers = {
    "content-type": "application/json; charset=utf-8",
  };

  axiosInstance = axios.create({
    headers,
    timeout: 50000,
  });

  axiosInstance.interceptors.response.use(
    function (response) {
      return Promise.resolve(response);
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const post = (uri: string, data: any) => {
    return new Promise((resolve, reject) => {
        getAxios()
        .post(uri, data)
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        });
    });
};

export const get = (uri: string, data: any) => {
    return new Promise((resolve, reject) => {
        getAxios()
        .get(uri)
        .then(res => {
            resolve(res);
        })
        .catch(error => {
            reject(error);
        });
    });
};

export const put = (uri: string, data: any) => {
    
    return new Promise((resolve, reject) => {
        getAxios()
        .put(uri, data)
        .then(res => {
            resolve(res);
        })
        .catch(error => {
            reject(error);
        });
    });
};

export const patch = (uri: string, data: any) => {
    return new Promise((resolve, reject) => {
        getAxios()
        .patch(uri, data)
        .then(res => {
            resolve(res);
        })
        .catch(error => {
            reject(error);
        });
    });
};

export const del = (uri: string, data: any) => {
    return new Promise((resolve, reject) => {
        getAxios()
        .delete(uri, data)
        .then(res => {
            resolve(res);
        })
        .catch(error => {
            reject(error);
        });
    });
};