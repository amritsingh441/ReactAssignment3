import User from '../model/User';
export const LoginService = async (user:User) => {
    let url = 'http://localhost:3001/auth/v1'
    const response = await fetch(url,{
        method:'POST',
        headers : {
            'Content-Type': "application/json"
        },
        body:JSON.stringify(user)
    })
    return await response.json();
}
