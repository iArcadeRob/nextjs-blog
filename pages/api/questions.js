export default (req, res) => {
    res.status(200).json(
        {
            "questions": [
                {
                    "id": "0",
                    "question": "age?",
                    "control": "number",
                    "condition": [
                        {
                            "element": "0.1",
                            "value": '16'
                        }
                    ],
                    // "children": [{
                    //     "id": "0.1",
                    //     "question": "driver's licence?",
                    //     "control": "radio",
                    //     "hidden": true,
                    //     "options": [
                    //         "yes",
                    //         "no"
                    //     ],
                    //     "condition": [
                    //         {
                    //             "element": "0.1.1",
                    //             "value": "yes"
                    //         }
                    //     ],
                    //     "children": [{
                    //         "id": "0.1.1",
                    //         "question": "car?",
                    //         "control": "radio",
                    //         "hidden": true,
                    //         "options": [
                    //             "yes",
                    //             "no"
                    //         ]
                    //     }]
                    // }]
                },
                {
                    "id": "1",
                    "question": "weight?",
                    "control": "number"
                }
            ]
        });
}