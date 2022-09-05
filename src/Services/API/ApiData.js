import { instance } from "../Instance";

export const getUserDetails = ()=>{
    return instance.get('/users');
};

export const deleteData = (id)=>{
    return instance.delete(`users/${id}`);
}