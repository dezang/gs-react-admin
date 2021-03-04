export default {
    login: ({username, password}) => {
        localStorage.setItem('username', username)
        // check password
        console.log(password)
        return Promise.resolve()
    },

    logout: () => {
        localStorage.removeItem('username')
        return Promise.resolve();
    },

    checkError: ({status}) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username')
            return Promise.reject()
        }

        return Promise.resolve()
    },

    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject()
    },

    getPermissions: () => Promise.resolve(),
}