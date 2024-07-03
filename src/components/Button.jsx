// Será el botón que hará que cambie el estado de light a dark
import React from 'react';
import{useTheme} from '../components/theme/ThemeContext'

function Button (){

    const { theme, changeTheme}= useTheme('light')

    const buttonChange= ()=>{
       if(theme === 'light'){
        changeTheme('dark')
       }else{
        changeTheme('light')
       }
    }
    return (
        <button onClick ={buttonChange}>
             Go To { theme === 'light' ? 'Dark' : 'Light'} Zone

        </button>
    )
}

export default Button;