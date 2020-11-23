import Axios from 'axios';

export function createUser(data){
  let today = new Date().toISOString();
  data["date"]=today
Axios.post('https://localhost:44376/api/user', data)
.then(function (response) {
  console.log(data);
  console.log(response);
})
.catch(function (error) {
  console.log(data);
  console.log(error);
});
}