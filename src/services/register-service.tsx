export function registerUser(user: any){
    localStorage.setItem('user', JSON.stringify(user))
}