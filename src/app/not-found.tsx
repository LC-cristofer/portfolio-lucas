import Link from 'next/link';
import { SplitText } from '@/components/SplitText';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="shell not-found__inner">
        <h1><SplitText text="Página não encontrada" /></h1>
        <p>O endereço não existe ou foi movido. Os projetos e o contato continuam no menu.</p>
        <Link className="button button--primary" href="/">Voltar ao início</Link>
      </div>
    </section>
  );
}
