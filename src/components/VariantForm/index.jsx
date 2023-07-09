import { useState } from "react";
import { useCart } from "@/providers/CartProvider";
import { useDrawer } from "@/providers/DrawerProvider";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Button from "@/components/Button";

const VariantForm = ({ product }) => {
  console.log("product", product);
  const { sauces = [], veggies = [] } = product;

  const { addItem } = useCart();
  const { closeDrawer } = useDrawer();
  const [selectedSauces, setSelectedSauces] = useState([]);
  const [selectedVeggies, setSelectedVeggies] = useState([...veggies]);

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
    closeDrawer();
    const item = {
      ...product,
      sauces: selectedSauces,
      veggies: selectedVeggies,
    };
    addItem(item);
  };

  return (
    <FormControl component="fieldset">
      {sauces.length ? (
        <>
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
        </>
      ) : null}
      {veggies.length ? (
        <>
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
        </>
      ) : null}
      <Button onClick={handleOnClick}> Ajouter au panier</Button>
    </FormControl>
  );
};

export default VariantForm;
