import { useAuthContext } from "@/context/auth/auth-context";
import { getUserById } from "@/requests/user/get-user-by-id";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const { profileUUID } = useParams();
  const { user } = useAuthContext();

  const { data } = useQuery({
    queryKey: ["profile", profileUUID],
    queryFn: () => getUserById(profileUUID ?? user?.id ?? ""),
  });

  console.log(data);

  return <></>;
};
