
export function AsList(props: {verbatims: string[]}) {
  const VerbatimItems = props.verbatims.map( (verbatim, index) => 
    <li key={index}>{verbatim}</li>
  );
  return <ul>{VerbatimItems}</ul>;
}

export function AsPlainText(props: {verbatims: string[]}) {
  let message: string = "";
  props.verbatims.forEach( (greeting) => 
    message += greeting + "\n"
  );
  return <pre>{message}</pre>;
}
