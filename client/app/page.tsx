'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Stethoscope, Brain, Map, BookOpen, Shield, ChevronRight } from 'lucide-react';

const EXAMPLE_CONDITIONS = [
  'Diabetes management',
  'Back pain',
  'Skin rash',
  'Mental health support',
  'Hypertension',
  'Eye care',
];

const FEATURES = [
  {
    icon: Stethoscope,
    title: 'Find the Right Doctor',
    description:
      'Search doctors by health condition, specialisation, or expertise. Connect anonymously and securely.',
  },
  {
    icon: Brain,
    title: 'AI Health Analysis',
    description:
      'Describe your symptoms or upload an image for instant AI-powered health insights — powered by Claude.',
  },
  {
    icon: BookOpen,
    title: 'Health Programmes',
    description:
      'Join organisation-run programmes tailored to specific conditions. Get structured support and guidance.',
  },
  {
    icon: Map,
    title: 'Nearby Medical Centres',
    description:
      'Discover approved clinics, hospitals, and labs near you on an interactive map.',
  },
  {
    icon: Shield,
    title: 'Patient Privacy First',
    description:
      'Your full identity is never shared. Doctors and programmes only see your initials.',
  },
];

export default function LandingPage() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search/doctors?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-lg">MedTrust</span>
          </div>
          <nav className="flex items-center gap-3">
            <Link href="/programmes" className="text-sm text-muted-foreground hover:text-foreground hidden sm:block">
              Programmes
            </Link>
            <Link href="/institutions" className="text-sm text-muted-foreground hover:text-foreground hidden sm:block">
              Institutions
            </Link>
            <Button asChild variant="ghost" size="sm">
              <Link href="/login">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/register">Get started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-primary/5 to-background">
        <Badge variant="secondary" className="mb-4">Trusted healthcare connections</Badge>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
          Your health,{' '}
          <span className="text-primary">connected</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl text-lg">
          Find the right doctor, join health programmes, and get AI-powered insights — all in one private, secure platform.
        </p>

        <form onSubmit={handleSearch} className="flex gap-2 mt-8 w-full max-w-lg">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by health condition, e.g. diabetes, back pain…"
              className="pl-10 h-12 text-sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Button type="submit" size="lg" className="h-12 px-6">
            Find Doctors
          </Button>
        </form>

        <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-lg">
          {EXAMPLE_CONDITIONS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setQuery(c);
                router.push(`/search/doctors?q=${encodeURIComponent(c)}`);
              }}
              className="text-xs px-3 py-1 rounded-full border bg-background hover:border-primary hover:text-primary transition-colors"
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex gap-3 mt-8">
          <Button asChild size="lg">
            <Link href="/register">
              Create free account <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/institutions">Explore Centres</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Everything you need</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-xl border p-6 hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-foreground text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to take control of your health?</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
          Join thousands of patients and doctors already using MedTrust.
        </p>
        <Button asChild variant="secondary" size="lg">
          <Link href="/register">Get started for free</Link>
        </Button>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} MedTrust. Built for better healthcare connections.</p>
      </footer>
    </div>
  );
}
