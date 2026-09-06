# El Charro Funk — base del ecosistema web

Demo local con cinco rutas: portada, El Charro Funk, Funky Burgers, Pachakama y Originalidad, Estilo y Esencia.

## Edición rápida

Los textos, menús, eventos, enlaces y teléfono provisional están centralizados en `app/data.ts`. Las imágenes están en `public/` y pueden reemplazarse conservando el nombre del archivo o actualizando la referencia correspondiente.

La demo no incluye autenticación, cuentas, panel de usuario, registro de asistentes ni almacenamiento de datos personales. Esas capacidades están contempladas como una fase futura opcional en `docs/ARQUITECTURA_FUTURA.md`, sin integraciones activas en la presentación actual.

Las fotografías editoriales incluidas son recursos conceptuales generados para esta demo. Deben reemplazarse por material aprobado y proporcionado por el cliente antes de publicar.

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
