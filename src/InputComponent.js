
export default function InputComponent({bill, onChange}) {
    return (
        <div>
            <span> How much was the bill? </span>
            <input type = "number" value = {bill ? bill : ""} onChange = {onChange} placeholder="0"/>
        </div>
    );
}