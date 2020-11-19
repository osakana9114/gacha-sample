import React, {useState, useCallback} from 'react';
import './App.css';
import gachaImage from './gachagacha.png';
import {Coupon, Lottery} from './lottery';

const App: React.FC = () => {
    const [coupon, setCoupon] = useState<Coupon>({code: '', name: ''})
    const handleCoupon = useCallback(() => {
        setCoupon(prevState => new Lottery().getCoupon())
    }, [])

    return (
        <div className="App">
            <header>
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
            </footer>
        </div>
    )
}

export default App;
