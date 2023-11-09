import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">메인 페이지</Link>
                </li>
                <li>
                    <Link to="/articles">인공지능 기사</Link>
                </li>
            </ul>
        </nav>
    );
}
