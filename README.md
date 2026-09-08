# El Charro Funk — base del ecosistema web

Demo local con cinco rutas: portada, El Charro Funk, Funky Burgers, Pachakana y Originality, Style and Essence. La portada incluye el apartado “Esencia de la marca”, que agrupa el ecosistema en cuatro formatos: música, gastronomía, OEE y servicios de Charrofunka Company.

## Edición rápida

Los textos, menús, eventos, enlaces y teléfono provisional están centralizados en `app/data.ts`. Las imágenes están en `public/` y pueden reemplazarse conservando el nombre del archivo o actualizando la referencia correspondiente.

La demo no incluye autenticación, cuentas, panel de usuario ni almacenamiento de datos personales. El pre-registro de OEE funciona en modo demostración y no guarda información hasta que se conecte un canal oficial y se apruebe el aviso de privacidad. La arquitectura futura está descrita en `docs/ARQUITECTURA_FUTURA.md`.

Los artes recientes de Funky Burgers, Pachakana y OEE, junto con las fotografías del archivo de competencias, fueron proporcionados para esta demo. Las demás fotografías editoriales siguen siendo recursos conceptuales y deben reemplazarse por material aprobado antes de publicar.

Las decisiones y pendientes de dominio y publicación están resumidos en `docs/DOMINIOS_Y_DESPLIEGUE.md`. Las imágenes de merch, el catálogo completo de servicios y la información de premios siguen pendientes de entrega o aprobación.

## Uso local

- `npm run dev` inicia la vista de desarrollo.
- `npm run build` verifica la entrega de producción.
- `npm run lint` ejecuta las comprobaciones del proyecto.

## Repositorio GitHub

Repositorio configurado: `https://github.com/1001010A/charro-funk`

La carpeta raíz que se versiona y debe abrirse en cualquier herramienta Git es:

`D:\paginaswebs\charro-funk-ecosistema`

Para enviar cambios futuros, abrir una terminal dentro de esa carpeta y ejecutar:

```powershell
git add .
git commit -m "Describir el cambio"
git push
```

No guardar tokens, contraseñas ni archivos `.env` en el repositorio.

## Conectar a Vercel

1. En Vercel, elegir **Add New → Project** e importar el repositorio de GitHub.
2. Usar **Root Directory:** `.` (raíz del repositorio).
3. Confirmar **Framework Preset:** `Next.js`.
4. Confirmar **Build Command:** `npm run build`.
5. Dejar **Install Command** y **Output Directory** en sus valores predeterminados.
6. No se requieren variables de entorno para esta demo.
7. Revisar el despliegue preliminar y sólo después compartir la URL con el cliente.

`vercel.json` fija el framework Next.js y el comando de compilación para que la configuración sea reproducible.

El código fuente está preparado para GitHub. El sitio todavía no se ha desplegado en Vercel.
