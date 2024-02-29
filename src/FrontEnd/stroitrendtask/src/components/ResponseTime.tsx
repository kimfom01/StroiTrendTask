import { Base } from "./Base";

interface ResponseTimeData {
  count: number;
  response_time: number;
}

interface Record {
  [date: string]: ResponseTimeData;
}

interface ResponseTimeReport {
  name: string;
  request: Request;
  total: number;
  records: Record;
}

export const ResponseTime = () => {
  return (
    <Base>
      <>Response Time Page</>;
    </Base>
  );
};
