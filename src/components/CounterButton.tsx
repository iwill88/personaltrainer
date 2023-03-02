import { CircularProgress } from "@mui/material";
import { useUpdateProductCartMutation } from "../redux/api/cartApi";

const CounterButton = ({ product }: any) => {
  const [updateProductCart, { isLoading }] = useUpdateProductCartMutation();

  return (
    <div className=" cursor-pointer border-2 border-orange px-4 md:py-2 p-1 flex justify-between w-[140px] md:mx-auto rounded-md bg-slate/10 ">
      <span
        className="text-[1rem] "
        onClick={() =>
          updateProductCart({
            id: product?.item?._id,
            value: "dsc",
          })
        }
      >
        -
      </span>
      <span className="text-sm  ">
        {isLoading ? (
          <>
            <CircularProgress
              sx={{ color: "rgba(000,000,000,.8)" }}
              size="1rem"
            />
          </>
        ) : (
          <>{product?.quantity}</>
        )}
      </span>
      <span
        className="text-[1rem]  "
        onClick={() => {
          updateProductCart({
            id: product?.item?._id,
            value: "asc",
          });
        }}
      >
        +
      </span>
    </div>
  );
};
export default CounterButton;