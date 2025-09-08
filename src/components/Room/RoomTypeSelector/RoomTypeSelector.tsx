import { Card, Select } from 'antd';
import { ROOM_TYPES } from '../config';

interface RoomTypeSelectorProps {
  selectedRoomType: string;
  setSelectedRoomType: (value: string) => void;
}

export const RoomTypeSelector = ({ selectedRoomType, setSelectedRoomType }: RoomTypeSelectorProps) => {
  return (
    <Card title="Выберите тип помещения">
      <Select
        value={selectedRoomType}
        onChange={setSelectedRoomType}
        size="middle"
        options={ROOM_TYPES.map((room) => ({ label: room.name, value: room.value }))}
      />
    </Card>
  );
};
