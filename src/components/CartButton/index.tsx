import { Handbag } from 'phosphor-react';
import { CartButtonContainer } from './styles';
import { ComponentProps } from 'react';
import { useCart } from '@/hooks/useCart';

type CartButtonProps = ComponentProps<typeof CartButtonContainer>;

export function CartButton({ ...rest }: CartButtonProps) {
  const { cartItems } = useCart();
  const cartQuantity = cartItems.length;
  return (
    <CartButtonContainer {...rest}>
      {cartQuantity >= 1 && <span>{cartQuantity}</span>}
      <Handbag weight="bold" />
    </CartButtonContainer>
  );
}
