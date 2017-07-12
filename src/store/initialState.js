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