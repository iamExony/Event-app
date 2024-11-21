import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import { BsChevronDown } from "react-icons/bs"
import { MenuItem, Select } from "@mui/material";

const SelectInput = ({ 
    value, 
    handleSelect, 
    text = "#FFFFFF", 
    background = "#0065A5", 
    defaultValue,
    options,
    className
}) => {
    const [open, setOpen] = useState(false)
    const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
        padding: theme.spacing(1.5),
            "&:hover": {
            color: text,
            backgroundColor: background
            },

            marginInline: "15px",
            borderRadius: "5px",
      }))
    
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 400,
                width: "20ch",
            }
        },
    }

  return (
    <Select 
        displayEmpty
        value={value}
        MenuProps={MenuProps}
        onChange={e => handleSelect(e.target.value)}
        className={`select hover:border-opacity-0 ${className}`}
        IconComponent={() => <BsChevronDown className="text-2xl text-bodyText mr-4 cursor-pointer"/>}
    >
        <StyledMenuItem value="" disabled>
            {defaultValue}
        </StyledMenuItem>

        {options.map(option => (
            <StyledMenuItem 
                key={option} 
                value={option}
            >
                { option }
            </StyledMenuItem>
        ))}
    </Select>
  )
}

export default SelectInput