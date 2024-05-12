import React, { FormEvent, useState } from "react";

interface Props {
  coneAngle: number;
  size: number;
  isFumigated: boolean;
}

interface Silo {
  siloName: string;
  coneAngle: number;
  size: number;
  fumigated: boolean;
  price: number;
}

const silos: Silo[] = [
  {
    siloName: "30 Degrees 54 Tonne Fumigated",
    coneAngle: 30,
    size: 54,
    fumigated: true,
    price: 15000,
  },
  {
    siloName: "30 Degrees 67 Tonne Fumigated",
    coneAngle: 30,
    size: 67,
    fumigated: true,
    price: 20000,
  },
  {
    siloName: "30 Degrees 82 Tonne Fumigated",
    coneAngle: 30,
    size: 82,
    fumigated: true,
    price: 24000,
  },
  {
    siloName: "35 Degrees 54 Tonne Fumigated",
    coneAngle: 35,
    size: 54,
    fumigated: true,
    price: 16000,
  },
  {
    siloName: "35 Degrees 67 Tonne Fumigated",
    coneAngle: 35,
    size: 67,
    fumigated: true,
    price: 21000,
  },
  {
    siloName: "35 Degrees 82 Tonne Fumigated",
    coneAngle: 35,
    size: 82,
    fumigated: true,
    price: 25000,
  },
];

let coneAngle = 30;
let size = 54;

function PriceEstimator() {
  const [price, setPrice] = useState(0);

  const angles: number[] = [30, 35];
  const sizes: number[] = [54, 67, 82];

  const changeConeAngle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    coneAngle = Number.parseInt(event.target.value);
    console.log(coneAngle, size);
  };

  const changeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    size = Number.parseInt(event.target.value);
    console.log(coneAngle, size);
  };

  // Lookup price based on inputs
  const Calculate = (coneAngle: number, size: number) => {
    let filteredSilos = silos.filter((silo) => silo.coneAngle == coneAngle);
    filteredSilos = filteredSilos.filter((silo) => silo.size == size);
    console.log(coneAngle, size);
    setPrice(filteredSilos[0].price);
  };
  return (
    <form>
      <ul>
        <li>
          <label htmlFor="angle">Cone angle</label>
          <label>
            <select
              id="angle"
              name="angle"
              onChange={(event) => {
                coneAngle = Number.parseInt(event.target.value);
                console.log(coneAngle, size);
              }}
            >
              {angles.map((angle) => (
                <option key={angle}>{angle}</option>
              ))}
            </select>{" "}
            Degrees
          </label>
        </li>
        <li>
          <label htmlFor="size">Size</label>
          <label>
            <select
              id="size"
              name="size"
              onChange={(event) => {
                size = Number.parseInt(event.target.value);
                console.log(coneAngle, size);
              }}
            >
              {sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>{" "}
            Tonnes
          </label>
        </li>
        <li>
          <label htmlFor="fumigated">Fumigated?</label>
          <input type="checkbox" id="fumigated"></input>
        </li>
      </ul>
      <button type="button" onClick={() => Calculate(coneAngle, size)}>
        Get Price
      </button>
      <h2>${price}</h2>
    </form>
  );
}

export default PriceEstimator;
