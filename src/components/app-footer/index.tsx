import React from 'react'

import styles from './style.less'

export default function AppFooter() {
	return (
		<div className={styles.footer}>
			<div className='wrap-v1 content'>
				<div className='credit'>
					<img src={require('@/assets/img/logo_s.png')} alt='' />
					<div className='name'>共達フォース株式会社</div>
					<div>〒104-6207
						東京都中央区晴海一丁目8番12号
						晴海アイランドトリトンスクエアオフィスタワーZ　7F
					</div>
					<div>EL：03-6228-2751</div>
					<img src={require('@/assets/img/pmark_02.png')} className='pmark' alt='' />
				</div>
				<div className='fnav'>
					<ul>
						<li>ホーム</li>
						<li>業務実績</li>
						<li>会社案内</li>
						<ul>
							<li>社長あいさつ</li>
							<li>会社概要</li>
							<li>沿革</li>
							<li>情報セキュリティ</li>
							<li>プライバシーポリシー</li>
						</ul>
					</ul>
				</div>
				<div className='fnav'>
					<ul>
						<li>ホーム</li>
						<li>業務実績</li>
						<li>会社案内</li>
						<ul>
							<li>社長あいさつ</li>
							<li>会社概要</li>
							<li>沿革</li>
							<li>情報セキュリティ</li>
							<li>プライバシーポリシー</li>
						</ul>
					</ul>
				</div>
			</div>
		</div>
	)
}
