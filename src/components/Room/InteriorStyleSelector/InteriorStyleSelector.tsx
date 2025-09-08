import { Card, Select, Flex, Typography } from 'antd';
import { INTERIOR_STYLES } from '../config';

interface InteriorStyleSelectorProps {
  selectedStyle: string;
  setSelectedStyle: (value: string) => void;
}

export const InteriorStyleSelector = ({ selectedStyle, setSelectedStyle }: InteriorStyleSelectorProps) => {
  return (
    <Card title="Выберите стиль интерьера">
      <Select
        value={selectedStyle}
        onChange={setSelectedStyle}
        size="middle"
        options={INTERIOR_STYLES.map((style) => ({
          label: (
            <Flex key={style.value} align="center" gap="middle">
              <style.icon size={24} />
              <Typography.Text>{style.name}</Typography.Text>
            </Flex>
          ),
          value: style.value,
        }))}
      />
    </Card>
  );
};
