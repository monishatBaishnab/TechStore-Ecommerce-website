import { Oval } from "react-loader-spinner";

const LoadinPage = () => {
    return (
        <div className="flex bg-white/90 items-center justify-center fixed bottom-0 top-0 left-0 right-0">
            <Oval
                height={80}
                width={80}
                color="#8b5cf6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#c4b5fd"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </div>
    );
};

export default LoadinPage;