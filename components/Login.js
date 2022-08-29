import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Wallet } from '@project-serum/anchor'
import Payment from './Payment'
import HomePage from '../pages/homepage'

const styles = {
    LoginPage: `w-screen h-screen bg-white flex justify-center flex-col items-center`,
    text: `text-4xl text-black mb-10`
}


const Login = () => {



    const wallet = useWallet()

    // Makes users pay Solana to use app
    // if (wallet.connected) return <Payment />

    // Makes app free
    if (wallet.connect) return <HomePage />


    return (
        <div className={styles.LoginPage}>
            <p className={styles.text}>Login to access this app</p>
            <WalletMultiButton />
        </div>
    )
}

export default Login