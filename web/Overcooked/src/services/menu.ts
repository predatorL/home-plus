import request from '../utils/request';
import { IMenuListParam, IMenuDetail } from '../utils/menuType';

export function getMenuList(params: IMenuListParam) {
    return request.get('/menu/list', {params})
}

export function getMenuDetail(params: IMenuListParam) {
    return request.get('/menu/detail', {params})
}

export function createMenu(params: IMenuListParam) {
    return request.post('/menu/create', {params})
}

export function updateMenu(params: IMenuListParam) {
    return request.post('/menu/update', {params})
}

export function deleteMenu(params: IMenuListParam) {
    return request.delete('/menu/delete', {params})
}