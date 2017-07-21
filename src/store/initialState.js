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
        activesession: false,
        profileimgURL: ''
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
            newsadmin: false,
            profileimgURL: ''
        },
        oldusername: ''
    },
    news: {
        newsarticles: [],
        article: {
            aid: '',
            author: '',
            department: '',
            headline: '',
            title: '',
            text: {
                selection: null,
                text: ''
            },
            imgURL: '',
            date: '',
            imgheadline: ''
        },
        notpostedarticle: {
            aid: '',
            author: '',
            department: '',
            headline: '',
            title: '',
            text: {
                selection: null,
                text: ''
            },
            imgURL: '',
            date: '',
            imgheadline: ''
        },
        fileuploader: {
            avatar: '',
            isUploading : false,
            progress: 0,
            avatarURL: ''
        }
    }
};

export default initialState;