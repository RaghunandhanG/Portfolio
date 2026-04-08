import { useState, useEffect } from 'react';
import { ExternalLink, Trophy, Target, Flame, Code2, Star } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

function LeetCodeIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

function AnimatedNumber({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [visible, target, duration]);

  return count;
}

function DifficultyRing({ label, solved, total, color, size = 70 }) {
  const percentage = total > 0 ? (solved / total) * 100 : 0;
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <circle
            cx={size/2} cy={size/2} r={radius} fill="none"
            stroke={color} strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
          {solved}
        </span>
      </div>
      <span className="text-xs text-muted">{label}</span>
    </div>
  );
}

export default function Profiles() {
  const ref = useScrollReveal();
  const [leetcode, setLeetcode] = useState(null);
  const [github, setGithub] = useState(null);
  const [lcLoading, setLcLoading] = useState(true);
  const [ghLoading, setGhLoading] = useState(true);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/Raghunandhan_G')
      .then(res => res.json())
      .then(data => { if (data.status === 'success') setLeetcode(data); })
      .catch(() => {})
      .finally(() => setLcLoading(false));

    fetch('https://api.github.com/users/RaghunandhanG')
      .then(res => res.json())
      .then(data => setGithub(data))
      .catch(() => {})
      .finally(() => setGhLoading(false));
  }, []);

  const Skeleton = () => (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <div key={i} className="h-10 rounded-lg bg-white/5 animate-pulse" />
      ))}
    </div>
  );

  return (
    <section id="profiles" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal">
          <SectionHeading title="Coding" highlight="Profiles" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LeetCode */}
          <div className="reveal">
            <div className="glow-border p-7 h-full hover:-translate-y-1 transition-all duration-500">
              <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full mb-6 opacity-60" />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <LeetCodeIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">LeetCode</h3>
                    <p className="text-muted text-sm font-mono">Raghunandhan_G</p>
                  </div>
                </div>
                <a
                  href="https://leetcode.com/u/Raghunandhan_G/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted hover:text-amber-500 hover:bg-amber-500/5 transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {lcLoading ? <Skeleton /> : leetcode ? (
                <>
                  {/* Total solved big number */}
                  <div className="text-center mb-6 py-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-4xl font-bold text-white mb-1">
                      <AnimatedNumber target={leetcode.totalSolved} />
                    </p>
                    <p className="text-muted text-sm">Problems Solved</p>
                  </div>

                  {/* Difficulty rings */}
                  <div className="flex justify-around mb-6">
                    <DifficultyRing label="Easy" solved={leetcode.easySolved} total={leetcode.totalEasy} color="#22c55e" />
                    <DifficultyRing label="Medium" solved={leetcode.mediumSolved} total={leetcode.totalMedium} color="#f59e0b" />
                    <DifficultyRing label="Hard" solved={leetcode.hardSolved} total={leetcode.totalHard} color="#ef4444" />
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <Trophy size={16} className="text-yellow-500" />
                      <div>
                        <p className="text-white font-semibold text-sm">#{leetcode.ranking?.toLocaleString()}</p>
                        <p className="text-muted text-xs">Ranking</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <Flame size={16} className="text-orange-400" />
                      <div>
                        <p className="text-white font-semibold text-sm">{leetcode.acceptanceRate?.toFixed(1)}%</p>
                        <p className="text-muted text-xs">Acceptance</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-muted text-sm text-center py-8">Unable to load stats</p>
              )}
            </div>
          </div>

          {/* GitHub */}
          <div className="reveal">
            <div className="glow-border p-7 h-full hover:-translate-y-1 transition-all duration-500">
              <div className="h-1 w-full bg-gradient-to-r from-gray-400 via-white to-gray-400 rounded-full mb-6 opacity-30" />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-lg">
                    <GithubIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">GitHub</h3>
                    <p className="text-muted text-sm font-mono">RaghunandhanG</p>
                  </div>
                </div>
                <a
                  href="https://github.com/RaghunandhanG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {ghLoading ? <Skeleton /> : github ? (
                <>
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="text-center py-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <p className="text-3xl font-bold text-white"><AnimatedNumber target={github.public_repos} /></p>
                      <p className="text-muted text-xs mt-1">Repositories</p>
                    </div>
                    <div className="text-center py-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <p className="text-3xl font-bold text-white"><AnimatedNumber target={github.followers} /></p>
                      <p className="text-muted text-xs mt-1">Followers</p>
                    </div>
                  </div>

                  {/* Bio */}
                  {github.bio && (
                    <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <p className="text-muted text-sm leading-relaxed italic">"{github.bio}"</p>
                    </div>
                  )}

                  {/* Contribution Graph */}
                  <div className="rounded-xl overflow-hidden bg-white/[0.02] border border-white/5 p-4">
                    <p className="text-xs text-muted mb-3 font-medium">Contribution Activity</p>
                    <img
                      src="https://ghchart.rshah.org/6366f1/RaghunandhanG"
                      alt="GitHub Contributions"
                      className="w-full rounded opacity-80 hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </>
              ) : (
                <p className="text-muted text-sm text-center py-8">Unable to load stats</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
