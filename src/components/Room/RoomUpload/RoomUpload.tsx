import { Upload, Flex, Typography, Button, type UploadFile } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';

interface RoomUploadProps {
  handleChange: (info: UploadChangeParam<UploadFile>) => void;
  disabled: boolean;
}

export const RoomUpload = ({ handleChange, disabled }: RoomUploadProps) => {
  return (
    <Upload
      beforeUpload={() => false}
      onChange={handleChange}
      showUploadList={false}
      listType="picture-card"
      style={{ width: '100%', height: 200, marginTop: 20 }}
      disabled={disabled}
    >
      <Flex align="center" vertical>
        <Typography.Text type="secondary">Выберите или перетащите план квартиры или фото комнаты</Typography.Text>

        <Button style={{ marginTop: 8 }} type="primary" size="middle">
          Выбрать
        </Button>
      </Flex>
    </Upload>
  );
};
