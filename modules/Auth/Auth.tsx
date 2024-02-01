interface User {
    id: string;
    token: string;
    refresh: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
}

class Auth {
    user: User
    constructor() {
        const authData = localStorage.getItem("auth")
        this.user = authData? JSON.parse(authData) : {}
    }
    getUserInfo() {
        return this.user || {}
    }
    getUserId() {
        return this.user?.id || null
    }
    getToken() {
        return  this.user.token  || null
    }
    getRefresh() {
        return this.user.refresh || null
    }
    getUsername() {
        return this.user?.username || null
    }
    getFirstName() {
        return this.user?.first_name || null
    }
    getLastName() {
        return this.user?.last_name || null
    }
    getEmail() {
        return this.user?.email || null
    }
    
    setUser(newUser: User) {
        this.user = newUser
        localStorage.setItem("auth", JSON.stringify(newUser))
    }
    logout() {
        localStorage.removeItem("auth")
        this.user = {
            id: "",
            token: "",
            refresh: "",
            username: "",
            first_name: "",
            last_name: "",
            email: ""
        }
    }
}
export default Auth