import styled from "styled-components"
import { useLocation } from "react-router-dom"

const Container = styled.div`
`
export default function Success(){
    const location = useLocation();


    console.log(location)

    return(
        <Container>
            Success
        </Container>
    )
}