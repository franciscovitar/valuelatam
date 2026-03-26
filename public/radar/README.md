# Value Latam Radar – Guía de Instalación

## Archivos incluidos

```
/radar/
├── index.html          ← Login (página principal)
├── app.html            ← Dashboard del cliente
├── admin.html          ← Panel de administración (vos)
├── firebase-config.js  ← Configuración Firebase (EDITAR ESTE)
└── README.md           ← Esta guía
```

---

## PASO 1 — Crear proyecto Firebase (5 min)

1. Ir a **console.firebase.google.com**
2. "Crear proyecto" → nombre: `valuelatam-radar`
3. Desactivar Google Analytics
4. En el proyecto creado:
   - **Authentication** → Comenzar → activar **Email/Contraseña**
   - **Firestore Database** → Crear base de datos → Modo producción → `us-central1`
5. Ir a **Configuración del proyecto** (ícono ⚙️) → pestaña "General"
6. Bajar hasta "Tus apps" → hacer clic en `</>` (Web)
7. Registrar app → copiar el objeto `firebaseConfig`

---

## PASO 2 — Configurar firebase-config.js

Abrir `firebase-config.js` y reemplazar con tus datos:

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY_REAL",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const ADMIN_EMAIL = "tu-email@gmail.com"; // ← TU EMAIL
```

---

## PASO 3 — Reglas de Firestore

En Firebase Console → Firestore → **Reglas**, pegar esto:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Config global (solo admin puede escribir)
    match /config/{doc} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.token.email == "mauricio@valuelatam.com";
      match /historial/{h} {
        allow read: if request.auth != null;
        allow write: if request.auth != null && request.auth.token.email == "mauricio@valuelatam.com";
      }
    }

    // Datos de empresa: solo el propio usuario o admin
    match /empresas/{userId} {
      allow read, write: if request.auth != null &&
        (request.auth.uid == userId || request.auth.token.email == "TU_EMAIL@gmail.com");

      match /{subcol}/{docId} {
        allow read, write: if request.auth != null &&
          (request.auth.uid == userId || request.auth.token.email == "mauricio@valuelatam.com");
      }
    }
  }
}
```

⚠️ Reemplazar `TU_EMAIL@gmail.com` con tu email real en las reglas también.

---

## PASO 4 — Subir al hosting

Subir los 4 archivos a la carpeta `/radar/` de tu hosting:
- `index.html`
- `app.html`
- `admin.html`
- `firebase-config.js`

Tu URL quedará: `valuelatam.com/radar/`

---

## PASO 5 — Primer acceso

1. Ir a `valuelatam.com/radar/`
2. Registrarte con **tu email** (el que pusiste en ADMIN_EMAIL)
3. El sistema te redirige automáticamente a `admin.html`
4. Los clientes que se registran van a `app.html`

---

## Flujo de uso

### Como admin (vos):
- Entrás a `/radar/` → vas directo a admin.html
- **TNA Global**: actualizás la tasa de referencia y se publica para todos los clientes
- **Clientes**: ves deuda, operaciones, TNA promedio de cada empresa
- **Notas**: dejás comentarios de relevamiento por cliente
- **Crear cliente**: podés crear la cuenta vos mismo y darle las credenciales

### Como cliente:
- Entran a `/radar/` con su email y contraseña
- Cargan sus entidades y operaciones
- El sistema genera cuotas automáticamente
- Ven su dashboard, comparador de tasas y calendario

---

## Precios de Firebase (referencia)

- Plan Spark (gratuito): hasta 1GB Firestore, 10K auth/mes → suficiente para empezar
- Plan Blaze (pay-as-you-go): escala automático, costo muy bajo para pocos clientes

---

## Soporte

Para cualquier duda o customización, contactar a Value Latam.
