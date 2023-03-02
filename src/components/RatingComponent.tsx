import { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { BsStar } from "react-icons/bs";

const labels: any = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value: any) {
  return `${value} Star ${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function RatingComponent({
  value,
  setValue,
  hover,
  setHover,
}: any) {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<BsStar style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]} </Box>
      )}
    </Box>
  );
}