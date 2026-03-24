import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero and other sections will go here */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">MedRex Website</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Coming soon - Your complete health companion
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
