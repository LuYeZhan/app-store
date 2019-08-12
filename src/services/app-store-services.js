import axios from 'axios';

class AppStoreService {
    constructor(){
        this.appStore = axios.create({
            baseURL: 'http://localhost:4000/api'
        });
    }


getAllApps() {
  return  this.appStore.get('/apps')
  .then(response => response)
}

addOneApp(newApp) {
    return this.appStore.post('/apps/new', newApp)
    .then(response => response)
};

updateOneApp(id, updatedApp) {
    return this.appStore.put(`/apps/${id}/update`, updatedApp)
    .then(response => response)
};

deleteOneApp(id) {
    return this.appStore.delete(`/apps/${id}/delete`)
    .then(response => response)
};

}

const appStoreService = new AppStoreService();

export default appStoreService;