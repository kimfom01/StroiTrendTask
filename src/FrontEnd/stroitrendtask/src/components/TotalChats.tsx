import { Base } from "./Base";

interface Record {
  [date: string]: { total: number };
}

interface TotalChatsReport {
  name: string;
  request: Request;
  total: number;
  records: Record;
}

export const TotalChats = () => {
  return (
    <Base>
      <>Total Chats Page</>
    </Base>
  );
};
