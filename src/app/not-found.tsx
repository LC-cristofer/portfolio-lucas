import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="shell not-found__inner">
        <span className="eyebrow">Erro 404</span>
        <h1>Essa página saiu do fluxo.</h1>
        <p>O endereço não existe ou foi movido. A home continua no lugar certo.</p>
        <Link className="button button--primary" href="/">Voltar para o início <ArrowIcon /></Link>
      </div>
    </section>
  );
}
