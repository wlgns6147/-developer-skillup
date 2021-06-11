import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:4000/contacts';

class ApiService {
  async fetchUsers() {
    let list = await axios.get(USER_API_BASE_URL);
    return list.data;
  }

  async fetchUserByID(userID) {
    return await axios.get(USER_API_BASE_URL + '/' + userID);
  }

  async deleteUser(userID) {
    return await axios.delete(USER_API_BASE_URL + '/' + userID);
  }

  async addUser(user) {
    return await axios.post(USER_API_BASE_URL, user);
  }

  async editUser(user) {
    return await axios.put(USER_API_BASE_URL + '/' + user.id, user);
  }
}

export default new ApiService();
