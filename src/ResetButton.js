

export default function ResetButton({setBill, setMyOpinion, setFriendOpinion}) {

    function handleReset() {
        setBill(0);
        setMyOpinion(0);
        setFriendOpinion(0);
    }

    return (
        <button onClick = {handleReset}> Reset </button>   
    );
}