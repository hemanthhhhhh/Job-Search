import {Select, MenuItem, FormControl,InputLabel} from '@mui/material'

const Dropdoown = ({
    label, 
    id,
    value,
    handleChange,
    name,
    options,
    ...props
}) => {
    return (
        <FormControl fullWidth>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
            labelId={id}
            id={id}
            value={value}
            label={label}
            onChange={handleChange}
            name={name}
            {...props}
        >
            {
                options.map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                )) 
            }       
            </Select>
        </FormControl>
    )
}

export default Dropdoown;