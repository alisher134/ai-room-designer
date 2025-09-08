import { Flex, Spin, Typography, type UploadFile } from 'antd';
import styles from './Room.module.scss';
import type { RcFile, UploadChangeParam } from 'antd/es/upload';
import { useState } from 'react';
import { ROOM_TYPES, INTERIOR_STYLES, STYLE_PROMPTS } from './config';
import { RoomTypeSelector } from './RoomTypeSelector';
import { InteriorStyleSelector } from './InteriorStyleSelector';
import { RoomUpload } from './RoomUpload';
import { generateImage } from '../../services/ai';
import { GeneratedImageDetails } from './GeneratedImageDetails';
import { EmailForm } from './EmailForm';
import toast from 'react-hot-toast';

export const Room = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState<string>(ROOM_TYPES[0].value);
  const [selectedStyle, setSelectedStyle] = useState<string>(INTERIOR_STYLES[0].value);
  const [uploadedFile, setUploadedFile] = useState<UploadFile | null>(null);
  const [freeAttempts, setFreeAttempts] = useState<number>(3);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState<string>('');

  const handleImageGeneration = async (file: UploadFile) => {
    try {
      setIsLoading(true);

      const formData = new FormData();

      const stylePrompt = STYLE_PROMPTS[selectedStyle] || '';
      const fullPrompt = `${stylePrompt}. Room type: ${selectedRoomType}`;

      formData.append('image', file as RcFile);
      formData.append('prompt', fullPrompt);
      formData.append('mode', 'image-to-image');

      const { data } = await generateImage(formData);

      setGeneratedImage(data.image);
      setUploadedFile(file);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = async (info: UploadChangeParam<UploadFile>) => {
    if (freeAttempts <= 0) {
      toast.error('Бесплатные попытки закончились');
      return;
    }

    const { file } = info;

    await handleImageGeneration(file);
    setFreeAttempts((prev) => prev - 1);
  };

  const handleRegenerate = async () => {
    if (!uploadedFile) return;

    await handleImageGeneration(uploadedFile);
  };

  const toggleEmailForm = () => {
    setShowEmailForm((prev) => !prev);
  };

  return (
    <div className={styles.room}>
      <Typography.Title className={styles.title}>Дизайн твоей квартиры за 1 минуту</Typography.Title>

      <Flex gap="middle" vertical>
        <RoomTypeSelector selectedRoomType={selectedRoomType} setSelectedRoomType={setSelectedRoomType} />

        <InteriorStyleSelector selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />
      </Flex>

      <RoomUpload handleChange={handleChange} disabled={false} />

      {isLoading && (
        <Flex align="center" justify="center" style={{ marginTop: 20 }}>
          <Spin tip="Генерация изображения..." size="large" />
          <Typography.Text style={{ marginLeft: 10 }}>Это может занять несколько секунд</Typography.Text>
        </Flex>
      )}

      {generatedImage && (
        <GeneratedImageDetails
          setShowEmailForm={setShowEmailForm}
          image={generatedImage}
          handleRegenerate={handleRegenerate}
          selectedStyle={selectedStyle}
          selectedRoomType={selectedRoomType}
        />
      )}

      {showEmailForm && (
        <EmailForm toggleEmailForm={toggleEmailForm} showEmailForm={showEmailForm} email={email} setEmail={setEmail} />
      )}

      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        {freeAttempts > 0 ? (
          <Typography.Text>Осталось бесплатных попыток: {freeAttempts}</Typography.Text>
        ) : (
          <Typography.Text type="danger">Бесплатные попытки закончились</Typography.Text>
        )}
      </div>
    </div>
  );
};
