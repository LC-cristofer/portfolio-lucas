'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/lib/site';

const options = ['Site / landing page', 'Sistema / dashboard', 'Marketing / campanha', 'Identidade / materiais', 'Projeto integrado', 'Outro'];

export function ContactForm() {
  const [status, setStatus] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const project = String(form.get('project') || '').trim();
    const message = String(form.get('message') || '').trim();

    if (!name || !email || !project || !message) {
      setStatus('Preencha os campos obrigatórios para continuar.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Digite um e-mail válido para continuar.');
      return;
    }

    if (name.length > 120 || email.length > 254 || message.length > 3000) {
      setStatus('Revise os campos: algum conteúdo ultrapassou o limite permitido.');
      return;
    }

    const subject = encodeURIComponent(`Novo projeto — ${project}`);
    const body = encodeURIComponent(
      `Olá Lucas,\n\nMeu nome é ${name}.\nE-mail: ${email}\nTipo de projeto: ${project}\n\nContexto:\n${message}\n`
    );

    setStatus('Abrindo seu aplicativo de e-mail…');
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="field-grid">
        <label className="field">
          <span>Nome *</span>
          <input name="name" type="text" autoComplete="name" placeholder="Seu nome" maxLength={120} required />
        </label>
        <label className="field">
          <span>E-mail *</span>
          <input name="email" type="email" autoComplete="email" placeholder="voce@empresa.com" maxLength={254} required />
        </label>
      </div>
      <label className="field">
        <span>Tipo de projeto *</span>
        <select name="project" defaultValue="" required>
          <option value="" disabled>Selecione uma opção</option>
          {options.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
      </label>
      <label className="field">
        <span>Contexto *</span>
        <textarea name="message" rows={7} maxLength={3000} placeholder="O que você precisa resolver, para quem e em que momento o projeto está?" required />
      </label>
      <div className="contact-form__footer">
        <button className="button button--primary" type="submit">Preparar e-mail</button>
        <p aria-live="polite">{status || 'O envio abre o seu aplicativo de e-mail com a mensagem já preparada.'}</p>
      </div>
    </form>
  );
}
