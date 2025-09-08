import { ReloadOutlined, MailOutlined } from '@ant-design/icons';
import { Flex, Button, Image, Typography, Divider, Card } from 'antd';
import { INTERIOR_STYLES, ROOM_TYPES } from '../config';

interface GeneratedImageDetailsProps {
  selectedStyle: string;
  selectedRoomType: string;
  image: string;
  handleRegenerate: () => void;
  setShowEmailForm: (value: boolean) => void;
}

export const GeneratedImageDetails = ({
  image,
  handleRegenerate,
  setShowEmailForm,
  selectedRoomType,
  selectedStyle,
}: GeneratedImageDetailsProps) => {
  const selectedStyleData = INTERIOR_STYLES.find((style) => style.value === selectedStyle);
  const selectedRoomData = ROOM_TYPES.find((room) => room.value === selectedRoomType);

  return (
    <Card style={{ marginTop: 20 }}>
      <div>
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          Ваш дизайн готов!
        </Typography.Title>
        <Typography.Text type="secondary">ИИ создал уникальный интерьер на основе ваших предпочтений</Typography.Text>
      </div>

      <Divider />

      <Flex align="center" vertical>
        <Image
          style={{ maxWidth: '100%', height: '20%', padding: '20px' }}
          src={`data:image/png;base64,${image}`}
          alt="Generated image"
        />

        <Divider />

        <Typography.Title level={5}>Тип помещения</Typography.Title>
        <Typography.Text>{selectedRoomData?.name}</Typography.Text>

        <Divider />

        <Typography.Title level={5}>Стиль</Typography.Title>
        <Typography.Text>{selectedStyleData?.name}</Typography.Text>

        <Divider />

        <Typography.Title level={5}>Описание стиля</Typography.Title>
        <Typography.Text>{selectedStyleData?.desc}</Typography.Text>

        <Flex wrap justify="center" gap="middle" style={{ marginTop: 20 }}>
          <Button icon={<ReloadOutlined />} onClick={handleRegenerate}>
            Попробовать еще
          </Button>

          <Button type="primary" icon={<MailOutlined />} onClick={() => setShowEmailForm(true)}>
            Оставить почту
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
