import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin'
import MyUserField from './MyUserField'

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            {/* <TextField source="username" /> */}
            <EmailField source="email" />
            {/* <TextField source="address.street" /> */}
            <TextField source="phone" />
            <MyUserField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);