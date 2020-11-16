export default function Number(data) {
    const { label } = data;
    const elmName = label.replace(/[^a-zA-Z ]/g, "").toLowerCase().replace(' ', '_');

    return (
        <span id={`${data['question-id']}-span`} hidden={data.hidden}>
            <label>{label}</label>
            <br />
            <input type='number' question-id={data['question-id']} name={elmName} onChange={data.onValueChange} />
        </span>
    );
}