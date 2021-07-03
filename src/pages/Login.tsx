import { useForm } from "react-hook-form";
import { useAuth } from "../context/auth/auth-provider";
import { UserAttr } from "../context/user";
import { useLogin } from "../services/user";

type LoginData = {
  userName: string;
  password: string;
};
export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>();

  const { setData } = useAuth();

  const { mutateAsync } = useLogin();

  const onSubmit = ({ userName, password }: LoginData): void => {
    void mutateAsync({ email: userName, password })
      .then((data) =>
        setData({
          email: data.responseData.email,
          expireDate: data.responseData.expireDate,
          isAdmin: data.responseData.isAdmin,
          userId: data.responseData.userId,
          token: data.responseData.token,
          userName: data.responseData.userName,
        })
      )
      .catch((error: UserAttr) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center justify-items-center bg-green-100">
      <form
        className="flex flex-col gap-8 border border-green-300 bg-green-200 w-screen max-w-lg p-32 rounded-xl shadow-xl"
        id="container-login"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="font-semibold text-green-600">Usuario</label>
          <input
            id="userName"
            type="text"
            className="h-10 p-2 rounded w-full mt-1"
            {...register("userName", { required: "El usuario es requerido" })}
          />
          {errors.userName && (
            <span className="text-red-600">{errors.userName.message}</span>
          )}
        </div>
        <div>
          <label className="font-semibold text-green-600">Contraseña</label>
          <input
            id="password"
            type="password"
            className="h-10 p-2 rounded w-full mt-1"
            {...register("password", {
              required: "La contraseña es requerida",
              maxLength: {
                value: 10,
                message: " La contraseña debe tener máximo 10 caracteres",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </div>

        <button className="bg-green-300 rounded-lg p-2 text-green-600 hover:text-white hover:bg-green-600 outline-none">
          Login
        </button>
      </form>
    </div>
  );
};

// https://www.youtube.com/watch?v=DN8v7_RbVlc
