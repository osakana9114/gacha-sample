export type Coupon = {
    code: string
    name: string
}

export class Lottery {
    couponList: Coupon[] = [
        {
            code: 'CO001',
            name: '初めてのデリバリー注文で100円オフ'
        },
        {
            code: 'CO002',
            name: '【マクドナルド】チキンマックナゲット注文でもう一個ナゲットプレゼント！'
        },
        {
            code: 'CO003',
            name: '【一風堂】送料無料キャンペーン！'
        },
        {
            code: 'CO004',
            name: '【かごの屋】今だけ送料無料キャンペーン！'
        },
        {
            code: 'CO005',
            name: '【ナポリの窯】週替わりLサイズピザ半額'
        },
        {
            code: 'CO006',
            name: '【ストロベリーコーンズ】週替わりLサイズピザ半額'
        }
    ]

    couponNumber: number = this.couponList.length

    /**
     * ランダムな数字を取得（上限：クーポン数）
     * @returns {number}
     * @protected
     */
    protected getRandomId(): number {
        return Math.floor(Math.random() * Math.floor(this.couponNumber))
    }

    /**
     * 全クーポンの中からランダムに１つを取得する
     * @returns {Coupon}
     */
    getCoupon(): Coupon {
        return this.couponList[this.getRandomId()]
    }
}