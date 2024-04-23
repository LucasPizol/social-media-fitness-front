import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/auth/auth-context";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../requests/user/get-user-by-id";

export const Profile = () => {
  const { profileUUID } = useParams();
  const { user } = useAuthContext();

  const { data, isLoading } = useQuery({
    queryKey: ["profile", profileUUID],
    queryFn: () => getUserById(profileUUID ?? user?.id ?? ""),
  });

  console.log(data);

  return <></>;
};
