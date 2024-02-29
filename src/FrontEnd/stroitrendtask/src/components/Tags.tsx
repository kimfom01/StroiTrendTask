import { Base } from "./Base";

interface Record {
  [date: string]: { [tag: string]: number };
}

interface TagsReport {
  name: string;
  request: Request;
  total: number;
  records: Record;
}

export const Tags = () => {
  return (
    <Base>
      <>Tags Page</>;
    </Base>
  );
};
