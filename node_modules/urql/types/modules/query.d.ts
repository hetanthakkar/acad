declare const query: (q: string, vars?: object) => {
    query: string;
    variables: object;
};
export default query;
