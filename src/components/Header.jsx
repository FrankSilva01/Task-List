import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return(
            <h1 className={styles.title} style={{color:'#eee'}}>Minhas Tarefas</h1>
    );
}

export default Header;