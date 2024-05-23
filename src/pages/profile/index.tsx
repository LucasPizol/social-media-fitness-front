import { useAuthContext } from "@/context/auth/auth-context";
import { useLoadApi } from "@/hooks/useLoadApi";
import { UserModel } from "@/intefaces/user";
import { getUserById } from "@/requests/user/get-user-by-id";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const { profileUUID } = useParams();
  const { user } = useAuthContext();

  const { data } = useLoadApi<UserModel>(() =>
    getUserById(profileUUID ?? user?.id ?? "")
  );

  return <>{data?.name}</>;
};
