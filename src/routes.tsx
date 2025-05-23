import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';

const MainRoutes = () => {
    return (
    <Routes>
        <Route path="/" Component={Home} />
        <Route path='/:user' Component={Profile}></Route>
    </Routes>
    )
}

export { MainRoutes };