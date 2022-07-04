import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <option
            key={i}
            value={o}
        >{o}
        </option>
    )) : [];


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(e);

        if (onChangeOption) onChangeOption(e.target.value);
    }

    return (
        <select
            onChange={onChangeCallback}
            {...restProps}
        >{mappedOptions}
        </select>
    )
}

export default SuperSelect
