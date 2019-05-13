import React from "react";
import Button from "@material-ui/core/Button";

const Buttons = () => (
  <>
    <Button variant="outlined">AC</Button>
    <Button disabled />
    <Button disabled />
    <Button variant="outlined">÷</Button>
    <br />
    <Button variant="outlined">9</Button>
    <Button variant="outlined">8</Button>
    <Button variant="outlined">7</Button>
    <Button variant="outlined">×</Button>
    <br />
    <Button variant="outlined">6</Button>
    <Button variant="outlined">5</Button>
    <Button variant="outlined">4</Button>
    <Button variant="outlined">-</Button>
    <br />
    <Button variant="outlined">3</Button>
    <Button variant="outlined">2</Button>
    <Button variant="outlined">1</Button>
    <Button variant="outlined">+</Button>
    <br />
    <Button variant="outlined">0</Button>
    <Button variant="outlined">00</Button>
    <Button variant="outlined">.</Button>
    <Button variant="outlined">=</Button>
  </>
);

export default Buttons;
