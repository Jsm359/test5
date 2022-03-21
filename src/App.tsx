import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import { UserPage } from './components/page/UserPage'
import { TodosPage } from './components/page/TodosPage'
import { UserItemPage } from './components/page/UserItemPage'
import { TodosItemPage } from './components/page/TodosItemPage'

export const App = () => {

  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users' style={{marginRight:10}}>Пользователи</NavLink>
        <NavLink to='/todos'>Список</NavLink>
      </div>
      <Routes>
        <Route path={'/users'} element={<UserPage/>}/>
        <Route path={'/todos'} element={<TodosPage/>}/>
        <Route path={'/users/:id'} element={<UserItemPage/>}/>
        <Route path={'/todos/:id'} element={<TodosItemPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
