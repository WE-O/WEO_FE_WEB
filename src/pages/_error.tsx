import Error from "next/error";

const ErrorPage = ({ statusCode }) => {
    return <Error statusCode={statusCode} />
};

export default ErrorPage;