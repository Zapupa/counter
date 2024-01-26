import React from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import { useUnit } from "effector-react";
import {
  $counter,
  incrementCounter,
  decrementCounter,
  randomCounter,
} from "../stores/counter";
const IndexPage: React.FC = () => {
  const { counter, onIncrement, onDecrement, onRandom } = useUnit({
    counter: $counter,
    onIncrement: incrementCounter,
    onDecrement: decrementCounter,
    onRandom: randomCounter,
  });
  return (
    <Box>
      <Typography variant="h2" align="center">
        Число: <strong>{counter}</strong>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            onClick={onDecrement}
            fullWidth
          >
            ←
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={onRandom}
            fullWidth
          >
            random
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            onClick={onIncrement}
            fullWidth
          >
            →
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default IndexPage;
