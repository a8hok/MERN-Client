import { axio } from "../../Config/Config";

const getAll = (params) => {
  return axio.get("/term", { params });
};

const get = (id) => {
  return axio.get(`/term/${id}`);
};

const create = (data) => {
  return axio.post("/term", data);
};

const update = (id, data) => {
  return axio.put(`/term/${id}`, data);
};

const remove = (id) => {
  return axio.delete(`/term/${id}`);
};

const findByTitle = (title) => {
  return axio.get(`/term?title=${title}`);
};

const termService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle,
};

export default termService;
