import { Star, Truck, UsersRound } from 'lucide-react'
import {
  FreshBadgeIcon,
  LeafCircleIcon,
  LeafIcon,
  MealsIcon,
  NutritionBadgeIcon,
  NutritionistIcon,
  TasteIcon,
} from '../components/icons/HealthIcons'

export const heroBenefits = [
  { icon: LeafCircleIcon, label: 'Fresh Ingredients' },
  { icon: NutritionistIcon, label: 'Nutritionist Approved' },
  { icon: Truck, label: 'Delivered to Your Door' },
]

export const stats = [
  { icon: MealsIcon, value: '1M+', label: 'Meals Delivered' },
  { icon: LeafIcon, value: '30K+', label: 'Happy Customers' },
  { icon: Star, value: '4.8/5', label: 'Customer Satisfaction' },
  { icon: UsersRound, value: '550+', label: 'Corporate Clients' },
]

export const aboutFeatures = [
  { icon: FreshBadgeIcon, label: 'Freshly Prepared Daily' },
  { icon: NutritionBadgeIcon, label: 'Balanced Nutrition' },
  { icon: TasteIcon, label: 'Great Taste' },
]
