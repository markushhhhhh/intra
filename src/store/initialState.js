//The initail state fro the whole app
const initialState = {
    activeuser: {
        username: '',
        password: '',
        activesession: false,
        admin: false,
        newsadmin: false,
    },
    components: {
        admincomponents: {
            adduserformC: false,
            userlistC: false,
            editindividualuserC: false,
        }
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
    }
};

export default initialState;