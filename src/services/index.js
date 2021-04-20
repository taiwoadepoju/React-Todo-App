import constants from '../constants';
import utils from '../utils';

const fetchTodos = () => utils.getRequest(constants.TODO_API);

const services = {
  fetchTodos,
};

export default services;
