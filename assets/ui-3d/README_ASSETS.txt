ESG EXPERIENCE™ — ASSETS VISUALES 3D — V1

Esta carpeta contiene los recursos visuales preparados para integrar en la app web real.
Los botones son PNG con transparencia y NO sustituyen la navegación: se usan como capa visual dentro de botones HTML reales.

ESTRUCTURA
- backgrounds/app-leather-cover.png  -> fondo principal de cuero tipo agenda.
- textures/ivory-stone-texture.png  -> textura de piedra/crema para paneles secundarios.
- brand/                             -> logo, mariposa y avatar de Eilen.
- buttons/home/                      -> botones visuales 3D del inicio.
- reference/home-visual-reference.png -> referencia del diseño general; no debe usarse como una sola imagen clicable.

REGLA MIA
El nombre vigente es: MIA — Monetiza con IA (sin tilde en MIA).
El asset 06-mia-monetiza-con-ia.png ya usa la versión correcta.

INTEGRACIÓN
Cada PNG se colocará dentro de un <button> o <a> real. La ruta, accesibilidad, estado, textos administrables y analítica permanecen en HTML/JS. Así la futura capa /admin podrá modificar contenido sin romper la estética.
