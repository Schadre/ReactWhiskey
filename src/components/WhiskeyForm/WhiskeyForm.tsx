import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import {
  chooseStyle,
  chooseName,
  chooseABV,
  chooseYear,
} from "../redux/slices/RootSlice";
import { Input } from "../SharedComponents/Input";
import { Button } from "@material-ui/core";
import { server_calls } from "../../api";

interface WhiskeyFormProps {
  id?: string;
  data?: {};
}

interface WhiskeyState {
  style: string;
  name: string;
  abv: string;
  year: string;

}

export const WhiskeyForm = (props: WhiskeyFormProps) => {
  const dispatch = useDispatch();
  const store = useStore();
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data: any, event: any) => {
    console.log(props.id);
    if (props.id!) {
      server_calls.update(props.id!, data);
      console.log(`Updated:${data} ${props.id}`);
      console.log(data);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      event.target.reset();
    } else {
      dispatch(chooseStyle(data.style));
      dispatch(chooseName(data.name));
      dispatch(chooseABV (data.abv));
      dispatch(chooseYear(data.year));
      server_calls.create(store.getState());
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
          <label htmlFor="style">Style</label>
          <Input {...register("style")} name="style" placeholder="style" />
        </div>
      <div>
          <label htmlFor="name">Name</label>
          <Input {...register("name")} name="name" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="abv">ABV</label>
          <Input {...register("abv")} name="abv" placeholder="Abv" />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <Input {...register("year")} name="Year" placeholder="Year" />
        </div>
        <Button type="submit">Submit</Button>
    </form>
</div>
  );
};
