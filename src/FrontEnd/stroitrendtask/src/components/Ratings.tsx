import { Base } from "./Base";

interface RatingData {
  bad: number;
  chats: number;
  good: number;
}

interface Record {
  [date: string]: RatingData;
}

interface RatingsReport {
  name: string;
  request: Request;
  total: number;
  records: Record;
}

export const Ratings = () => {
  return (
    <Base>
      <>Ratings Page</>;
    </Base>
  );
};
