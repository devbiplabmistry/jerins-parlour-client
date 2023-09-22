import { useEffect, useState } from "react";

const useServices = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => {
        setServicesData(data);
      })
  }, []);

  return [servicesData];
};

export default useServices;
