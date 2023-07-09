import React from 'react'
import { useSpring, animated, } from '@react-spring/web'
import homeImg from '@/assets/img/ForceLogo.jpeg'
import homeBnrBook from '@/assets/img/bnr_book.jpeg'
import styles from './style.less'

export default function Home() {
	const springs = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: 1
		},
	})

	return (
		<div className={styles.home}>
			<div className='banner'>
				<animated.div className='bgImg' style={{ ...springs }}></animated.div>
			</div>
			<div className='wrap-v1 home-wrap'>
				<div className='about-area'>
					<h2 className='about-title'>ABOUT US</h2>
					<h3 className='about_sub'>
						共達フォース
						<span>株式会社</span>
						について
					</h3>
					<h3 className='about-catch'>人材とサービス精神でお客様と強固且長期安定的なパートナー関係を構築して参ります。</h3>
					<p className='home-text'>弊社は「人材・信頼・共進・効率・創造」を礎に、未来に向けて優れたソリューションを持ち、</p>
					<p className='home-text'>コンサルティングから運用・アウトソーシングまで、一流のサービスを提供する国際的情報</p>
					<p className='home-text'>サービスグループ企業を目指して参ります。</p>
				</div>
				<div className='home-img'>
					<div>
						<img src={homeImg} alt='' />
					</div>
					<div>
						<img src={homeBnrBook} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}
