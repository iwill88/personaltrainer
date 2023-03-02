import { FormControl } from "@mui/material";

import RadioGroup from "@mui/material/RadioGroup";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

import { useState } from "react";
import { useDispatch } from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Typography } from "@mui/material";
import { addCategory } from "../../../redux/slices/filterSlice";

interface ItemsProps {
  items: string[];
}

const CheckboxCategory = ({ items }: ItemsProps) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    dispatch(addCategory(target.value));
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex gap-6 items-center mb-4">
        <h3 onClick={handleOpen} className="text-dark font-bold uppercase text-xs">
          Categorías
        </h3>

        <button className="text-xs" onClick={handleOpen}>
          {open ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
        </button>
      </div>
      {open && (
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
          >
            {items?.map((category, index) => (
              <FormControlLabel
                key={index}
                onChange={handleChange}
                value={`${category}`}
                control={<Radio />}
                label={<Typography variant="body2"> {category} </Typography>}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </>
  );
};

export default CheckboxCategory;
