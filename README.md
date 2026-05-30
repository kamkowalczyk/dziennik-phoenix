# Dziennik Profesora Alchemicusa

Interaktywna strona edukacyjna w stylu mrocznego dziennika laboratoryjnego projektu PHOENIX. Uczestnik podaje hasło dostępu, odtwarza wyniki doświadczeń chemicznych, zdobywa poziom dostępu i wpisuje kod eksperymentu.

## Wymagania

- Node.js 22 lub nowszy
- npm

## Instalacja

```bash
npm install
```

## Lokalny development

```bash
npm run dev
```

Vite pokaże lokalny adres, zwykle `http://localhost:5173/`.

## Build produkcyjny

```bash
npm run build
```

Gotowe pliki statyczne powstaną w katalogu `dist`.

## Podgląd buildu

```bash
npm run preview
```

## Deploy na GitHub Pages

1. Utwórz repozytorium na GitHubie, np. `dziennik-phoenix`.
2. Wgraj projekt do repozytorium i wypchnij go na gałąź `main`.
3. W repozytorium przejdź do `Settings` -> `Pages`.
4. W sekcji `Build and deployment` wybierz `GitHub Actions`.
5. Workflow `.github/workflows/deploy.yml` zbuduje aplikację i opublikuje katalog `dist`.
6. Po zakończeniu workflow strona będzie dostępna pod adresem:

```text
https://USERNAME.github.io/REPOSITORY_NAME/
```

Konfiguracja Vite używa `base: "./"`, więc aplikacja działa poprawnie w podkatalogu GitHub Pages bez ręcznego ustawiania nazwy repozytorium.

## Generowanie kodu QR

Po wdrożeniu użyj finalnego adresu GitHub Pages:

```text
https://USERNAME.github.io/REPOSITORY_NAME/
```

Możesz wygenerować QR kod online albo lokalnie:

```bash
npx qrcode "https://USERNAME.github.io/REPOSITORY_NAME/" -o dziennik-phoenix-qr.png
```

## Logika gry

- Hasło wejściowe do strony to `ORBITAL`.
- Pięć eksperymentów zwiększa poziom dostępu `0/5`.
- Każdy poprawnie zatwierdzony eksperyment odblokowuje jedną cyfrę kodu eksperymentu.
- Kod eksperymentu ma 5 cyfr: `22313`.
- Po wpisaniu kodu eksperymentu wyświetla się kod dostępu 4-cyfrowy: `2357`.
- Cały stan działa lokalnie w React, bez backendu i bazy danych.
