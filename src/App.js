import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
// import { Admin, Resource } from 'react-admin'
import { UserList } from './users'
import { PostList, PostEdit, PostCreate } from './posts'
import jsonServerProvider from 'ra-data-json-server'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
      <Resource name="users" list={UserList} />
    </Admin>
  );
}

export default App;
