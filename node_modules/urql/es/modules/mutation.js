var mutation = function mutation(q, vars) {
  return {
    query: q,
    variables: vars || {}
  };
};

export default mutation;