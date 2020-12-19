import React, {useState, useCallback} from 'react';
import './App.css';
import gachaImage from './gachagacha.png';
import {liffData, Liff} from './liff';
import {Coupon, Lottery} from './api/lottery';

const liffClient = new Liff()
liffClient.initializeLiff()

const App: React.FC = () => {
    const [coupon, setCoupon] = useState<Coupon>({code: '', name: ''})
    const handleCoupon = useCallback(() => {
        const drawnCoupon: Coupon = new Lottery().getCoupon()
        // トークルームにメッセージ送信
        liffClient.sendMessage({
            type: 'text',
            text: `当たったクーポンはこちら！\n\n【${drawnCoupon.code}】\n${drawnCoupon.name}`
        })

        // 画面描画用データ
        setCoupon(prevState => drawnCoupon)
    }, [])

    const data: liffData = liffClient.getLiffData()

    return (
        <div className="App">
            <header className="App-header">
                <h1>クーポンガチャ🤖</h1>
            </header>

            <body>
            <div>
                <b>{coupon.code}</b>
                <p>{coupon.name}</p>
                <button onClick={handleCoupon}>ガチャをまわす</button>
            </div>
            <img src={gachaImage} className="shake" alt="ガチャガチャ"/>
            </body>

            <footer>
                <a href="https://demae-can.com/link/cam/list" target="_blank" rel="noreferrer">
                    出前館 クーポン・キャンペーン</a>
                <hr/>
                <br/>
                <div>
                    <h4>LIFF取得データ</h4>
                    <li>Language: {data.language}</li>
                    <li>OS: {data.os}</li>
                    <li>isLiff: {data.isLiff ? 'yes' : 'no'}</li>
                    <li>isLoggedIn: {data.isLoggedIn ? 'yes' : 'no'}</li>
                    <li>Profile: {data.profile}</li>
                </div>
            </footer>
        </div>
    )
}

export default App;
