type Props = {
    message: string;
};

const Hello = ({ message }: Props) => {
    return (
        <div className="my-auto text-fuchsia-900 text-lg">Hello, {message}</div>
    );
};

export { Hello };
