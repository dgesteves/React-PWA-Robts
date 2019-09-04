import axios from 'axios';

export default function fetchRobots() {
  return axios.get('https://jsonplaceholder.typicode.com/users');
}