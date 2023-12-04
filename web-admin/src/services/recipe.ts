import request from 'umi-request';


export default class RecipeSercie {
    public static create(reqParam: any) {
        return request('http://localhost:5000/api/recipes',
            { method: 'post', data: reqParam, headers: { 'Content-Type': 'application/json', } })
    }

    public static update(reqParam: any) {
        return request('http://localhost:5000/api/recipes',
            { method: 'put', data: reqParam, headers: { 'Content-Type': 'application/json', } })
    }

    public static delete(reqParam: any) {
        return request('http://localhost:5000/api/recipes',
            { method: 'delete', data: reqParam, headers: { 'Content-Type': 'application/json', } })
    }

    public static getList(reqParam: any) {
        return request('http://localhost:5000/api/recipes',
            { method: 'get', data: reqParam, headers: { 'Content-Type': 'application/json', } })
    }

    public static getDetail(reqParam: any) {
        const { recipeId, ...params } = reqParam;
        return request(`http://localhost:5000/api/recipes/${recipeId}`,
            { method: 'get', params, headers: { 'Content-Type': 'application/json', } })
    }
}

