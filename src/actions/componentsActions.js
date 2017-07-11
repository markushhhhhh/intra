export function renderAddUserPage() {
    return{
        type: 'RENDER_ADDUSERPAGE',
        payload: true
    }
}

export function renderAddUserForm() {
    return{
        type: 'RENDER_ADDUSERFORM',
        payload: false
    }
}

export function renderComponent(type) {
    return{
        type: type,
        payload: true
    }
}

export function unrenderComponent(type) {
    return{
        type: type,
        payload: false
    }
}