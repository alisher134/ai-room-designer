import { MailOutlined } from '@ant-design/icons';
import { Input, Button, Modal } from 'antd';

interface EmailFormProps {
  showEmailForm: boolean;
  email: string;
  setEmail: (email: string) => void;
  toggleEmailForm: () => void;
}

export const EmailForm = ({ email, setEmail, showEmailForm, toggleEmailForm }: EmailFormProps) => {
  return (
    <Modal footer={false} centered visible={showEmailForm} title="Получить больше идей на email" onCancel={toggleEmailForm}>
      <Input
        placeholder="Ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        suffix={<MailOutlined />}
        size="large"
      />
      <Button size="large" type="primary" block style={{ marginTop: 12 }}>
        Отправить
      </Button>
    </Modal>
  );
};
