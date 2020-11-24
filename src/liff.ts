import liff from '@line/liff';

export type liffData = {
    language: string,
    sdkVersion: string,
    lineVersion: string | null,
    isLiff: boolean,
    isLoggedIn: boolean,
    os: any
}

type lineMessage = {
    type: 'text',
    text: string
}

export class Liff {
    liffId: string

    constructor() {
        this.liffId = process.env.LIFF_ID!
    }

    initializeLiff() {
        liff.init({
            liffId: this.liffId
        }).then(() => {
            this.initializeApp()
        }).catch((error) => {
            console.error(`LIFF:初期化エラー | [ ${error.code} ] ${error.message}`)
        })
    }

    initializeApp() {
        this.getLiffData()
//        displayIsInClientInfo();
//        registerButtonHandlers();
    }

    getLiffData(): liffData {
        return {
            language: liff.getLanguage(),
            sdkVersion: liff.getVersion(),
            lineVersion: liff.getLineVersion(),
            isLiff: liff.isInClient(),
            isLoggedIn: liff.isLoggedIn(),
            os: liff.getOS()
        }
    }

    sendMessage(message: lineMessage) {
        liff.sendMessages([
            message
        ]).then(() => {
            console.log('message sent');
        }).catch((error) => {
            console.error(`LIFF:メッセージ送信エラー | [ ${error.code} ] ${error.message}`);
        });
    }
}