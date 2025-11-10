import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Search, User, Bell, Facebook, Twitter, Instagram, Youtube, MessageCircle, Star, Activity, Flame, Award, Sparkles, UserPlus } from 'lucide-react';

// Portfolio Prototype: WEBTOON Redesign
// Focus: Visual clarity, behavioral depth, and storytelling polish
// This is a UX demonstration, not a production application

const WebtoonRedesign = () => {
  const [activeCarousel, setActiveCarousel] = useState(0);
  const [activeDay, setActiveDay] = useState('Wed');
  const [showRecent, setShowRecent] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, type: 'new_episode', title: 'Tower of God', message: 'Episode 156 is now available!', time: '2 hours ago', thumb: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=150&h=200&fit=crop', unread: true },
    { id: 2, type: 'new_episode', title: 'Unordinary', message: 'Episode 89 is now available!', time: '5 hours ago', thumb: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=150&h=200&fit=crop', unread: true }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;
  const heroItems = [
    { title: 'Operation: True Love', color: 'from-purple-600 to-pink-600', tag: 'TRENDING #1' },
    { title: 'Spider-Man: Web of Shadows', color: 'from-red-600 to-orange-600', tag: 'MARVEL' },
    { title: 'Tower of God', color: 'from-blue-600 to-cyan-600', tag: 'POPULAR' },
    { title: 'Solo Leveling', color: 'from-gray-800 to-gray-600', tag: 'TRENDING #2' },
    { title: 'True Beauty', color: 'from-pink-500 to-rose-600', tag: 'ROMANCE' },
    { title: 'Lore Olympus', color: 'from-yellow-500 to-orange-500', tag: 'MYTHOLOGY' }
  ];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Completed'];
  const dailyUpdates = { 'Wed': [
      { title: 'Teenage Mercenary', episode: 'EP. 156', color: 'from-blue-500 to-indigo-600' },
      { title: 'Hand Jumper', episode: 'EP. 94', color: 'from-red-500 to-pink-600' },
      { title: 'Unordinary', episode: 'EP. 89', color: 'from-purple-500 to-violet-600' },
      { title: 'The Remarried Empress', episode: 'EP. 203', color: 'from-yellow-400 to-orange-500' },
      { title: 'Villains Are Destined to Die', episode: 'EP. 67', color: 'from-gray-700 to-gray-900' }
    ]};
  // Continue Reading: Enhanced with behavioral triggers (Zeigarnik Effect)
  // Progress bars and episode counts encourage completion
  const continueReading = [
    { id: 1, title: 'Tower of God', progress: 75, lastRead: '2 days ago', newEp: true, episodesLeft: 3, color: 'from-blue-600 to-cyan-600', prompt: "You're 75% through" },
    { id: 2, title: 'Solo Leveling', progress: 90, lastRead: '1 day ago', newEp: true, episodesLeft: 1, color: 'from-gray-800 to-gray-600', prompt: "Almost done! 1 episode left" },
    { id: 3, title: 'True Beauty', progress: 60, lastRead: '3 days ago', newEp: false, episodesLeft: 8, color: 'from-pink-500 to-rose-600', prompt: "3 episodes behind!" },
    { id: 4, title: 'Lore Olympus', progress: 85, lastRead: '1 day ago', newEp: true, episodesLeft: 2, color: 'from-yellow-500 to-orange-500', prompt: "You're 85% through" },
    { id: 5, title: 'Midnight Poppy Land', progress: 45, lastRead: '4 days ago', newEp: false, episodesLeft: 12, color: 'from-purple-600 to-indigo-600', prompt: "5 episodes behind!" }
  ];
  const popularOriginals = [
    { id: 1, title: 'Tower of God', subscribers: '4.8M', rating: 4.9, color: 'from-blue-600 to-cyan-600' },
    { id: 2, title: 'True Beauty', subscribers: '6.1M', rating: 4.9, color: 'from-pink-500 to-rose-600' },
    { id: 3, title: 'Solo Leveling', subscribers: '5.2M', rating: 4.8, color: 'from-gray-800 to-gray-600' },
    { id: 4, title: 'Lore Olympus', subscribers: '4.5M', rating: 4.9, color: 'from-yellow-500 to-orange-500' },
    { id: 5, title: 'Unordinary', subscribers: '3.9M', rating: 4.7, color: 'from-purple-500 to-violet-600' },
    { id: 6, title: 'The Remarried Empress', subscribers: '4.2M', rating: 4.8, color: 'from-yellow-400 to-orange-500' }
  ];
  // For You: AI-driven personalization with match percentages and genre tags
  // Visual differentiation signals intelligent recommendation
  const forYouFeed = [
    { id: 1, title: 'Lore Olympus', reason: 'Because you read Lets Play', rating: 4.8, likes: 1200, trending: true, matchPercent: 95, genres: ['Romance', 'Fantasy'], color: 'from-yellow-500 to-orange-500' },
    { id: 2, title: 'Midnight Poppy Land', reason: 'Similar to your favorites', rating: 4.7, likes: 980, trending: false, matchPercent: 88, genres: ['Romance', 'Drama'], color: 'from-purple-600 to-indigo-600' },
    { id: 3, title: 'Purple Hyacinth', reason: 'Based on your reading history', rating: 4.9, likes: 1500, trending: true, matchPercent: 92, genres: ['Mystery', 'Action'], color: 'from-purple-500 to-pink-600' },
    { id: 4, title: 'Villains Are Destined to Die', reason: 'Recommended for you', rating: 4.6, likes: 850, trending: false, matchPercent: 85, genres: ['Fantasy', 'Romance'], color: 'from-gray-700 to-gray-900' }
  ];
  // Editor's Picks: Curated selections with softer gradients and staff badge
  // Emphasizes editorial curation and quality
  const editorsPicks = [
    { id: 1, title: 'Midnight Poppy Land', description: 'A thrilling romance', color: 'from-purple-200 to-indigo-300' },
    { id: 2, title: 'Purple Hyacinth', description: 'Mystery and espionage', color: 'from-purple-200 to-pink-300' },
    { id: 3, title: 'The Remarried Empress', description: 'Historical drama', color: 'from-yellow-200 to-orange-300' },
    { id: 4, title: 'Villains Are Destined to Die', description: 'Fantasy romance', color: 'from-gray-300 to-gray-400' },
    { id: 5, title: 'Unordinary', description: 'Supernatural action', color: 'from-purple-200 to-violet-300' }
  ];
  const popularCanvas = [
    { id: 1, title: 'My Dear Cold-Blooded King', creator: '@lifelight', subscribers: '892K', color: 'from-purple-600 to-indigo-800' },
    { id: 2, title: 'Vampire Bites', creator: '@artist1', subscribers: '756K', color: 'from-red-600 to-pink-700' },
    { id: 3, title: 'The Witch\'s Doll', creator: '@artist2', subscribers: '643K', color: 'from-green-600 to-teal-700' },
    { id: 4, title: 'Moonlight Shadows', creator: '@creator3', subscribers: '521K', color: 'from-blue-600 to-cyan-700' },
    { id: 5, title: 'Dark Secrets', creator: '@artist4', subscribers: '489K', color: 'from-gray-700 to-gray-900' },
    { id: 6, title: 'Crystal Dreams', creator: '@creator5', subscribers: '432K', color: 'from-pink-500 to-rose-600' }
  ];
  // Creator Activity: Humanized engagement with profile emphasis
  // Follow buttons encourage community building
  const latestActivity = [
    { id: 1, creator: '@lifelight', action: 'New episode tonight!', series: 'Cold-Blooded King', time: '2 hours ago', initial: 'L', updateText: 'published Episode 142' },
    { id: 2, creator: '@artmaster', action: 'Behind-the-scenes art drop', series: 'The Last Sorcerer', time: '4 hours ago', initial: 'A', updateText: 'updated Episode 88' },
    { id: 3, creator: '@storyteller', action: 'published Episode 3', series: 'Whispers of the Past', time: '6 hours ago', initial: 'S', updateText: 'published Episode 3' },
    { id: 4, creator: '@comicfan', action: 'published Episode 20', series: 'Galactic Guardians', time: '1 day ago', initial: 'C', updateText: 'published Episode 20' },
    { id: 5, creator: '@inkweaver', action: 'updated Episode 10', series: 'Shadows of Eldoria', time: '1 day ago', initial: 'I', updateText: 'updated Episode 10' },
    { id: 6, creator: '@dreamer', action: 'published Episode 5', series: 'The Crystal Prophecy', time: '2 days ago', initial: 'D', updateText: 'published Episode 5' },
    { id: 7, creator: '@legendmaker', action: 'updated Episode 110', series: 'Chronicles of Aethel', time: '3 days ago', initial: 'L', updateText: 'updated Episode 110' },
    { id: 8, creator: '@sketchartist', action: 'published Episode 45', series: 'Mystic Realms', time: '3 days ago', initial: 'S', updateText: 'published Episode 45' }
  ];
  const activityScrollRef = useRef<HTMLDivElement>(null);
  const scrollActivity = (direction: 'left' | 'right') => {
    if (activityScrollRef.current) {
      const scrollAmount = 336; // card width (320px) + gap (16px)
      activityScrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const recentlyViewed = [
    { title: 'Just Business', rank: '#1', thumb: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=150&h=200&fit=crop' }
  ];
  const nextCarousel = () => setActiveCarousel((prev) => (prev + 1) % heroItems.length);
  const prevCarousel = () => setActiveCarousel((prev) => (prev - 1 + heroItems.length) % heroItems.length);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="font-bold text-2xl" style={{color: '#00DC64'}}>WEBTOON</div>
            <nav className="flex gap-6 text-sm font-bold" aria-label="Main navigation">
              <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-2" aria-label="Originals">ORIGINALS</a>
              <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-2" aria-label="Categories">CATEGORIES</a>
              <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-2" aria-label="Rankings">RANKINGS</a>
              <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-2" aria-label="Canvas">CANVAS</a>
            </nav>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="hover:text-[#00DC64] font-bold transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-2" aria-label="WEBTOON Shop">WEBTOON SHOP</a>
            <a href="#" className="hover:text-[#00DC64] font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-2" aria-label="Creators 101">Creators 101</a>
            <button className="bg-[#00DC64] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#00c055] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] focus:ring-offset-2" aria-label="Publish your work">Publish</button>
            <a href="#" className="font-medium hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-2" aria-label="User profile">Pushan Bhattacharyya</a>
            <button className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded p-1" aria-label="Search">
              <Search className="w-5 h-5 cursor-pointer" />
            </button>
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="relative hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded p-1" aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ''}`}>
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold" aria-label={`${unreadCount} unread notifications`}>{unreadCount}</span>}
              </button>
              {showNotifications && (
                <div className="absolute right-0 top-12 w-96 bg-white rounded-lg shadow-2xl border z-50 max-h-96 overflow-auto" role="dialog" aria-label="Notifications" aria-modal="true">
                  <div className="p-4 border-b flex justify-between items-center">
                    <h3 className="font-bold">Notifications</h3>
                    <button onClick={() => setShowNotifications(false)} className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded p-1" aria-label="Close notifications">✕</button>
                  </div>
                  <div role="list" aria-label="Notification list">
                    {notifications.map(n => (
                      <div key={n.id} className={`p-4 border-b hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#00DC64] cursor-pointer ${n.unread ? 'bg-[#00DC64]/5' : ''}`} role="listitem" tabIndex={0} aria-label={`${n.unread ? 'Unread ' : ''}Notification: ${n.title} - ${n.message}`}>
                        <div className="flex gap-3">
                          <div className="w-12 h-16 rounded bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs" aria-hidden="true">{n.title.charAt(0)}</div>
                          <div>
                            <h4 className="font-bold text-sm text-gray-900">{n.title}</h4>
                            <p className="text-sm text-gray-600">{n.message}</p>
                            <span className="text-xs text-gray-400">{n.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded p-1" aria-label="User profile">
              <User className="w-6 h-6 cursor-pointer" />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed right-0 top-0 h-full bg-white shadow-2xl z-40 transition-transform duration-300 ${showRecent ? 'translate-x-0' : 'translate-x-full'} w-64 flex flex-col`}>
        <div className="p-4 border-b relative"><div className="flex items-center gap-3"><h3 className="font-bold flex-1">Recently viewed</h3><button onClick={() => setShowRecent(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200" title="Close drawer"><ChevronLeft className="w-5 h-5 text-gray-700" /></button></div></div>
        <div className="flex-1 overflow-y-auto p-4" role="list" aria-label="Recently viewed comics">
          {recentlyViewed.map((item, idx) => (
            <div key={idx} className="flex gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00DC64]" role="listitem" tabIndex={0} aria-label={`Recently viewed: ${item.title}, ranked ${item.rank}`}>
              <div className="w-16 h-20 rounded bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-xs font-bold p-2 text-center" aria-hidden="true">{item.title}</div>
              <div>
                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500">{item.rank}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t p-4">
          <p className="text-xs text-gray-400 text-center mb-3">Showing {recentlyViewed.length} comics</p>
          <a href="#" className="block w-full text-center py-2.5 bg-white border-2 border-[#00DC64] rounded-lg text-sm font-semibold text-[#00DC64] hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="View full reading history">
            View Full History →
          </a>
        </div>
      </div>

      <button onClick={() => setShowRecent(!showRecent)} className={`fixed top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-l-lg p-3 z-50 hover:bg-gray-50 transition-all ${showRecent ? 'right-64' : 'right-0'}`} title={showRecent ? 'Close drawer' : 'Open drawer'}>
        {showRecent ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </button>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* SECTION: Hero Banner – Featured Content Carousel */}
        {/* Webtoon green for tags and primary CTAs */}
        <section className="mb-16 fade-up" aria-label="Featured content carousel">
          <div className="relative h-96 rounded-2xl overflow-hidden group">
            <div className={`w-full h-full bg-gradient-to-br ${heroItems[activeCarousel].color} flex items-center justify-center`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40">
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="inline-block bg-[#00DC64] px-3 py-1 rounded-full text-sm font-bold mb-3" aria-label={`Tag: ${heroItems[activeCarousel].tag}`}>
                    {heroItems[activeCarousel].tag}
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{heroItems[activeCarousel].title}</h2>
                  <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black" aria-label={`Read ${heroItems[activeCarousel].title}`}>
                    Read Now
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Carousel navigation">
              {heroItems.map((_, idx) => (
                <button key={idx} onClick={() => setActiveCarousel(idx)} className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${activeCarousel === idx ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'}`} role="tab" aria-selected={activeCarousel === idx} aria-label={`Go to slide ${idx + 1}`} />
              ))}
            </div>
            <button onClick={prevCarousel} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white" aria-label="Previous slide">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button onClick={nextCarousel} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white" aria-label="Next slide">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </section>

        {/* SECTION: Daily Updates – Active Tab States */}
        {/* Webtoon green for active states, consistent CTA styling */}
        <section className="mb-16 fade-up" aria-label="Daily Updates">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold">Daily Updates</h2>
            <a href="#" className="text-[#00DC64] text-sm hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="View all daily updates">View all →</a>
          </div>
          <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide" role="tablist" aria-label="Select day">
            {days.map(day => (
              <button key={day} onClick={() => setActiveDay(day)} className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#00DC64] ${activeDay === day ? 'bg-[#00DC64] text-white' : 'bg-gray-100 hover:bg-gray-200'}`} role="tab" aria-selected={activeDay === day} aria-label={`View updates for ${day}`}>
                {day}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {dailyUpdates['Wed'].slice(0, 5).map((c, i) => (
              <div key={i} className="cursor-pointer group hover:scale-[1.02] hover-shadow transition-all duration-250 fade-up" style={{animationDelay: `${i * 50}ms`}} role="article" aria-label={`Daily update: ${c.title}`}>
                <div className="relative mb-2 rounded-lg overflow-hidden">
                  <div className={`w-full aspect-[3/4] bg-gradient-to-br ${c.color} flex items-center justify-center text-white font-bold p-4 text-center text-sm group-hover:scale-105 transition`} aria-label={`${c.title} cover`}>
                    {c.title}
                  </div>
                  <div className="absolute top-2 right-2 bg-[#00DC64] text-white text-xs px-2 py-1 rounded-full font-bold">NEW</div>
                </div>
                <h3 className="font-medium text-sm text-gray-900">{c.title}</h3>
                <p className="text-xs text-gray-500">{c.episode}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-block text-[#00DC64] text-sm hover:underline font-semibold px-4 py-2 border-2 border-[#00DC64] rounded-lg hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label={`See full list for ${activeDay}`}>
              See full list for {activeDay} →
            </a>
          </div>
        </section>

        {/* SECTION: Continue Reading – Behavioral Zeigarnik Cue */}
        {/* Visually dominant section with progress indicators to encourage completion */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 fade-up" aria-label="Continue Reading section">
          <div className="flex justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-1">Continue Reading</h2>
              <p className="text-sm text-gray-600 font-medium">Pick up where you left off</p>
            </div>
            <a href="#" className="text-[#00DC64] text-sm hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded self-start" aria-label="View all continue reading items">View all →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-4">
            {continueReading.map((item, idx) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md p-5 cursor-pointer group hover:scale-[1.02] hover:shadow-xl transition-all duration-250 fade-up" style={{animationDelay: `${idx * 50}ms`, boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}} role="article" aria-label={`Continue reading ${item.title}`}>
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <div className={`w-full aspect-[3/4] bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold p-3 text-center text-sm`} aria-label={`${item.title} cover`}>
                    {item.title}
                  </div>
                  {item.newEp && <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full font-bold">NEW</div>}
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-semibold">
                    Progress: {item.progress}%
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <div className="mb-3">
                  <div className="h-2.5 bg-gray-200 rounded-full mb-2">
                    <div className="h-full bg-[#00DC64] rounded-full transition-all duration-300" style={{width: `${item.progress}%`}} aria-label={`${item.progress}% complete`} />
                  </div>
                  <p className="text-xs font-semibold text-[#00DC64] mb-1">{item.prompt}</p>
                  <p className="text-xs text-gray-600 font-medium">{item.episodesLeft} {item.episodesLeft === 1 ? 'episode' : 'episodes'} left</p>
                </div>
                <p className="text-xs text-gray-500 mb-3">{item.lastRead}</p>
                <button className="w-full bg-[#00DC64] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-[#00c055] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00DC64] focus:ring-offset-2 hover:shadow-lg hover:shadow-[#00DC64]/25" aria-label={`Resume reading ${item.title}`}>
                  Resume Now
                </button>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-block text-[#00DC64] text-sm hover:underline font-semibold px-4 py-2 border-2 border-[#00DC64] rounded-lg hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="See what's left to read">
              See what's left to read →
            </a>
          </div>
        </section>

        {/* SECTION: Popular in Originals – Trending Content */}
        {/* Consistent Webtoon green for CTAs and navigation */}
        <section className="mb-16 fade-up" aria-label="Popular in Originals">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-orange-500" aria-hidden="true" />
              <h2 className="text-2xl font-bold">Popular in Originals</h2>
            </div>
            <a href="#" className="text-[#00DC64] text-sm hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="View all popular originals">View all →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
            {popularOriginals.map((item, idx) => (
              <div key={item.id} className="cursor-pointer group hover:scale-[1.02] hover-shadow transition-all duration-250 fade-up" style={{animationDelay: `${idx * 50}ms`}} role="article" aria-label={`Popular series: ${item.title}`}>
                <div className="relative mb-2 rounded-lg overflow-hidden">
                  <div className={`w-full aspect-[3/4] bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold p-4 text-center text-sm group-hover:scale-105 transition`} aria-label={`${item.title} cover`}>
                    {item.title}
                  </div>
                  <div className="absolute top-2 left-2 bg-orange-500 text-white p-1.5 rounded-full flex items-center justify-center shadow-lg" aria-label="Trending">
                    <Flame className="w-3 h-3" />
                  </div>
                </div>
                <h3 className="font-medium text-sm text-gray-900">{item.title}</h3>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">👥 {item.subscribers}</span>
                  <span className="text-yellow-500 font-bold">⭐ {item.rating}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-block text-[#00DC64] text-sm hover:underline font-semibold px-4 py-2 border-2 border-[#00DC64] rounded-lg hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="See more popular series">
              See more popular →
            </a>
          </div>
        </section>

        {/* SECTION: Newly Released Originals – Fresh Content */}
        {/* Webtoon green for NEW badges and CTAs */}
        <section className="mb-16 fade-up" aria-label="Newly Released Originals">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold">Newly Released Originals</h2>
            <a href="#" className="text-[#00DC64] text-sm hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="View all newly released originals">View all →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {[{title:"Falling for It",color:"from-green-400 to-emerald-600"},{title:"Acting Gangster",color:"from-red-400 to-rose-600"},{title:"The Perfect Match",color:"from-blue-400 to-indigo-600"},{title:"Love in the Air",color:"from-pink-400 to-rose-600"},{title:"Dark Secrets",color:"from-gray-600 to-gray-800"}].map((item,i) => (
              <div key={i} className="cursor-pointer hover:scale-[1.02] hover-shadow transition-all duration-250 fade-up" style={{animationDelay: `${i * 50}ms`}} role="article" aria-label={`New release: ${item.title}`}>
                <div className="relative mb-2 rounded-lg overflow-hidden">
                  <div className={`w-full aspect-[3/4] bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold p-4 text-center`} aria-label={`${item.title} cover`}>
                    {item.title}
                  </div>
                  <div className="absolute top-2 left-2 bg-[#00DC64] text-white text-xs px-2 py-1 rounded font-bold">NEW</div>
                </div>
                <h3 className="font-medium text-sm text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-block text-[#00DC64] text-sm hover:underline font-semibold px-4 py-2 border-2 border-[#00DC64] rounded-lg hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="See more new releases">
              See more new releases →
            </a>
          </div>
        </section>

        {/* SECTION: For You – Personalized Recommendations */}
        {/* AI-driven personalization with match percentages and genre tags */}
        <section className="mb-16 fade-up" aria-label="For You personalized recommendations">
          <div className="flex justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#00DC64]" aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-bold">For You</h2>
                <p className="text-xs text-gray-600 font-medium mt-1">Personalized Recommendations</p>
              </div>
            </div>
            <a href="#" className="text-[#00DC64] text-sm hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded self-start" aria-label="View all personalized recommendations">View all →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {forYouFeed.map((item, idx) => (
              <div key={item.id} className="for-you-glow bg-white rounded-xl border-2 border-transparent p-3 cursor-pointer relative hover:scale-[1.02] hover-shadow transition-all duration-250 fade-up group" style={{animationDelay: `${idx * 50}ms`}} role="article" aria-label={`Recommended: ${item.title}`}>
                {item.trending && <div className="absolute -top-2 -right-2 bg-blue-500 text-white p-1.5 rounded-full flex items-center justify-center shadow-lg z-10"><Flame className="w-3 h-3" aria-label="Trending" /></div>}
                <div className="relative mb-2 rounded-lg overflow-hidden">
                  <div className={`w-full aspect-square bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold p-3 text-center text-xs`} aria-label={`${item.title} cover`}>
                    {item.title}
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1 text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-600 mb-2 font-medium">{item.reason}</p>
                {idx < 2 && <p className="text-xs text-gray-500 italic mb-2">Because you read {idx === 0 ? 'Lets Play' : 'Midnight Poppy Land'}</p>}
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.genres.map((genre, gIdx) => (
                    <span key={gIdx} className="text-xs px-2 py-0.5 bg-[#00DC64]/10 text-[#00DC64] rounded-full font-medium">{genre}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#00DC64]">{item.matchPercent}% match</span>
                  <div className="flex gap-2 text-xs">
                    <span className="text-yellow-500 font-bold">⭐ {item.rating}</span>
                    <span className="text-gray-600 font-semibold">❤️ {item.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Editor's Picks – Curated Selections */}
        {/* Soft pastel gradients and staff badge emphasize editorial curation */}
        <section className="mb-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 fade-up" aria-label="Editor's Picks section">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-purple-600" aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-bold text-purple-900">Editor's Picks</h2>
                <p className="text-xs text-gray-600 font-medium mt-1">Curated by Webtoon Team</p>
              </div>
            </div>
            <a href="#" className="text-purple-600 text-sm hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-purple-600 rounded self-start" aria-label="View all editor picks">View all →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {editorsPicks.map((item, idx) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm p-3 cursor-pointer hover:scale-[1.02] hover-shadow transition-all duration-250 fade-up group" style={{animationDelay: `${idx * 50}ms`}} role="article" aria-label={`Editor's pick: ${item.title}`}>
                <div className="relative mb-2 rounded-lg overflow-hidden">
                  <div className={`w-full aspect-[3/4] bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold p-4 text-center text-sm`} aria-label={`${item.title} cover`}>
                    {item.title}
                  </div>
                  <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3" aria-hidden="true" />
                    Staff Pick
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1 text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-block text-purple-600 text-sm hover:underline font-semibold px-4 py-2 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 rounded" aria-label="See more editor picks">
              See more editor picks →
            </a>
          </div>
        </section>

        {/* SECTION: Disney+ Stories – Brand Partnerships */}
        {/* Webtoon green for CTAs, maintains brand consistency */}
        <section className="mb-16 fade-up" aria-label="Disney+ Stories on WEBTOON">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold">Disney+ Stories on WEBTOON</h2>
            <a href="#" className="text-[#00DC64] text-sm hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="View all Disney+ stories">View all →</a>
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-6 mb-4">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Marvel • Star Wars • Disney Classics</h3>
              <p className="text-blue-200">Epic stories in vertical scroll format</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {[{title:"Spider-Man",tag:"MARVEL",color:"from-red-600 to-red-800"},{title:"Star Wars",tag:"STAR WARS",color:"from-yellow-500 to-orange-600"},{title:"Frozen",tag:"DISNEY",color:"from-blue-400 to-cyan-600"},{title:"The Mandalorian",tag:"STAR WARS",color:"from-gray-700 to-gray-900"},{title:"Avengers",tag:"MARVEL",color:"from-red-500 to-orange-600"}].map((item,i) => (
              <div key={i} className="cursor-pointer hover:scale-[1.02] hover-shadow transition-all duration-250 fade-up" style={{animationDelay: `${i * 50}ms`}} role="article" aria-label={`Disney+ story: ${item.title}`}>
                <div className="relative mb-2 rounded-lg overflow-hidden">
                  <div className={`w-full aspect-[3/4] bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold p-4 text-center text-sm`} aria-label={`${item.title} cover`}>
                    {item.title}
                  </div>
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">{item.tag}</div>
                </div>
                <h3 className="font-medium text-sm text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-block text-[#00DC64] text-sm hover:underline font-semibold px-4 py-2 border-2 border-[#00DC64] rounded-lg hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="See more Disney+ stories">
              See more Disney+ stories →
            </a>
          </div>
        </section>

        {/* SECTION: Popular in Canvas – Indie Spotlight */}
        {/* Enhanced framing with accent borders makes Canvas content pop */}
        <section className="mb-16 fade-up" aria-label="Popular in Canvas">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-bold text-[#00DC64] bg-[#00DC64]/10 px-3 py-1 rounded-full">🎨 Indie Spotlight:</span>
          </div>
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular in Canvas</h2>
            <a href="#" className="text-[#00DC64] text-sm hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="View all popular Canvas content">View all →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
            {popularCanvas.map((item, idx) => (
              <div key={item.id} className="cursor-pointer group hover:scale-[1.02] hover-shadow transition-all duration-250 fade-up" style={{animationDelay: `${idx * 50}ms`}} role="article" aria-label={`Canvas series: ${item.title}`}>
                <div className="relative mb-2 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-[#00DC64] transition-colors">
                  <div className={`w-full aspect-[3/4] bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold p-4 text-center text-sm group-hover:scale-105 transition`} aria-label={`${item.title} cover`}>
                    {item.title}
                  </div>
                </div>
                <h3 className="font-medium text-sm text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs font-semibold text-gray-700 mb-1">{item.creator}</p>
                <p className="text-xs text-gray-400">👥 {item.subscribers}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-block text-[#00DC64] text-sm hover:underline font-semibold px-4 py-2 border-2 border-[#00DC64] rounded-lg hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="See more Canvas creators">
              See more Canvas creators →
            </a>
          </div>
        </section>

        {/* SECTION: Creator Activity – Parasocial UX */}
        {/* Humanized engagement with creator quotes and follow buttons */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 relative fade-up" aria-label="Latest Creator Activity">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-blue-600" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-blue-900">Latest Creator Activity</h2>
            </div>
            <a href="#" className="text-blue-600 text-sm hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 rounded" aria-label="View all creator activity">View all →</a>
          </div>
          <div className="relative">
            <button onClick={() => scrollActivity('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label="Scroll left">
              <ChevronLeft className="w-5 h-5 text-blue-600" />
            </button>
            <div ref={activityScrollRef} className="overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide scroll-smooth">
              <div className="flex gap-4 min-w-max">
                {latestActivity.map((item, idx) => (
                  <div key={item.id} className="flex-shrink-0 w-80 bg-white rounded-xl p-4 shadow-sm hover-glow hover-shadow transition-all cursor-pointer border border-transparent hover:border-blue-200 hover:-translate-y-1 fade-up" style={{animationDelay: `${idx * 50}ms`}} role="article" aria-label={`Creator activity: ${item.creator} ${item.action}`}>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl ring-2 ring-blue-100 flex-shrink-0" aria-label={`${item.creator} avatar`}>
                        {item.initial}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-blue-600 mb-1">{item.creator}</p>
                        <p className="text-sm font-medium text-gray-800 mb-1">{item.action}</p>
                        <p className="text-xs text-gray-600 truncate mb-1">{item.series}</p>
                        {idx === 0 && <p className="text-xs text-gray-500 italic mb-1">"New episode dropping tonight!"</p>}
                        {idx === 1 && <p className="text-xs text-gray-500 italic mb-1">"Behind-the-scenes art coming soon!"</p>}
                        <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-[#00DC64] text-white py-2 rounded-lg font-semibold text-sm hover:bg-[#00c055] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00DC64] focus:ring-offset-2" aria-label={`Follow ${item.creator}`}>
                      <UserPlus className="w-4 h-4" aria-hidden="true" />
                      Follow Creator
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => scrollActivity('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label="Scroll right">
              <ChevronRight className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </section>

        {/* SECTION: Discover Canvas Creators – Indie Spotlight */}
        {/* Part of Canvas visibility focus with enhanced creator emphasis */}
        <section className="mb-16 fade-up" aria-label="Discover Canvas Creators">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-bold text-[#00DC64] bg-[#00DC64]/10 px-3 py-1 rounded-full">🎨 Indie Spotlight:</span>
          </div>
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold">Discover Canvas Creators</h2>
            <a href="#" className="text-[#00DC64] text-sm hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="View all Canvas creators">View all →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[{title:"Vampire Bites",creator:"Artist1",color:"from-red-500 to-purple-600"},{title:"The Witch's Doll",creator:"Artist2",color:"from-green-500 to-teal-600"},{title:"Moonlight Tales",creator:"Artist3",color:"from-blue-500 to-indigo-600"},{title:"Shadow Realm",creator:"Artist4",color:"from-gray-600 to-gray-800"},{title:"Crystal Dreams",creator:"Artist5",color:"from-pink-500 to-rose-600"}].map((item,i) => (
              <div key={i} className="cursor-pointer group hover:scale-[1.02] hover-shadow transition-all duration-250 fade-up" style={{animationDelay: `${i * 50}ms`}} role="article" aria-label={`Canvas creator: ${item.title} by ${item.creator}`}>
                <div className="mb-2 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-[#00DC64] transition-colors">
                  <div className={`w-full aspect-[3/4] bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold p-4 text-center text-sm group-hover:scale-105 transition`} aria-label={`${item.title} cover`}>
                    {item.title}
                  </div>
                </div>
                <h3 className="font-medium text-sm text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs font-semibold text-gray-700">{item.creator}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer: Charcoal background with Webtoon green accents */}
      <footer className="bg-[#121212] text-gray-300 mt-16" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="About WEBTOON">About</a></li>
                <li><a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="Help">Help</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="Guidelines">Guidelines</a></li>
                <li><a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="Canvas">Canvas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Publish</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="Start Publishing">Publish</a></li>
                <li><a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded px-1" aria-label="Careers">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4" role="list">
                <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="hover:text-[#00DC64] transition focus:outline-none focus:ring-2 focus:ring-[#00DC64] rounded" aria-label="Message Circle"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">© 2025 Webtoon (Unofficial Redesign for Educational/Portfolio Use)</p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">Created by Pushan Bhattacharyya for UX research and portfolio purposes only. No affiliation with WEBTOON Entertainment Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebtoonRedesign;

