//The initail state fro the whole app
const initialState = {
    user: {
        username: '',
        password: '',
        activesession: true,
        admin: true,
        newsadmin: true,
    },
    components: {
        adduserpage: false,
        adduserformC: false,
        userlistC: false,
        edituserC: false,
    },
    conf: {
        users: [],
        user: {
            username: '',
            firstname: '',
            lastname: '',
            title: '',
            department: '',
            email: '',
            password: '',
            admin: false,
            newsadmin: false
        },
        oldusername: ''
    },
    admincomponents: {
        adduserformC: true,
        userlistC: true,
        edituserC: true,
    }
};

export default initialState;