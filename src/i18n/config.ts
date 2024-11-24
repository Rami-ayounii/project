import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome to Not Alone',
          tagline: 'Anonymous Psychology Support for Students',
          login: 'Login',
          signup: 'Sign Up',
          advisor: 'Advisor',
          mentee: 'Mentee',
          topics: {
            social: 'Social',
            emotional: 'Emotional',
            academic: 'Academic',
            lifestyle: 'Lifestyle',
            biological: 'Biological',
          },
        },
      },
      fr: {
        translation: {
          welcome: 'Bienvenue sur Not Alone',
          tagline: 'Soutien psychologique anonyme pour les étudiants',
          login: 'Connexion',
          signup: "S'inscrire",
          advisor: 'Conseiller',
          mentee: 'Mentoré',
          topics: {
            social: 'Social',
            emotional: 'Émotionnel',
            academic: 'Académique',
            lifestyle: 'Style de vie',
            biological: 'Biologique',
          },
        },
      },
      ar: {
        translation: {
          welcome: 'مرحباً بك في Not Alone',
          tagline: 'دعم نفسي مجهول للطلاب',
          login: 'تسجيل الدخول',
          signup: 'إنشاء حساب',
          advisor: 'مستشار',
          mentee: 'طالب',
          topics: {
            social: 'اجتماعي',
            emotional: 'عاطفي',
            academic: 'أكاديمي',
            lifestyle: 'نمط الحياة',
            biological: 'بيولوجي',
          },
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;