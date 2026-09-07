'use client';

import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function OeeRegistration({ phone, registrationOpen }: { phone: string; registrationOpen: boolean }) {
  const [status, setStatus] = useState('');

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (field: string) => {
      const entry = form.get(field);
      return typeof entry === 'string' ? entry : '';
    };

    if (!registrationOpen) {
      setStatus('Vista previa: no se guardaron datos. El canal oficial de registro se habilitará próximamente.');
      return;
    }

    const message = [
      'Hola, quiero solicitar mi pre-registro para Batallas Neoprimitivas · 3ra edición.',
      `Nombre: ${value('name')}`,
      `Alias: ${value('alias')}`,
      `Ciudad: ${value('city')}`,
      `Categoría: ${value('category')}`,
      `Contacto: ${value('contact')}`,
    ].join('\n');

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="registration-form__grid">
        <label>Nombre completo<input name="name" autoComplete="name" required /></label>
        <label>Nombre artístico / alias<input name="alias" required /></label>
        <label>Ciudad<input name="city" autoComplete="address-level2" required /></label>
        <label>Categoría<select name="category" defaultValue="" required><option value="" disabled>Selecciona una opción</option><option>Open styles</option><option>Freestyle</option><option>Quiero recibir orientación</option></select></label>
        <label className="registration-form__wide">Instagram o WhatsApp<input name="contact" required placeholder="Tu contacto" /></label>
      </div>
      <label className="registration-consent"><input type="checkbox" required /> Confirmo que mis datos sólo se usarán para dar seguimiento a este evento.</label>
      <button className="primary-button" type="submit">Preparar mi pre-registro <ArrowUpRight size={18} /></button>
      <output className="registration-state">{status || 'El formulario está en modo demostración hasta confirmar el WhatsApp oficial y el aviso de privacidad.'}</output>
    </form>
  );
}
