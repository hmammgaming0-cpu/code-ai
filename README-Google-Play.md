# Code AI — Google Play

هذا المشروع هو نسخة Android من واجهة Code AI باستخدام Capacitor.

## البناء بدون Android Studio

على جهاز كمبيوتر أو خدمة بناء سحابية:

```bash
npm install
npx cap add android
npx cap sync android
```

لإنشاء AAB للنشر على Google Play:

```bash
cd android
./gradlew bundleRelease
```

على Windows:

```bat
cd android
gradlew.bat bundleRelease
```

ملف AAB الناتج يكون عادة داخل:
`android/app/build/outputs/bundle/release/`

## مهم
Google Play يحتاج نسخة Release موقعة. احتفظ بمفتاح التوقيع (keystore) بأمان.

اسم التطبيق: Code AI
Package ID: com.codeai.app

هذه النسخة تستخدم واجهة Code AI الحالية. الذكاء الاصطناعي الخارجي الحقيقي يحتاج Backend آمن؛ لا تضع مفتاح API سريًا داخل التطبيق.
