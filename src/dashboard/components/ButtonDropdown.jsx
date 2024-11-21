import * as React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { HiPlusCircle } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  ThemeProvider,
  Button,
  Menu,
  MenuItem,
  styled,
  alpha,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function DropdownMenu({ type, addNew, viewAll }) {
  const srcDynamic = viewAll.trim().split(" ").pop();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigateHandler = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (src) => {
    setAnchorEl(null);
    navigateHandler(src);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#EA7956;",
      },
    },
    typography: {
      fontFamily: [""],
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        color="primary"
        sx={{
          color: "white",
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: "500",
          position: "absolute",
          right: "0",
          top: "-4rem",
          marginRight: {sm: "0px", xs: "16px"}
          // zIndex: "30",
        }}
        className="mr-4 md:mr-0"
      >
        {type}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
          disablePadding: true,
          style: { width: "auto" },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose.bind(null, `/${srcDynamic}/add-${srcDynamic}`)}
          disableRipple
          sx={{
            fontWeight: "500",
            display: "flex",
            gap: "1rem",
          }}
        >
          <HiPlusCircle size={20} /> {addNew}
        </MenuItem>
        <MenuItem
          onClick={handleClose.bind(null, `/${srcDynamic}/all-${srcDynamic}`)}
          disableRipple
          sx={{ fontWeight: "500", display: "flex", gap: "1rem" }}
        >
          <MdOutlineRemoveRedEye size={20} /> {viewAll}
        </MenuItem>
      </StyledMenu>
    </ThemeProvider>
  );
}
