const receivesAFunction = (anonymousFn) => {
  anonymousFn();
};

const returnsANamedFunction = () => {
  const sayHello = () => {
    return "hellooo";
  };
  return sayHello
};

const returnsAnAnonymousFunction = () => {
    return () => "heyy"
}