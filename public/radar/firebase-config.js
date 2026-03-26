// ============================================================
// PEGÁ ACÁ TU CONFIGURACIÓN DE FIREBASE
// Console Firebase → Tu proyecto → Configuración → SDK
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyDkOtY98hUU2gZSkIN2GLNFHOrNIUyz5Ec",
  authDomain: "valuelatam-radar.firebaseapp.com",
  projectId: "valuelatam-radar",
  storageBucket: "valuelatam-radar.firebasestorage.app",
  messagingSenderId: "331939503150",
  appId: "1:331939503150:web:b87789a8809d2f0d7a93bf"
};

// Inicialización (no tocar)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Email del admin (solo este email accede al panel admin)
const ADMIN_EMAIL = "mauricio@valuelatam.com";
