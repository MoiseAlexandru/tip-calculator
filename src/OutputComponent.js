

export default function OutputComponent({bill, myOpinion, friendOpinion}) {
    let avgTipPercentage = (myOpinion + friendOpinion) / 2;
    let tipValueString = (avgTipPercentage / 100 * bill).toFixed(2);
    let tipValue = parseFloat(tipValueString);
    let sumToPay = (bill + tipValue).toFixed(2);
    return (
        <strong> You pay ${sumToPay} (${bill} + ${tipValue} tip) </strong>
    );
}