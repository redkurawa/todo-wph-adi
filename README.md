# Todo WPH Adi

A modern Todo/Task management web application built with Next.js 15, React 19, and Tailwind CSS. Features include task management with priorities, date scheduling, and categorized lists (Today, Upcoming, Completed).

## 🚀 Features

- **Task Management**: Create, edit, and delete todo items
- **Categories**:
  - Today's tasks
  - Upcoming tasks
  - Completed tasks
- **Priority Levels**: Set task priorities (high, medium, low)
- **Date Scheduling**: Schedule tasks for specific dates
- **Dark Mode**: Built-in dark/light theme support
- **Responsive**: Works on desktop and mobile devices
- **Infinite Scroll**: Smooth loading with infinite scroll pagination

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form
- **UI Components**: Radix UI
- **Date Picker**: React Day Picker
- **Icons**: Lucide React

## 📋 Prerequisites

Before running the project, make sure you have:

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun
- Backend API running (see below)

## 🏃‍♂️ Cara Menjalankan

### 1. Clone Repository

```bash
git clone https://github.com/redkurawa/todo-wph-adi.git
cd todo-wph-adi
```

### 2. Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3. Backend API Setup

Project ini membutuhkan backend API. Anda bisa menggunakan backend yang tersedia di:

**Opsi A: Gunakan Backend Sendiri**
Pastikan backend API running di `http://localhost:8080` atau sesuaikan dengan konfigurasi environment variable.

**Opsi B: Setup Environment Variable**

Buat file `.env.local` di root directory:

```env
NEXT_PUBLIC_LOCAL_API_URL=http://localhost:8080
```

Ganti URL dengan address API backend Anda.

### 4. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat aplikasi.

## 📦 Build untuk Production

### Build Project

```bash
npm run build
```

### Jalankan Production Server

```bash
npm start
```

## 🚀 Deploy

### Deploy ke Vercel (Recommended)

1. Push kode ke GitHub repository
2. Buka [Vercel](https://vercel.com) dan login
3. Klik "Add New Project"
4. Import repository Anda
5. Tambahkan environment variable:
   - `NEXT_PUBLIC_LOCAL_API_URL` = URL backend API Anda
6. Klik "Deploy"

### Deploy ke Netlify

1. Push kode ke GitHub repository
2. Buka [Netlify](https://netlify.com) dan login
3. Klik "Add new site" → "Import an existing project"
4. Pilih repository Anda
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Tambahkan environment variable `NEXT_PUBLIC_LOCAL_API_URL`
7. Klik "Deploy"

### Deploy ke Render

1. Push kode ke GitHub repository
2. Buka [Render](https://render.com) dan login
3. Klik "New" → "Web Service"
4. Connect repository Anda
5. Configure:
   - Build command: `npm run build`
   - Start command: `npm start`
6. Tambahkan environment variable `NEXT_PUBLIC_LOCAL_API_URL`
7. Klik "Create Web Service"

## 📝 Struktur Project

```
todo-wph-adi/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── check.tsx          # Check/verify page
│   │   ├── list-completed.tsx # Completed tasks page
│   │   ├── list-today.tsx    # Today's tasks page
│   │   ├── list-upcomig.tsx  # Upcoming tasks page
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   ├── provider.tsx      # Providers (Query, Theme)
│   │   ├── todo-header.tsx   # Header component
│   │   └── todo-footer.tsx   # Footer component
│   ├── components/
│   │   ├── date-picker.tsx   # Date picker component
│   │   ├── edit-dialog.tsx   # Edit dialog
│   │   ├── edit-delete-dialog2.tsx
│   │   ├── get-list.tsx      # List fetcher component
│   │   ├── list-page.tsx     # List page component
│   │   ├── show-list.tsx     # Show list component
│   │   ├── task-priority.tsx # Priority component
│   │   ├── theme-provider.tsx # Theme provider
│   │   ├── todo-card.tsx     # Todo card component
│   │   ├── todo-checkbox.tsx # Todo checkbox
│   │   └── ui/               # UI components (shadcn)
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── checkbox.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── popover.tsx
│   │       ├── sonner.tsx
│   │       └── tabs.tsx
│   ├── constants/
│   │   └── todo-type.ts      # Todo type definitions
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   ├── services/
│   │   ├── api.ts            # Axios configuration
│   │   └── service.ts        # API service functions
│   ├── store/
│   │   └── todo-store.ts     # Zustand store
│   └── utils/
│       └── date.ts           # Date utilities
├── public/                   # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🎨 Kustomisasi

### Mengubah API URL

Buat file `.env.local` di root directory:

```env
NEXT_PUBLIC_LOCAL_API_URL=https://your-api-url.com
```

### Mengubah Tema

Aplikasi mendukung dark/light mode. Tema dapat diubah melalui `src/components/theme-provider.tsx`.

### Menambah Fitur Baru

1. Buat komponen di `src/components/`
2. Tambah page di `src/app/`
3. Update routing di `src/app/page.tsx`

## 🤝 Kontribusi

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add some amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buka Pull Request

## 📄 Lisensi

Distributed under the MIT License.

## 📧 Kontak

Jika ada pertanyaan, silakan hubungi melalui GitHub Issues.

---

Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS
