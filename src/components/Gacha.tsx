import React from 'react';

// TODO: 未使用
type Props = {
    number: string
    children: React.ReactNode
}

const Gacha: React.FC<Props> = ({number, children}) => {
    return (
        <p>{children}</p>
    )
}

export default Gacha