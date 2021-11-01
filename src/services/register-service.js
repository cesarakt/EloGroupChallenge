export function registerUser(user){
    localStorage.setItem('user', JSON.stringify(user))
}