# 🍰 Pastelería Mil Sabores - Frontend (React/Vite)

Este es el repositorio del *Frontend* de la aplicación web de la pastelería **Mil Sabores**.

Desarrollado con **React** y **Vite**, el objetivo principal es consumir la API RESTful proporcionada por el [Backend de Spring Boot](https://github.com/btorresd/backend-pasteleria-mil-sabores).

---

## 🚀 1. Puesta en Marcha (Inicio Rápido)

Sigue estos pasos para clonar, instalar dependencias e iniciar la aplicación de desarrollo.

### 1.1. Prerrequisitos

* **Node.js & npm** (Versión LTS recomendada).
* El **Backend de Spring Boot** debe estar corriendo en `http://localhost:8080` para que la aplicación funcione correctamente (especialmente el carrito y el registro).

### 1.2. Instalación y Ejecución

1.  **Clonar el repositorio:**

    ```bash
    git clone [https://github.com/anamariasilva/front-end](https://github.com/anamariasilva/front-end)
    cd pasteleria-frontend
    ```

2.  **Instalar dependencias:**
    Instala todas las librerías definidas en `package.json`:

    ```bash
    npm install
    ```

3.  **Iniciar la aplicación (Modo Desarrollo):**
    Utiliza el script `dev` de Vite para iniciar el servidor local.

    ```bash
    npm run dev
    ```

    *La aplicación estará disponible en tu navegador en: `http://localhost:5173` (o el puerto que muestre la terminal).*

---

## ⚙️ 2. Estructura y Tecnologías

| Tecnología | Descripción |
| :--- | :--- |
| **Framework** | React 18+ |
| **Bundler** | Vite |
| **Estilos** | Bootstrap 5.x |
| **Comunicación** | Axios (para API REST a `http://localhost:8080`) |
| **Pruebas Unitarias** | Jasmine y Karma |

### 2.1. Rutas del Frontend

El proyecto incluye las siguientes rutas de página:

* `/`: Página de Inicio.
* `/productos`: Lista de Productos.
* `/carrito`: Carro de Compras.
* `/registro`: Formulario de Registro.
* `/nosotros`: Información de la empresa (Contenido estático IE1.1).
* `/contacto`: Datos de contacto (Contenido estático IE1.1).

---

## 🧪 3. Pruebas Unitarias (IE2.3)

La lógica de validación del formulario de registro ha sido refactorizada a una función pura (`src/utils/validacionRegistro.js`) y probada utilizando **Jasmine** como framework y **Karma** como test runner.

### 3.1. Archivos Clave de Testing

* **Lógica a Probar:** `src/utils/validacionRegistro.js`
* **Specs de Prueba:** `spec/validacionRegistro.spec.js`
* **Configuración:** `karma.conf.js`

### 3.2. Ejecutar las Pruebas

Para validar el cumplimiento de los requisitos de calidad del formulario de registro, ejecuta:

```bash
npm run test:unit
