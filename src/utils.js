import request from 'superagent';


const URL = 'https://agile-hamlet-58796.herokuapp.com';

export async function getTodos(token) {
    const response = await request
    .get(`${URL}/api/todoLists`)
    .set('Authorization', token)

    return response.body;
}

export async function updateTodos(id, status, job, due, token) {
    const response = await request
    .put(`${URL}/api/todoLists/${id}`)
    .send({ status: status, job: job, due: due })
    .set('Authorization', token)

    return response.body;
}

export async function createTodos(job, due, token){
    const response = await request
    .post(`${URL}/api/todoLists`)
    .send({ job: job, due: due })
    .set('Authorization', token)

    return response.body
}

export async function signUp(email, password) {
    const response = await request
    .post(`${URL}/auth/signup`)
    .send({email, password})

    return response.body;
}

export async function signIn(email, password) {
    const response = await request
    .post(`${URL}/auth/signin`)
    .send({email, password})

    return response.body;
}

