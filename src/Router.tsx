import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as React from 'react';

import Login from './pages/Login';
import Bingo from './pages/Bingo';
import Leaderboard from './pages/Leaderboard';

type Props = {

};
export const Router = (props: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/bingo" element={<Bingo />} />
                <Route path="leaderboard" element={<Leaderboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;