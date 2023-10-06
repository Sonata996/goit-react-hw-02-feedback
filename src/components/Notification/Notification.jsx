
import { BlockNotification } from "./notification.styled"

export const Notification = ({message,statusStatistic}) =>{
    return <BlockNotification statusStatistic={statusStatistic}>
        <h3>{message}</h3>
    </BlockNotification>
}