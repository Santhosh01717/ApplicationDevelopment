import axios from 'axios'

const URL = 'http://localhost:8080/medicine';
const url='/get?page=${currentPage}&size=${itemsPerPage}'
class MedicineService{

    getAllMedicine(){
        return axios.get(URL)
    }
    getMedicinePage(){
        return axios.get(URL+url);
    }

    createMedicine(medicine){
        return axios.post(URL,medicine)
    }

    getMedicineById(id){
        return axios.get(URL + '/' +id);
    }

    updateMedicine(id, medicine){
        return axios.put(URL + '/' +id, medicine);
    }

    deleteMedicine(id){
        return axios.delete(URL + '/' + id);
    }
    deleteAllMedicine(id){
        return axios.delete(URL);
    }
}

export default new MedicineService();