//form component too choose from sauces (max 2) and veggies (max 3)
// use material ui components
import { useState } from "react";
import { useCart } from "@/providers/CartProvider";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Button from "@/components/Button";

const VariantForm = ({ product }) => {
  const { sauces, veggies } = product;

  const [selectedSauces, setSelectedSauces] = useState([]);
  const [selectedVeggies, setSelectedVeggies] = useState([...product.veggies]);

  const handleSauceChange = (event, sauce) => {
    const { checked } = event.target;

    if (checked) {
      setSelectedSauces([...selectedSauces, sauce]);
    } else {
      setSelectedSauces(selectedSauces.filter((s) => s.id !== sauce.id));
    }
  };

  const handleVeggieChange = (event, veggie) => {
    const { checked } = event.target;

    if (checked) {
      setSelectedVeggies([...selectedVeggies, veggie]);
    } else {
      setSelectedVeggies(selectedVeggies.filter((v) => v.id !== veggie.id));
    }
  };

  const handleOnClick = () => {
    console.log("selectedSauces", selectedSauces);
    console.log("selectedVeggies", selectedVeggies);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Sauces</FormLabel>
      <FormGroup>
        {sauces.map((sauce) => {
          const { id, name, available } = sauce;
          const label = available
            ? selectedSauces.length >= 2 &&
              !selectedSauces.some((v) => v.id === id)
              ? `${name} (2 sauces max.)`
              : name
            : `${name} (épuisé)`;
          return (
            <FormControlLabel
              key={id}
              control={
                <Checkbox
                  checked={selectedSauces.some((s) => s.id === id)}
                  onChange={(event) => handleSauceChange(event, sauce)}
                  disabled={
                    selectedSauces.length >= 2 &&
                    !selectedSauces.some((v) => v.id === id)
                  }
                  name={name}
                />
              }
              label={label}
            />
          );
        })}
      </FormGroup>
      <FormLabel component="legend">Veggies</FormLabel>
      <FormGroup>
        {veggies.map((veggie) => {
          const { id, name, available } = veggie;
          const label = available ? name : `${name} (épuisé)`;
          return (
            <FormControlLabel
              key={id}
              control={
                <Checkbox
                  checked={selectedVeggies.some((v) => v.id === id)}
                  onChange={(event) => handleVeggieChange(event, veggie)}
                  name={name}
                />
              }
              label={label}
            />
          );
        })}
      </FormGroup>
      <Button onClick={handleOnClick}> Ajouter au panier</Button>
    </FormControl>
  );
};

export default VariantForm;
