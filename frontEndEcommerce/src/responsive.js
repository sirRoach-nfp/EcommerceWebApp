
import {css} from "styled-components"

export const mobile = (props) => {
    return css`

            @media only screen and (max-width: 380px){
                ${props}
            }



    `
}

export const mobileM = (props) => {
    return css`
        
        @media only screen and (max-width: 475px){
                ${props}
            }
    `
}

export const tablet = (props) =>{
    return css`
            @media only screen and (max-width: 640px){
                ${props}
            }
    `
}

export const desktopS = (props) => {
    return css`
            @media only screen and (max-width: 768px){
                ${props}
            }
    `
}



export const desktopM = (props) => {
    return css`
            @media only screen and (max-width: 1024px){
                ${props}
            }
    `
}



export const desktopL = (props) => {
    return css`
            @media only screen and (max-width: 1280px){
                ${props}
            }
    `
}