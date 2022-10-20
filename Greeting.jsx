export function Greeting({ title, name = "user" }) {
  console.log(title, name);
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}
export function UserCard({
  name,
  apellido = "none",
  edad = "none",
  amount,
  married,
  address,
  greet,
}) {
  console.log(name, apellido, edad, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{apellido}</h1>
      <h3>{edad}</h3>
      <p>${amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City : {address.city}</li>
        <li>Street : {address.street}</li>
      </ul>
    </div>
  );
}

export function Clientes({ name, apellido, edad, estado, ciudad }) {
  console.log(name, apellido, edad, estado, ciudad);
  return (
    <div>
      <h1>{name}</h1>
      <p>{apellido}</p>
      <p>{edad}</p>
      <p>{estado ? "casado" : "soltero"}</p>
      <p>{ciudad}</p>
    </div>
  );
}
