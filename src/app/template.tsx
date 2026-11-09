/** O template remonta a cada navegação, então a animação de entrada toca em toda troca de página. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
