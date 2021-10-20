/* eslint-disable import/no-anonymous-default-export */
import './Nav.css';
import React from 'react'
import NavItem from './NavItem';

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="/" icon="home" title="Início"/>
            <NavItem href="/users" icon="users" title="Usuário"/>
        </nav>
    </aside>