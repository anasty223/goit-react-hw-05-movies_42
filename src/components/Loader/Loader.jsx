import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Loader = () => {
  return (
    <>
      <h1>...LOADING</h1>

      <ClipLoader css={override} size={150} />
    </>
  );
};
