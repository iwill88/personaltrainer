import {
    Box,
    Button,
    CircularProgress,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Modal,
    TextField,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import { toast } from "react-toastify";
  import { useCreateReviewMutation } from "../redux/api/reviewApi";
  
  import { selectAuth } from "../redux/slices/authSlice";
  import { useSelector } from "react-redux";
  
  import RatingComponent from "./RatingComponent";
  
  const ReviewModal = () => {
    const { token } = useSelector(selectAuth);
    const { ebookId } = useParams();
  
    const [open, setOpen] = useState(false);
  
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    const [comment, setComment] = useState("");
  
    const navigate = useNavigate();
  
    const [createReview, { data: reviewData, isLoading, error }] =
      useCreateReviewMutation();
  
    console.log(error);
  
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "#FFF",
      borderRadius: "12px",
      p: 4,
    };
  
    const handleOpen = () => {
      if (!token) {
        toast.error("Debes estar autenticado");
        navigate("/login");
        return;
      }
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      try {
        createReview({
          productId: ebookId,
          comment,
          rating: value,
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      if (!isLoading) {
        setOpen(false);
      }
  
      if (reviewData && !isLoading) {
        toast.success("Product reviewed");
      }
  
      //   if (error?.status === 501) {
      //     toast.error(`${error?.data?.msg}`);
      //   }
    }, [error, reviewData]);
  
    return (
      <div className="">
        {/* {auth.user._id === data.boughtBy && (
          <button
            onClick={handleOpen}
            className=" bg-dark text-white rounded-sm  px-4 py-2 font-bold text-sm uppercase"
          >
            write a review
          </button>
        )} */}
        <div>
            <button
            onClick={handleOpen}
            className=" bg-slate-700 text-white rounded-[10px]  px-4 py-2 font-medium hover:opacity-80 text-sm uppercase relative md:left-[270px] left-[70px]"
            >
            Dejá un comentario
            </button>
        </div>
        
        <Modal open={open} onClose={handleClose}>
          <Box sx={style} className="w-[85%]  md:w-[700px]">
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl text-slate font-semibold mb-4">
                ¡Dejame un comentario!
              </h3>
              <p className="text-sm  font-semibold text-gray-400">
                Contame algo! Dame tu opinion, sugerencia, queja y/o
                felicitaciones
              </p>
              <textarea
                className="bg-slate/10 p-2 text-sm w-full outline-none mt-2 resize-none rounded-md"
                name="textarea"
                rows="7"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <div className="flex items-center justify-between">
                <RatingComponent
                  value={value}
                  setValue={setValue}
                  hover={hover}
                  setHover={setHover}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className=" bg-violeta-100 hover:bg-purple-500 text-white font-medium  text-sm   rounded-[10px] block drop-shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <CircularProgress
                        size="1.5rem"
                        sx={{ color: "rgba(255,255,255)" }}
                      />
                    </>
                  ) : (
                    "Enviar"
                  )}
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    );
  };
  export default ReviewModal;