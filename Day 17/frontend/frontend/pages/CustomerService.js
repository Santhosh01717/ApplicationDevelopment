import axios from 'axios'

const URL = 'http://localhost:8080/newcustomer';
const url='/get?page=${currentPage}&size=${itemsPerPage}'
class CustomerService{

    getAllcustomer(){
        return axios.get(URL)
    }
    getCustomerPage(){
        return axios.get(URL+url);
    }

    createCustomer(customer){
        return axios.post(URL,customer)
    }

    getCustomerById(id){
        return axios.get(URL + '/' +id);
    }

    updateCustomer(id, customer){
        return axios.put(URL + '/' +id, customer);
    }

    deleteCustomer(id){
        return axios.delete(URL + '/' + id);
    }
    deleteAllCustomer(id){
        return axios.delete(URL);
    }
}

export default new CustomerService();