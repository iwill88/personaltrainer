import { Button } from "@mui/material";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { reset, selectFilter } from "../../redux/slices/filterSlice";
import CheckboxCategory from "./CheckboxComponents/CheckboxCategory";
import CheckboxPrice from "./CheckboxComponents/CheckboxPrice";

const categories = ["YOGA", "TRAINING", "NUTRITION"];

const prices = ["1000", "1500", "2000", "3000", "4000"];

const AsideFilter = () => {

  const dispatch = useDispatch()

  const filters = useSelector(selectFilter)

  console.log("esto es filter", filters)

  return (
    <div className=" md:w-[20%] w-[30%]  md:p-4 p-0 md:mr-20 mr-10 ">
      <h3 className="text-base font-bold mb-10 uppercase pb-10">
        <strong>Filtrar Por:</strong>
      </h3>
      <div className="flex flex-col items-start mb-4 relative left-2">
        
        <CheckboxCategory items={categories} />
        <CheckboxPrice items={prices} />
        <div className="relative right-5">
          <button onClick={()=>dispatch(reset())} >Todos</button>
        </div>
        
      </div>
    </div>
  );
};
export default AsideFilter;
