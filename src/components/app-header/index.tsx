import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { routes } from '@/routes'

import styles from './style.less'

import logo from '@/assets/img/logo.png'

export default function AppHeader() {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const activeIndex = routes.findIndex((item) => item.path === pathname) - 1

	const handleTabClick = (path?: string) => {
		if (!path) return;
		navigate(path)
	}

	return (
		<div className={styles.home}>
			<div className='wrap-v1 content'>
				<img src={logo} alt='' />
			</div>
			<div className='tab-bar'>
				<div className='tab-bar-wrap wrap-v1'>
					{
						new Array(6).fill(0).map((_, index) => index).map((_, i) => {
							return <div onClick={() => handleTabClick(routes[i + 1].path)} key={i} className={classNames('tab-item', activeIndex === i && 'active')}>
							</div>
						})
					}
				</div>
			</div>
		</div>
	)
}
