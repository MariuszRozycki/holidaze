import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./CustomToastify.scss";

type CustomToastifyProps = {
  notifyText: string;
};

const CustomToastify = ({ notifyText }: CustomToastifyProps) => {
  useEffect(() => {
    toast(notifyText);
  }, [notifyText]);

  return <ToastContainer />;
};

export default CustomToastify;
