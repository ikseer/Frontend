interface User {
    token: string;
    id: string;
}

class Auth {
    user: User
    constructor() {
        const authData = localStorage.getItem("auth")
        this.user = authData? JSON.parse(authData) : {}
    }
    getToken() {
        return  this.user.token  || null
    }
    getUserInfo() {
        return this.user || {}
    }
    getUserId() {
        return this.user?.id || null
    }
    setUser(newUser: User) {
        this.user = newUser
        localStorage.setItem("auth", JSON.stringify(newUser))
    }
    logout() {
        localStorage.removeItem("auth")
        this.user = {token: "", id: ""}
    }
}