import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useRegisterUserMutation } from "../redux/api/authApi";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmpassword?: string;
  name?: string;
}

interface BodyRegister {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [
    registerUser,
    { data: registerDataRedux, isSuccess: isRegisterSuccess, error, isLoading },
  ] = useRegisterUserMutation();

  const onSubmit = (data: FormData) => {
    setLoading(true);

    const { username, password, email } = data;

    const registerData: BodyRegister = { username, password, email };

    try {
      registerUser(registerData).then((res) => {
        console.log("Registro exitoso", res);
      });
    } catch {
      console.log("No Server Response");
    }
    setLoading(false);
  };

  console.log("hola", registerDataRedux, error, isLoading);

  useEffect(() => {
    if (isRegisterSuccess) {
      navigate("/login");
    }
  }, [isRegisterSuccess]);

  return (
    <>
      <div className="bg-[url('./assets/FondoRegister.png')] bg-cover bg-no-repeat bg-center md:min-h-screen flex items-center">
        <div className="container mx-auto   flex md:justify-end justify-center items-center ">
          <div className="bg-white md:w-2/5 w-[90%]  rounded-3xl shadow-lg py-50 border border-gray-400  mx-3 md:my-0 my-10">
            <div className=" bg-white rounded-lg p-1 m-1  ">
              <div className="flex justify-center mt-10 mb-5">
                <h1 className="text-[30px] ">Crea tu cuenta</h1>
              </div>
             
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center justify-center gap-2 ">
                  <div className="w-3/4 mr-2">
                    <label className="md:block hidden font-medium text-gray-700 mb-2 md:text-lg text-sm">
                      Nombres y apellidos
                    </label>
                    <input
                      type="text"
                      className="mt-1 px-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-base focus:ring-1"
                      placeholder="Nombres y apellidos"
                      {...register("name", {
                        minLength: {
                          value: 2,
                          message: "Debe tener al menos 2 caracteres",
                        },
                      })}
                    />
                    <div className="text-red-700">
                      {errors.name && errors.name.message}
                    </div>
                  </div>
                  <div className="w-3/4 mr-2">
                    <label className="md:block hidden font-medium text-gray-700 mb-2 md:text-lg text-sm">
                      Username
                    </label>
                    <input
                      type="text"
                      className="mt-1 px-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-base focus:ring-1"
                      placeholder="Username"
                      {...register("username", {
                        minLength: {
                          value: 6,
                          message: "Debe tener al menos 6 caracteres",
                        },
                      })}
                    />
                    <div className="text-red-700">
                      {errors.username && errors.username.message}
                    </div>
                  </div>

                  <div className="w-3/4 mr-2">
                    <label className="md:block hidden font-medium text-gray-700 mb-2 md:text-lg text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-base focus:ring-1"
                      placeholder="Email"
                      {...register("email", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="w-3/4 mr-2">
                    <label className="md:block hidden font-medium text-gray-700 mb-2 md:text-lg text-sm">
                      Password
                    </label>
                    <input
                      type="password"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-base focus:ring-1"
                      placeholder="Password"
                      {...register("password", {
                        minLength: {
                          value: 8,
                          message: "Debe tener al menos 8 caracteres",
                        },
                      })}
                    />
                    <div className="text-red-700">
                      {errors.password && errors.password.message}
                    </div>
                  </div>
                  <div className="w-3/4 mr-2">
                    <label className="md:block hidden font-medium text-gray-700 mb-2 md:text-lg text-sm">
                      Confirmar password
                    </label>
                    <input
                      type="password"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-base focus:ring-1"
                      placeholder="Confirm password"
                      {...register("confirmpassword", {
                        minLength: {
                          value: 8,
                          message: "Debe tener al menos 8 caracteres",
                        },
                        validate: (value) => {
                          if (watch("password") !== value) {
                            return "Las contraseñas no coinciden";
                          }
                        },
                      })}
                    />
                    <div className="text-red-700">
                      {errors.confirmpassword && errors.confirmpassword.message}
                    </div>
                  </div>

                  <button
                    className="bg-purple-600 hover:bg-purple-500 text-white text-lg font-bold py-2 px-14 w-3/4 mb-5  rounded-xl block mt-5 drop-shadow-lg"
                    type="submit"
                  >
                    {isLoading ? (
                      <Spinner text={"Processing"} />
                    ) : (
                      "Registrarse"
                    )}
                  </button>
                  <div className="mb-5  flex items-center" >
                    
                    <Link to="/login">
                      <h2 className="text-base text-violeta-100 hover:opacity-80 font-bold">Ya tengo una cuenta</h2>
                      
                    </Link>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
