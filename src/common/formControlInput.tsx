import React from "react";
// @ts-ignore
import Box from "@mui/material/Box";
// @ts-ignore
import {styled} from '@mui/material/styles';
// @ts-ignore
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({

    '& .MuiOutlinedInput-root': {
        fontSize: '1.12rem !important',
        '&.Mui-focused fieldset': {
            borderColor: '#cfa04f',
        },
    },
    '& label.Mui-focused': {
        color: 'grey',
    },
    '.MuiInputLabel-outlined.MuiInputLabel-shrink': {
        zIndex: '0',
        WebkitTextSecurity: 'none',
    },
    '& .MuiFormLabel-asterisk': {
        color: 'red',
    },
    input: {
        color: "black",
        fontSize: "16px",
    },
    label: {
        fontSize: "16px",
    },

});

const FormControlInput = ({
                              label,
                              mode,
                              onFieldChange,
                              type,
                              value,
                              readOnly,
                              required,
                              ctaButton,
                              initialDate,
                              defaultValue,
                              multiline,
                              disabled = false,
                              maxLength,
                              minDate, maxDate,
                              placeholder,
                              inputMode,
                              ...props
                          }: {
    label: any
    mode: string | undefined
    onFieldChange?: any
    required?: any
    value?: any
    type?: any
    readOnly?: boolean,
    ctaButton?: any | undefined
    initialDate?: any
    InputLabelProps?: any
    defaultValue?: any,
    multiline?: any,
    maxLength?: any
    disabled?: boolean
    minDate?: any
    maxDate?: any
    placeholder?: any
    inputMode?: any
}) => {
    const numericMode = mode == 'numeric' ? 'numeric' : 'text';
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {mb: 2},
            }}
            noValidate
            autoComplete="off"
            className="formField"
        >
            <CssTextField
                id="outlined-basic"
                className="inputFieldBox"
                label={label}
                type={type}
                variant="outlined"
                value={value}
                required={required}
                readOnly={readOnly}
                multiline={multiline}
                inputMode={inputMode}
                InputLabelProps={{shrink: true, backgroundColor: "transparent"}}
                key={label}
                placeholder={placeholder ? placeholder : ""}
                defaultValue={defaultValue}
                InputProps={{endAdornment: ctaButton}}
                disabled={disabled}
                // @ts-ignore
                inputProps={{inputMode: {numericMode}, min: minDate, max: maxDate, maxLength: maxLength}}
                onChange={(e: any) => {
                    if (onFieldChange) {
                        onFieldChange(e)
                    }
                }}
                {...props}
            />

        </Box>
    )

}
export default FormControlInput;