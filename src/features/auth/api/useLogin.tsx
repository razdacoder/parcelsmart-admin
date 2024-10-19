import { useAuth } from "@/components/auth-provider";
import { client } from "@/lib/client";
import { LoginValues } from "@/lib/schemas";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type LoginErrorType = {
  status: boolean;
  message: string;
};

export default function useLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  return useMutation<AuthSuccessType, AxiosError<LoginErrorType>, LoginValues>({
    mutationFn: async (data) => {
      const response = await client.post("/admin/auth/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      login({
        token: data.data.access_token,
        expires_at: data.data.expires_at,
      });
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data.message || "Invalid email or password");
    },
  });
}
