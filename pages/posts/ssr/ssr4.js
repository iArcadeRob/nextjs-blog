import React, { useState } from 'react';
import Layout from '../../../components/layout';
import Radio from '../../../components/radio';
import Number from '../../../components/number';
import Head from 'next/head';
import utilStyles from '../../../styles/utils.module.css';
import _ from 'lodash';

export default function Page({ data }) {
    const [questionData, setQuestionData] = useState(data);
    const [components, setComponents] = useState([]);

    const getChildren = ({ children, ...component }) => {
        return [component, ...(children ? getComponents(children).flat() : [])];
    };
    const getComponents = componentArray => componentArray.map(component => getChildren(component)).flat();

    const generateElements = (quesitonObject) => {
        const elements = getComponents(quesitonObject.questions);
        const newComponents = elements.map(element => buildComponent(element));

        if (components.length !== newComponents.length) {
            setComponents(newComponents);
        }
    };

    const showElement = (id) => {
        const elm = document.getElementById(`${id}-span`);
        if (!id || !elm) return;
        elm.removeAttribute('hidden');
    };
    
    const hideElement = (id) => {
        const elm = document.getElementById(`${id}-span`);
        if (!id || !elm) return;
        elm.setAttribute('hidden', true);
    };

    const addQuestionsToJsonData = (data) => {
        data.forEach(q => {
            questionData.questions.forEach(qd => {
                if (qd.id === '0') {
                    if (q.id === '0.1') {
                        qd.children = [q];
                    }
                    else if (q.id === '0.1.1') {
                        qd.children.forEach(qdc => {
                            if (qdc.id === '0.1') {
                                qdc.children = [q];
                            }
                        })
                    }
                }
            });
        });
        setQuestionData(questionData);
        generateElements(questionData);
    };
    
    const sendDataToApi = async (postData) => {
        const rawResponse = await fetch('http://localhost:3000/api/answers?something=true', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        const content = await rawResponse.json();

        if (content.questions.length) {
            addQuestionsToJsonData(content.questions);
        }
    };
    
    const buildComponent = (component) => {
        const { question } = component;
        const elmName = question.replace(/[^a-zA-Z ]/g, "").toLowerCase().replace(' ', '_');
        const radioOnValueChanged = () => {
    
            if (window) {
                const radioGroupInputs = document.getElementsByName(elmName);
                let value;
                radioGroupInputs.forEach(r => {
                    if (r.checked && r.value && component.condition) {
                        value = r.value;

                        sendDataToApi({
                            id: component.id,
                            value,
                            condition: component.condition
                        });

                        component.condition.forEach(c => {
                            if (c.value === value) {
                                showElement(c.element);
                            }
                            else {
                                hideElement(c.element);
                            }
                        });
                    }
                });
            }
        }
    
        const numberOnValueChanged = () => {
            if (window) {
                const numberField = document.getElementsByName(elmName)[0];
                const value = numberField.value;
    
                if (value && component.condition) {

                    sendDataToApi({
                        id: component.id,
                        value,
                        condition: component.condition
                    });

                    component.condition.forEach(c => {
                        if (c.value === value) {
                            showElement(c.element);
                        }
                        else {
                            hideElement(c.element);
                        }
                    });
                }
            }
        };
    
        switch(component.control) {
            case 'radio':
                return <Radio question-id={component.id} label={component.question} options={component.options} onValueChange={radioOnValueChanged} hidden={component.hidden ? true : false} />;
            case 'number':
                return <Number question-id={component.id} label={component.question} onValueChange={numberOnValueChanged} hidden={component.hidden ? true : false} />;
        }
    };

    generateElements(questionData);

    return <Layout>
        <Head>
            <title></title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>Testing</h1>
            {components}
        </article>
    </Layout>;
}

Page.getInitialProps = async () => {
    const response = await fetch('http://localhost:3000/api/questions');
    const data = await response.json();

    return { data };
};