import { useEffect, useState } from "react";
import { UsersProps } from "../../../types";
import UsersService from "../../../services/UsersService";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const [users, setUsers] = useState({} as UsersProps);

  useEffect(() => {
    if (id) {
      UsersService.listById(id)
        .then((r) => {
          setUsers(r);
        })
        .catch((error) => {
          console.error("Erro ao buscar informações de Usuário:", error);
        });
    }
  }, [id]);

  return <>Página de usuário</>;
}

export default User;
