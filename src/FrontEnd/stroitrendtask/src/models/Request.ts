import { Filters } from "./Filters";

export interface Request {
  distribution: string;
  filters: Filters;
}
