export class userStorage {
    constructor(user) {
        this.user = user
    }
    set(responseData) {
        localStorage.setItem('name', `${responseData.name}`);
        localStorage.setItem('email', `${responseData.email}`);
        localStorage.setItem('birthdate', `${responseData.birthdate}`);
        localStorage.setItem('photo', `${responseData.photo}`);
        localStorage.setItem('id', `${responseData.id}`);
    }
    get() { console.log("xxxx") }
}