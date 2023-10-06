import styled from 'styled-components'

export const BlockNotification = styled.div`
display: ${({statusStatistic: {good,bad,neutral}}) =>{
    if (good || bad || neutral) {
        return 'none'
    }else{
        return 'block'
    }
}};
`