//The initail state fro the whole app
const initialState = {
    activeuser: {
        username: '',
        firstname: '',
        lastname: '',
        title: '',
        department: '',
        email: '',
        admin: false,
        newsadmin: false,
        activesession: false
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
    },
    news: {
        newsarticles: [],
        notpostedarticle: {
            headline: '',
            text: '',
            img: ''
        }
    }
};

export default initialState;