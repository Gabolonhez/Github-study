import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

const MainRoutes = () => {
    return (
    <Routes>
        <Route path="/" Component={Home} />
        <Route path='/profile' Component={Profile}></Route>
    </Routes>
    )
}

export { MainRoutes };