# Arquitectura futura — funciones no incluidas en la demo

Este documento registra puntos de extensión para una fase posterior. No existe autenticación, registro de usuarios, formulario de asistentes, base de datos ni panel administrativo activo en la demo actual.

## Principios para la siguiente fase

- Mantener las páginas públicas actuales como capa de presentación.
- Añadir servicios de datos detrás de endpoints del servidor; el navegador no debe conectarse directamente a la base de datos.
- Separar cuentas de administración, asistentes y clientes según las necesidades reales del negocio.
- Definir consentimiento, aviso de privacidad, retención y eliminación de datos antes de recopilar información personal.
- Incluir validación del lado servidor, protección contra abuso, control de acceso y registro de cambios.

## Puntos de extensión previstos

1. **Contenido administrable:** sustituir progresivamente `app/data.ts` por un repositorio de contenido con la misma estructura pública.
2. **Registro de eventos:** insertar un módulo independiente en la landing de OEE y conectarlo a un endpoint dedicado cuando el flujo, campos y avisos legales estén aprobados.
3. **Cuentas y permisos:** crear rutas protegidas separadas de las landings públicas; no mezclar autenticación con la navegación de la demo.
4. **Panel administrativo:** consumir los mismos servicios de contenido y eventos mediante permisos por rol.
5. **Persistencia:** elegir y documentar la base de datos sólo después de definir volumen, responsables, exportaciones y periodos de conservación.

Esta organización permite añadir las funciones futuras sin rediseñar las landing pages ni modificar el flujo actual de menús y WhatsApp.
