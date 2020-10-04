declare const mutation: (q: string, vars?: object) => {
    query: string;
    variables: object;
};
export default mutation;
