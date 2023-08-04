import StarFill from '../../../Images/StarFill.png'
import StarEmpty from '../../../Images/StarEmpty.png'
const RateCero = () => {
    return (
        <><img src={StarEmpty} /><img src={StarEmpty} /><img src={StarEmpty} /><img src={StarEmpty} /><img src={StarEmpty} /></>
    )
}

const RateOne = () => {
    return (
        <><img src={StarFill} /><img src={StarEmpty} /><img src={StarEmpty} /><img src={StarEmpty} /><img src={StarEmpty} /></>
    )
}

const RateTwo = () => {
    return (
        <><img src={StarFill} /><img src={StarFill} /><img src={StarEmpty} /><img src={StarEmpty} /><img src={StarEmpty} /></>
    )
}

const RateTree = () => {
    return (
        <><img src={StarFill} /><img src={StarFill} /><img src={StarFill} /><img src={StarEmpty} /><img src={StarEmpty} /></>
    )
}

const RateFour = () => {
    return (
        <><img src={StarFill} /><img src={StarFill} /><img src={StarFill} /><img src={StarFill} /><img src={StarEmpty} /></>
    )
}

const RateFive = () => {
    return (
        <><img src={StarFill} /><img src={StarFill} /><img src={StarFill} /><img src={StarFill} /><img src={StarFill} /></>
    )
}

export const Rate = (rate:any) => {
    let result: JSX.Element = <></>;
    Math.round(rate/2) === 1 ?  result = <RateOne/>: 
    Math.round(rate/2) === 2 ?  result = <RateTwo/>:
    Math.round(rate/2) === 3 ?  result = <RateTree/>: 
    Math.round(rate/2) === 4 ?  result = <RateFour/>: 
    Math.round(rate/2) === 5 ?  result = <RateFive/>: result = <RateCero/>
     
    return (
        result
    )
}