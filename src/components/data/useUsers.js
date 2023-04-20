import { useState, useEffect } from "react";
import usersData from "./users.json"; // Asegúrate de que la ruta sea correcta

const useUsersData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Procesa los datos del JSON y crea un array con objetos de usuario
    const processedUsers = usersData.results.map((user) => ({
      image: user.picture.large,
      name: `${user.name.title} ${user.name.first} ${user.name.last}`,
      description: user.email,
      location: `${user.location.street.name}, ${user.location.street.number}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
      phone: user.phone,
    }));

    setUsers(processedUsers);
  }, []);

  return users;
};

export default useUsersData;
