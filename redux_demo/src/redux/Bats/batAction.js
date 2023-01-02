const Buy_Bat = 'BUY_BAT';

export const buybat = (number=1) => {
    return { 
        type : Buy_Bat,
        payload : number
    }
}

const Sell_Bat = 'SELL_BAT';
export const sellbat = (number=1) =>{
    return {
        type : Sell_Bat,
        payload : number
    }
}
