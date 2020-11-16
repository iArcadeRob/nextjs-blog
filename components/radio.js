export default function Radio(data) {
    const { label, options } = data;
    const elmName = label.replace(/[^a-zA-Z ]/g, "").toLowerCase().replace(' ', '_');

    const optionObjects = options.map(o => {
    return <>{o} <input question-id={data['question-id']} type="radio" value={o} name={elmName} onClick={data.onValueChange} /><br /></>;
    });

    return (
        <div id={`${data['question-id']}-span`} hidden={data.hidden}>
            <label>{label}</label>
            <br />
            {optionObjects}
        </div>
    );
}