import { CarDTO } from "@dtos";
import { RectButtonProps } from "react-native-gesture-handler";

export interface CarProps extends RectButtonProps {
  data: CarDTO;
};