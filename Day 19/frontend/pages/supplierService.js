import axios from 'axios'

const URL = 'http://localhost:8080/supplier';
const url='/get?page=${currentPage}&size=${itemsPerPage}'
class SupplierService{

    getAllSupplier(){
        return axios.get(URL)
    }
    getSupplierPage(){
        return axios.get(URL+url);
    }

    createSupplier(supplier){
        return axios.post(URL,supplier)
    }

    getSupplierById(id){
        return axios.get(URL + '/' +id);
    }

    updateSupplier(id, supplier){
        return axios.put(URL + '/' +id, supplier);
    }

    deleteSupplier(id){
        return axios.delete(URL + '/' + id);
    }
    deleteAllSupplier(id){
        return axios.delete(URL);
    }
}

export default new SupplierService();