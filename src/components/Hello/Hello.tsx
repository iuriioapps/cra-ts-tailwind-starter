type Props = {
    message: string;
};

const Hello = ({ message }: Props) => {
    return (
        <div>Hello, {message}</div>
    );
};

export { Hello };
