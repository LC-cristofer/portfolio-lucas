import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { SplitText } from '@/components/SplitText';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Lucas Cristofer é desenvolvedor full stack em Curitiba e traz a experiência em marketing para a forma como projeta interfaces e sistemas.',
};

const principles = [
  ['Clareza faz parte do design.', 'Se a pessoa não entende o que fazer, a interface ainda não terminou.'],
  ['Movimento e cor precisam ter função.', 'Existem para conduzir a atenção, não para provar habilidade.'],
  ['Negócio e usuário não são lados opostos.', 'Um bom produto resolve o problema de quem usa e melhora o resultado de quem oferece.'],
  ['Entregar inclui revisar.', 'Responsividade, conteúdo, estados vazios, acessibilidade e fluxo fazem parte do produto.'],
];

export default function AboutPage() {
  return (
    <>
      <section className="about-intro">
        <div className="shell about-intro__grid">
          <div className="about-intro__copy">
            <h1><SplitText text="Desenvolvedor full stack, com experiência em comunicação." /></h1>
            <p>
              Minha base em marketing me faz começar pelo público, pela mensagem e pelo objetivo. O desenvolvimento entra para transformar essa direção em sites, painéis e sistemas que funcionam no dia a dia.
            </p>
            <p>
              Hoje trabalho principalmente com Next.js, React, TypeScript, Node.js e PostgreSQL, em Curitiba e remotamente.
            </p>
            <Link className="text-link" href="/projetos">Ver o que já construí</Link>
          </div>
          <Reveal variant="wipe" className="about-intro__photo">
            <Image src="/images/lucas-hero.webp" alt="Retrato de Lucas Cristofer" width={1200} height={1500} priority sizes="(max-width: 900px) 80vw, 420px" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="section-head"><h2>O que guia meu trabalho</h2></Reveal>
          <div className="principles">
            {principles.map(([title, text], index) => (
              <Reveal as="article" variant="rule" delay={(index % 2) * 70} className="principle" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
