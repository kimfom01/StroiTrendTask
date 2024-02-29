import { useState } from "react";
import { Base } from "./Base";
import { BaseUrl } from "../utils/ApiUrl";
import axios from "axios";
import { Request } from "../models/Request";

interface DurationData {
  agents_chatting_duration: number;
  count: number;
  duration: number;
}

interface Record {
  [date: string]: DurationData;
}

interface Duration {
  name: string;
  request: Request;
  total: number;
  records: Record;
}

export const Duration = () => {
  const [duration, setDuration] = useState<Duration>();

  const handleClick = async () => {
    const { data } = await axios.get<Duration>(`${BaseUrl}/duration`);

    setDuration(data);
  };

  return (
    <Base>
      <h1>Duration Page</h1>
      <button onClick={handleClick}>Get Duration</button>

      <p>Name: {duration?.name}</p>
      <p>Total: {duration?.total}</p>
    </Base>
  );
};
