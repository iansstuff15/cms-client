import AppLayout from '@/components/layout/layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <AppLayout>{children}</AppLayout>
      </main>
    </>
  );
}
