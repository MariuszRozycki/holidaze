import CustomButton from "../CustomButton/CustomButton";

type SearchButtonProps = {
  btnText: string;
  type: "submit" | "reset" | "button" | undefined;
  className: string;
};

const SearchButton = ({ btnText, type, className }: SearchButtonProps) => {
  return <CustomButton btnText={btnText} type={type} className={className} />;
};

export default SearchButton;
