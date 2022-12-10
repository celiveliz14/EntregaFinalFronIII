export const themeSwitch = (state,action)=>{
    switch(action.type){
        case 'SWITCH_DARK':
            return 'dark'
        case 'SWITCH_LIGHT':
            return ''
        default:
            throw new Error()
    }
}