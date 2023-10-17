
import { useState } from 'react';
import SelectPercentage from './SelectPercentage';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';
import ResetButton from './ResetButton';

function App() {

    const [bill, setBill] = useState(0);
    const [myOpinion, setMyOpinion] = useState(0);
    const [friendOpinion, setFriendOpinion] = useState(0);

    function handleBillChange(event) {
        const newBill = Number(event.target.value);
        setBill(newBill);
    }

    return (
        <div>
            <InputComponent bill = {bill} onChange = {handleBillChange}/>
            
            <SelectPercentage opinion = {myOpinion} answerChange = {(e) => setMyOpinion(Number(e.target.value))}> How did you like the service? </SelectPercentage>
            <SelectPercentage opinion = {friendOpinion} answerChange = {(e) => setFriendOpinion(Number(e.target.value))}> How did your friend like the service? </SelectPercentage>
            <OutputComponent bill = {bill} myOpinion = {myOpinion} friendOpinion = {friendOpinion} />
            <ResetButton setBill = {setBill} setMyOpinion = {setMyOpinion} setFriendOpinion = {setFriendOpinion}/>
        </div>
    );
}

export default App;
