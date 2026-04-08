import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

function AnimatedCounter({ target, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  const typedText = useTypingEffect([
    'AI Engineer',
    'ML Developer',
    'Problem Solver',
    'Open Source Enthusiast',
  ]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-blob delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-pink/5 rounded-full blur-[100px] animate-blob delay-600" />

      {/* Decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary-light text-sm mb-8 hover:bg-primary/10 transition-colors cursor-default">
            <Sparkles size={14} className="animate-pulse" />
            <span>Available for opportunities</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up opacity-0 delay-100 text-glow" style={{ animationFillMode: 'forwards' }}>
          Raghunandhan
          <span className="gradient-text block md:inline"> G</span>
        </h1>

        {/* Typing effect */}
        <div className="text-xl md:text-2xl text-muted mb-8 animate-fade-in-up opacity-0 delay-200 h-9" style={{ animationFillMode: 'forwards' }}>
          <span className="text-white font-mono">{typedText}</span>
          <span className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle" style={{ animation: 'typing-cursor 0.8s step-end infinite' }} />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-muted/80 max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 delay-300 leading-relaxed" style={{ animationFillMode: 'forwards' }}>
          Building intelligent systems with real-world impact. Specializing in
          <span className="text-primary-light font-medium"> Machine Learning</span>,
          <span className="text-accent font-medium"> Computer Vision</span>, and
          <span className="text-accent-pink font-medium"> Generative AI</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 delay-400" style={{ animationFillMode: 'forwards' }}>
          <a
            href="#contact"
            className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary via-accent to-accent-pink text-white font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 animate-gradient"
          >
            <span className="flex items-center gap-2">
              Let's Connect
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </a>
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl border border-primary/30 text-white hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            View Projects
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 mb-16 animate-fade-in-up opacity-0 delay-500" style={{ animationFillMode: 'forwards' }}>
          {[
            { icon: GithubIcon, href: 'https://github.com/RaghunandhanG', label: 'GitHub' },
            { icon: LinkedinIcon, href: 'https://linkedin.com/in/raghunandhan-g', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:raghugopalan3105@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl border border-white/10 text-muted hover:text-white hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <Icon size={20} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in-up opacity-0 delay-600" style={{ animationFillMode: 'forwards' }}>
          {[
            { value: 303, suffix: '+', label: 'LeetCode Problems' },
            { value: 4, suffix: '+', label: 'Projects Shipped' },
            { value: 50, suffix: '%', label: 'ML Improvements' },
          ].map(({ value, suffix, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                <AnimatedCounter target={value} suffix={suffix} />
              </p>
              <p className="text-muted text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted/50 hover:text-primary transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
