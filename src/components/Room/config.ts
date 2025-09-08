import { Leaf, Mountain, Factory, Landmark, Square, Flower2, Sun, Cpu } from 'lucide-react';
import type { InteriorStyles, RoomType } from './types';

export const STYLE_PROMPTS: Record<string, string> = {
  modern:
    'A photorealistic modern interior with clean lines, neutral color palette (grays, whites, beiges) with bold accent colors, sleek functional furniture, large windows with natural light, minimal decor, open space, polished surfaces like glass or metal, and a spacious layout. No clutter, no people, wide-angle perspective.',
  scandinavian:
    'A photorealistic Scandinavian interior with light wood furniture, white or light gray walls, cozy textiles (wool, cotton, linen), soft neutral tones with pastel accents, minimalistic decor, and abundant natural light. Functional design with simple forms, no clutter, no people, bright and airy atmosphere, wide-angle view.',
  industrial:
    'A photorealistic industrial loft interior with exposed brick walls, concrete floors, visible pipes or beams, dark metal furniture, dramatic moody lighting, and a mix of raw textures (wood, metal, leather). Open space, high ceilings, utilitarian aesthetic, no people, wide-angle perspective.',
  classic:
    'A photorealistic classic interior with luxurious furniture, ornate details (moldings, chandeliers), rich fabrics (velvet, silk), warm color palette (gold, cream, burgundy), symmetrical layout, elegant decor, and soft ambient lighting. No modern appliances, no people, medium-angle perspective for a cozy feel.',
  minimalism:
    'A photorealistic minimalist interior with a monochrome palette (white, black, or gray), geometric furniture shapes, extreme simplicity, no decorative objects, spacious layout, and bright even lighting. Clean surfaces, no clutter, no people, wide-angle view emphasizing open space.',
  bohemian:
    'A photorealistic bohemian interior with vibrant colors (earthy tones, jewel shades), eclectic patterns (rugs, tapestries), layered cozy textiles, abundant plants, and handmade decor. Warm, inviting lighting, no modern tech, no people, medium-angle perspective for a cozy and eclectic vibe.',
  provence:
    'A photorealistic Provence-style interior with pastel colors (lavender, soft blue, cream), vintage wooden furniture with distressed finishes, floral patterns on fabrics, rustic charm, and natural materials (linen, cotton). Soft natural light, no modern elements, no people, wide-angle view for a charming rural aesthetic.',
  'high tech':
    'A photorealistic high-tech interior with glossy surfaces (glass, polished metal), chrome or steel accents, futuristic LED lighting, integrated modern appliances, and a sleek monochromatic palette (black, white, gray). High-tech gadgets, no clutter, no people, wide-angle perspective for a futuristic and functional look.',
};

export const ROOM_TYPES: RoomType[] = [
  { value: 'living room', name: 'Гостиная' },
  { value: 'kitchen', name: 'Кухня' },
  { value: 'bedroom', name: 'Спальня' },
  { value: 'bathroom', name: 'Ванная' },
  { value: 'study', name: 'Кабинет' },
  { value: 'children room', name: 'Детская' },
  { value: 'hallway', name: 'Прихожая' },
  { value: 'dining room', name: 'Столовая' },
  { value: 'dressing room', name: 'Гардеробная' },
  { value: 'balcony', name: 'Балкон' },
];

export const INTERIOR_STYLES: InteriorStyles[] = [
  {
    value: 'modern',
    name: 'Современный',
    desc: 'Чистые линии, минимализм, функциональность и нейтральная цветовая палитра с акцентами. Характеризуется простором и обилием света.',
    icon: Leaf,
  },
  {
    value: 'scandinavian',
    name: 'Скандинавский',
    desc: 'Светлые тона, натуральные материалы (дерево, хлопок, лен), уютный текстиль и функциональность. Много естественного света и простота форм.',
    icon: Mountain,
  },
  {
    value: 'industrial',
    name: 'Лофт/Индастриал',
    desc: 'Кирпичные стены, бетон, открытые коммуникации, металлические элементы и высокие потолки. Минимальная отделка и утилитарный подход.',
    icon: Factory,
  },
  {
    value: 'classic',
    name: 'Классический',
    desc: 'Роскошная мебель, лепнина, хрустальные люстры, традиционные узоры и симметрия. Богатые ткани и тёплая цветовая гамма.',
    icon: Landmark,
  },
  {
    value: 'minimalism',
    name: 'Минимализм',
    desc: 'Очень мало мебели и декора, монохромная палитра, акцент на геометрических формах и свободном пространстве. Ничего лишнего.',
    icon: Square,
  },
  {
    value: 'bohemian',
    name: 'Бохо',
    desc: 'Яркие цвета, смелые узоры, текстуры, эклектика и обилие декоративных элементов. Растения, ковры и подушки создают уютную атмосферу.',
    icon: Flower2,
  },
  {
    value: 'provence',
    name: 'Прованс',
    desc: 'Пастельные тона, цветочные принты, состаренная мебель, натуральные материалы и лёгкость. Деревенский шарм французской провинции.',
    icon: Sun,
  },
  {
    value: 'high tech',
    name: 'Хай-тек',
    desc: 'Глянцевые поверхности, хромированные детали, встроенная техника, чёткие линии и технологичность. Футуристичный и функциональный подход.',
    icon: Cpu,
  },
];
