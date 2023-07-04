import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from '../pages/Home';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Dashboard />}/>
                <Route path="/test" element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;