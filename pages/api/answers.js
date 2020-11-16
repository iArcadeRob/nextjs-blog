export default (req, res) => {
    const body = req.body;
    const data = { questions: [] };

    const children = [{
        "id": "0.1",
        "question": "driver's licence?",
        "control": "radio",
        "hidden": false,
        "options": [
            "yes",
            "no"
        ],
        "condition": [
            {
                "element": "0.1.1",
                "value": "yes"
            }
        ],
    }, {
        "id": "0.1.1",
        "question": "car?",
        "control": "radio",
        "hidden": false,
        "options": [
            "yes",
            "no"
        ]
    }];

    if (body.condition && body.condition.length) {
        body.condition.forEach(condition => {
            if (condition.value === body.value) {
                children.forEach(child => {
                    if (condition.element === child.id) {
                        data.questions.push(child);
                    }
                });
            }
        });
    }

    res.status(200).json(JSON.stringify(data));
};