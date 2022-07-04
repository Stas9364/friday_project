import React, {useState} from 'react';
import SuperInputText from "./superComponents/SuperInputText";
import SuperCheckbox from "./superComponents/SuperCheckbox";
import SuperRadio from "./superComponents/SuperRadio";
import SuperSelect from "./superComponents/SuperSelect";
import SuperEditableSpan from "./superComponents/SuperEditableSpan";
import SuperButton from "./superComponents/SuperButton";

const arrayOptions = ['A', 'B', 'C']

const Test = () => {
    const [inpValue, setInpValue] = useState('');
    const [checked, setChecked] = useState(false);
    const [option, setOption] = useState('A');

    const onBtnClick = () => {
        alert(
            `Input value: ${inpValue}
            Checkbox is ${checked.toString()}
            Chose radio or select value: ${option}`
        );
    };

    return (
        <div>

            <div>
                <SuperInputText
                    value={inpValue}
                    onChangeText={setInpValue}
                />
                <span>Input value: {inpValue}</span>
            </div>

            <div>
                <SuperCheckbox
                    onChangeChecked={setChecked}
                    checked={checked}
                />
                <span>Checkbox is {checked.toString()}</span>
            </div>

            <div>
                <SuperRadio
                    options={arrayOptions}
                    onChangeOption={setOption}
                    value={option}
                />
                <div>Chose value: {option}</div>
            </div>

            <div>
                <SuperSelect
                    options={arrayOptions}
                    onChangeOption={setOption}
                    value={option}
                />
            </div>

            <div><SuperEditableSpan/></div>

            <div>
                <SuperButton
                    onClick={onBtnClick}
                >PUSH
                </SuperButton>
            </div>

        </div>
    );
};

export default Test;