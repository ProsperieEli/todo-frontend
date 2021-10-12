import request from 'superagent';


const URL = 'https://git.heroku.com/agile-hamlet-58796.git';

export async function getTodos(token) {
    const response = await request
    .get(`${URL}/api/todoLists`)
    .set('Authorization', token)

    return response.body;
}

export async function updateTodos(id, completed, token) {
    const response = await request
    .put(`${URL}/api/todoLists/${id}`)
    .send({ completed: completed })
    .set('Authorization', token)

    return response.body;
}

export async function createTodos(Joblisting, token){
    const response = await request
    .post(`${URL}/api/todoLists`)
    .send({ Joblisting: Joblisting})
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

