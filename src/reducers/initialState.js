'use strict';

//The initialState for the whole app. The app listens to the store that listens to the Big reducer that listens to the small reducers that listens and changes the initialState.
//In other words, the whole app changes depending on the data in initialState. If something changes in initialState, the app changes and updates.
const initialState = {
    //This part(object), "activeuser", is handled and updated by the userReducer.js
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
    //This part(object), "components", is handled and updated by the componenetsReducer.js
    components: {
        admincomponents: {
            adduserformC: false,
            userlistC: false,
            editindividualuserC: false,
        }
    },
    //This part(object), "conf", is handled and updated by the confReducer.js
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
    //This part(object), "news", is handled and updated by the newsReducer.js
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