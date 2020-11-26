import React from 'react'

import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
		<div className={styles.notFound}>
			<div className={styles.notFound404}>
				<h1>4<span>0</span>4</h1>
			</div>
			<p>Страница, которую вы ищете, могла быть удалена из-за изменения ее названия или временно недоступна.</p>
			<Link to="/">Главная страница</Link>
		</div>
	</div>
  )
}

export default NotFound;