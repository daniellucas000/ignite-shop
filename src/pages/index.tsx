import { styled } from '@/styles';

const Button = styled('button', {
  backgroundColor: '$rocketseat',
});

export default function Home() {
  return (
    <div>
      <Button>Enviar</Button>
    </div>
  );
}
