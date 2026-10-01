import { BarsIcon, LeafIcon } from '../components/icons/HealthIcons'

export const plans = [
  {
    name: 'Essential Plan',
    icon: LeafIcon,
    description: 'Great for individuals starting their healthy journey.',
    price: 299,
    features: ['Fresh daily meals', 'Balanced nutrition', 'Flexible delivery'],
  },
  {
    name: 'Balanced Plan',
    description: 'Our best value plan for a healthier lifestyle.',
    price: 499,
    features: [
      'Customized meal options',
      'Wide variety of meals',
      'Nutritionist support',
      'Flexible delivery',
    ],
    popular: true,
  },
  {
    name: 'Performance Plan',
    icon: BarsIcon,
    description: 'For fitness enthusiasts and active lifestyles.',
    price: 699,
    features: [
      'High-protein meals',
      'Performance-focused nutrition',
      'Personalized plans',
      'Priority support',
    ],
  },
]
