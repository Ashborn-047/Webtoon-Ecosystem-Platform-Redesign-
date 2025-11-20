"use client";

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Activity, Flame, Award, Sparkles, UserPlus, Heart } from 'lucide-react';
import { DisneyShowcase } from './DisneyShowcase';
import ImagePlaceholder from '@/components/shared/ImagePlaceholder';

const WebtoonHomepage = () => {
  const [activeCarousel, setActiveCarousel] = useState(0);
  const [activeDay, setActiveDay] = useState('Wed');
  
  const heroItems = [
    { title: 'Operation: True Love', color: 'from-purple-600 to-pink-600', tag: 'TRENDING #1' },
    { title: 'Spider-Man: Web of Shadows', color: 'from-red-600 to-orange-600', tag: 'MARVEL' },
    { title: 'Tower of God', color: 'from-blue-600 to-cyan-600', tag: 'POPULAR' },
    { title: 'The God of High School', color: 'from-orange-600 to-yellow-500', tag: 'ACTION' },
    { title: 'True Beauty', color: 'from-pink-500 to-rose-600', tag: 'ROMANCE' },
    { title: 'Lore Olympus', color: 'from-yellow-500 to-orange-500', tag: 'MYTHOLOGY' }
  ];
  
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Completed'];
  const dailyUpdates = {
    'Wed': [
      { title: 'Teenage Mercenary', episode: 'EP. 156', color: 'from-blue-500 to-indigo-600' },
      { title: 'Hand Jumper', episode: 'EP. 94', color: 'from-red-500 to-pink-600' },
      { title: 'Unordinary', episode: 'EP. 89', color: 'from-purple-500 to-violet-600' },
      { title: 'The Remarried Empress', episode: 'EP. 203', color: 'from-yellow-400 to-orange-500' },
      { title: 'Villains Are Destined to Die', episode: 'EP. 67', color: 'from-gray-700 to-gray-900' }
    ]
  };
  
  const continueReading = [
    { 
      id: 1, 
      title: 'Tower of God', 
      progress: 75, 
      color: 'linear-gradient(135deg, #0EA5E9, #3B82F6)', 
      statusText: "You're 75% through", 
      episodesLeft: 3, 
      lastUpdated: '2 days ago' 
    },
    { 
      id: 2, 
      title: 'The God of High School', 
      progress: 90, 
      color: 'linear-gradient(135deg, #EA580C, #FACC15)', 
      statusText: "Almost done! 1 episode left", 
      episodesLeft: 1, 
      lastUpdated: '1 day ago' 
    },
    { 
      id: 3, 
      title: 'True Beauty', 
      progress: 60, 
      color: 'linear-gradient(135deg, #EC4899, #F472B6)', 
      statusText: "3 episodes behind!", 
      episodesLeft: 8, 
      lastUpdated: '3 days ago' 
    },
    { 
      id: 4, 
      title: 'Lore Olympus', 
      progress: 85, 
      color: 'linear-gradient(135deg, #F59E0B, #FBBF24)', 
      statusText: "You're 85% through", 
      episodesLeft: 2, 
      lastUpdated: '1 day ago' 
    },
    { 
      id: 5, 
      title: 'Midnight Poppy Land', 
      progress: 45, 
      color: 'linear-gradient(135deg, #7C3AED, #A78BFA)', 
      statusText: "5 episodes behind!", 
      episodesLeft: 12, 
      lastUpdated: '4 days ago' 
    }
  ];
  
  const popularOriginals = [
    { id: 1, title: 'Tower of God', subscribers: '4.8M', rating: 4.9 },
    { id: 2, title: 'True Beauty', subscribers: '6.1M', rating: 4.9 },
    { id: 3, title: 'The God of High School', subscribers: '5.2M', rating: 4.8 },
    { id: 4, title: 'Lore Olympus', subscribers: '4.5M', rating: 4.9 },
    { id: 5, title: 'Unordinary', subscribers: '3.9M', rating: 4.7 },
    { id: 6, title: 'The Remarried Empress', subscribers: '4.2M', rating: 4.8 }
  ];
  
  const newlyReleased = [
    { id: 1, title: 'Falling for It' },
    { id: 2, title: 'Acting Gangster' },
    { id: 3, title: 'The Perfect Match' },
    { id: 4, title: 'Love in the Air' },
    { id: 5, title: 'Dark Secrets' }
  ];
  
  const forYouFeed = [
    { id: 1, title: 'Lore Olympus', reason: 'Because you read Lets Play', rating: 4.8, likes: 1200, trending: true, matchPercent: 95, genres: ['Romance', 'Fantasy'] },
    { id: 2, title: 'Midnight Poppy Land', reason: 'Similar to your favorites', rating: 4.7, likes: 980, trending: false, matchPercent: 88, genres: ['Romance', 'Drama'] },
    { id: 3, title: 'Purple Hyacinth', reason: 'Based on your reading history', rating: 4.9, likes: 1500, trending: true, matchPercent: 92, genres: ['Mystery', 'Action'] },
    { id: 4, title: 'Villains Are Destined to Die', reason: 'Recommended for you', rating: 4.6, likes: 850, trending: false, matchPercent: 85, genres: ['Fantasy', 'Romance'] }
  ];
  
  const editorsPicks = [
    { id: 1, title: 'Midnight Poppy Land', description: 'A thrilling romance' },
    { id: 2, title: 'Purple Hyacinth', description: 'Mystery and espionage' },
    { id: 3, title: 'The Remarried Empress', description: 'Historical drama' },
    { id: 4, title: 'Villains Are Destined to Die', description: 'Fantasy romance' },
    { id: 5, title: 'Unordinary', description: 'Supernatural action' }
  ];
  
  const popularCanvas = [
    { id: 1, title: 'My Dear Cold-Blooded King', creator: '@lifelight', subscribers: '892K' },
    { id: 2, title: 'Vampire Bites', creator: '@artist1', subscribers: '756K' },
    { id: 3, title: 'The Witch\'s Doll', creator: '@artist2', subscribers: '643K' },
    { id: 4, title: 'Moonlight Shadows', creator: '@creator3', subscribers: '521K' },
    { id: 5, title: 'Dark Secrets', creator: '@artist4', subscribers: '489K' },
    { id: 6, title: 'Crystal Dreams', creator: '@creator5', subscribers: '432K' }
  ];
  
  const latestActivity = [
    { id: 1, creator: '@lifelight', action: 'New episode tonight!', series: 'Cold-Blooded King', time: '2 hours ago', initial: 'L', updateText: 'published Episode 142' },
    { id: 2, creator: '@artmaster', action: 'Behind-the-scenes art drop', series: 'The Last Sorcerer', time: '4 hours ago', initial: 'A', updateText: 'updated Episode 88' },
    { id: 3, creator: '@storyteller', action: 'published Episode 3', series: 'Whispers of the Past', time: '6 hours ago', initial: 'S', updateText: 'published Episode 3' },
    { id: 4, creator: '@comicfan', action: 'published Episode 20', series: 'Galactic Guardians', time: '1 day ago', initial: 'C', updateText: 'published Episode 20' },
    { id: 5, creator: '@inkweaver', action: 'updated Episode 10', series: 'Shadows of Eldoria', time: '1 day ago', initial: 'I', updateText: 'updated Episode 10' },
    { id: 6, creator: '@dreamer', action: 'published Episode 5', series: 'The Crystal Prophecy', time: '2 days ago', initial: 'D', updateText: 'published Episode 5' }
  ];
  
  const activityScrollRef = useRef<HTMLDivElement>(null);
  const continueReadingRef = useRef<HTMLDivElement>(null);

  const scrollActivity = (direction: 'left' | 'right') => {
    if (activityScrollRef.current) {
      const scrollAmount = 336;
      activityScrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollContinueReading = (direction: 'left' | 'right') => {
    if (continueReadingRef.current) {
      const scrollAmount = 280;
      continueReadingRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Carousel */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          {heroItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-gradient-to-r ${item.color} flex items-center justify-center transition-transform duration-500 ${
                index === activeCarousel ? 'translate-x-0' : index < activeCarousel ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div className="text-center text-white z-10">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                  {item.tag}
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">{item.title}</h1>
                <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Read Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setActiveCarousel((prev) => (prev === 0 ? heroItems.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setActiveCarousel((prev) => (prev === heroItems.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCarousel(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeCarousel ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* 1. Daily Updates */}
        <section className="mt-12 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Daily Updates</h2>
            <a href="#" className="text-[#00C373] text-sm hover:underline font-semibold">See full list →</a>
          </div>
          <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                  activeDay === day
                    ? 'bg-[#00C373] text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-4">
            {dailyUpdates[activeDay as keyof typeof dailyUpdates]?.map((item, index) => (
              <div key={index} className="cursor-pointer group">
                <div className="relative aspect-[2/3] rounded-xl border border-neutral-200 shadow-sm bg-white overflow-hidden hover:shadow-lg hover:border-green-400 transition-all duration-200">
                  <ImagePlaceholder />
                  <div className="absolute top-2 right-2 bg-[#00C373] text-white text-xs px-2 py-1 rounded-full font-bold">
                    NEW
                  </div>
                </div>
                <h3 className="font-medium text-sm text-gray-900 mt-2">{item.title}</h3>
                <p className="text-xs text-neutral-500">{item.episode}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-block text-[#00C373] text-sm hover:underline font-semibold px-4 py-2 border-2 border-[#00C373] rounded-xl hover:bg-green-50 transition-colors">
              See full list for {activeDay} →
            </a>
          </div>
        </section>

        {/* 2. Continue Reading */}
        <section className="mt-12 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Continue Reading</h2>
              <p className="text-sm text-neutral-500 mt-1">Pick up where you left off</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollContinueReading('left')}
                  className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollContinueReading('right')}
                  className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <a href="#" className="text-[#00C373] text-sm hover:underline font-semibold">View All</a>
            </div>
          </div>
          <div 
            ref={continueReadingRef}
            className="flex gap-6 overflow-x-auto py-4 no-scrollbar scroll-smooth"
          >
            {continueReading.map((item) => (
              <div key={item.id} className="rounded-2xl p-4 bg-white shadow hover:shadow-lg transition-all w-[240px] select-none flex-shrink-0">
                {/* Thumbnail */}
                <div
                  className="h-40 w-full rounded-xl relative"
                  style={{ background: item.color }}
                >
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-md">
                    Progress: {item.progress}%
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-3 font-semibold text-gray-900">{item.title}</h3>

                {/* Progress bar */}
                <div className="mt-2 w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>

                {/* Status text */}
                <p className="text-green-600 text-sm mt-2">{item.statusText}</p>

                {/* Episode count */}
                <p className="text-gray-500 text-sm">{item.episodesLeft} episodes left</p>

                {/* Timestamp */}
                <p className="text-gray-400 text-xs mt-1">{item.lastUpdated}</p>

                {/* Button */}
                <button
                  className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-all"
                >
                  Resume Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Popular Originals */}
        <section className="mt-12 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-semibold tracking-tight">Popular Originals</h2>
            </div>
            <a href="#" className="text-[#00C373] text-sm hover:underline font-semibold">View All</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularOriginals.map((item) => (
              <div key={item.id} className="cursor-pointer group">
                <div className="relative aspect-[2/3] rounded-xl border border-neutral-200 shadow-sm bg-white overflow-hidden hover:shadow-lg hover:border-green-400 transition-all duration-200">
                  <ImagePlaceholder />
                  <div className="absolute top-2 left-2 bg-orange-500 text-white p-1.5 rounded-full flex items-center justify-center shadow-lg">
                    <Flame className="w-3 h-3" />
                  </div>
                  <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
                <h3 className="font-medium text-sm text-gray-900 mt-2">{item.title}</h3>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-neutral-500">👥 {item.subscribers}</span>
                  <span className="text-yellow-500 font-bold">⭐ {item.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Newly Released Originals */}
        <section className="mt-12 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Newly Released Originals</h2>
            <a href="#" className="text-[#00C373] text-sm hover:underline font-semibold">View All</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {newlyReleased.map((item) => (
              <div key={item.id} className="cursor-pointer group">
                <div className="relative aspect-[2/3] rounded-xl border border-neutral-200 shadow-sm bg-white overflow-hidden hover:shadow-lg hover:border-green-400 transition-all duration-200">
                  <ImagePlaceholder />
                  <div className="absolute top-2 left-2 bg-[#00C373] text-white text-xs px-2 py-1 rounded font-bold">
                    NEW
                  </div>
                </div>
                <h3 className="font-medium text-sm text-gray-900 mt-2">{item.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="#" className="inline-block text-[#00C373] text-sm hover:underline font-semibold px-4 py-2 border-2 border-[#00C373] rounded-xl hover:bg-green-50 transition-colors">
              See more new releases →
            </a>
          </div>
        </section>

        {/* 5. For You */}
        <section className="mt-12 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#00C373]" />
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">For You</h2>
                <p className="text-xs text-neutral-500 mt-1">Based on your reading history</p>
              </div>
            </div>
            <a href="#" className="text-[#00C373] text-sm hover:underline font-semibold">View All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forYouFeed.map((item, idx) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl border border-neutral-200 shadow-sm p-4 cursor-pointer hover:shadow-[0_0_12px_rgba(34,197,94,0.35)] hover:scale-[1.02] hover:border-green-400 transition-all duration-200"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                  <ImagePlaceholder />
                  {item.trending && (
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white p-1.5 rounded-full flex items-center justify-center shadow-lg z-10">
                      <Flame className="w-3 h-3" />
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded">
                    <span className="text-white text-sm font-semibold">{item.matchPercent}% Match</span>
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1 text-gray-900">{item.title}</h3>
                <p className="text-xs text-neutral-600 mb-2 font-medium">{item.reason}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.genres.map((genre, gIdx) => (
                    <span key={gIdx} className="text-xs px-2 py-0.5 bg-[#00C373]/10 text-[#00C373] rounded-full font-medium">
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#00C373]">{item.matchPercent}% match</span>
                  <div className="flex gap-2">
                    <span className="text-yellow-500 font-bold">⭐ {item.rating}</span>
                    <span className="text-neutral-600 font-semibold flex items-center gap-1">
                      <Heart className="w-3 h-3" /> {item.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Editor's Picks */}
        <section className="mt-12 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-purple-600" />
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Editor's Picks</h2>
                <p className="text-xs text-neutral-500 mt-1">Curated by Webtoon Team</p>
              </div>
            </div>
            <a href="#" className="text-[#00C373] text-sm hover:underline font-semibold">View All</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {editorsPicks.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-neutral-200 shadow-sm p-3 cursor-pointer hover:shadow-lg hover:border-green-400 transition-all duration-200">
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-2">
                  <ImagePlaceholder />
                  <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3" />
                    Staff Pick
                  </div>
                </div>
                <h3 className="font-bold text-sm mb-1 text-gray-900">{item.title}</h3>
                <p className="text-xs text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Popular Canvas */}
        <section className="mt-12 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Popular Canvas</h2>
            <a href="#" className="text-[#00C373] text-sm hover:underline font-semibold">View All</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularCanvas.map((item) => (
              <div key={item.id} className="cursor-pointer group">
                <div className="relative aspect-[2/3] rounded-xl border border-neutral-200 shadow-sm bg-white overflow-hidden hover:shadow-lg hover:border-green-400 transition-all duration-200">
                  <ImagePlaceholder />
                </div>
                <h3 className="font-medium text-sm text-gray-900 mt-2">{item.title}</h3>
                <p className="text-xs text-neutral-500 mb-1">by {item.creator}</p>
                <p className="text-xs text-neutral-400">{item.subscribers} subscribers</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Disney+ Stories */}
        <div className="mt-12 mb-6">
          <DisneyShowcase />
        </div>

        {/* 9. Latest Creator Activity */}
        <section className="mt-12 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Activity className="w-6 h-6 text-[#00C373]" />
              <h2 className="text-2xl font-semibold tracking-tight">Latest Creator Activity</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollActivity('left')}
                className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollActivity('right')}
                className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div
            ref={activityScrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {latestActivity.map((item) => (
              <div
                key={item.id}
                className="min-w-[320px] bg-white rounded-xl border border-neutral-200 shadow-sm p-4 hover:shadow-lg hover:border-green-400 transition-all duration-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {item.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-gray-900">{item.creator}</span>
                      <button className="text-[#00C373] hover:text-[#00b368] text-sm font-semibold flex items-center space-x-1">
                        <UserPlus className="w-4 h-4" />
                        <span>Follow</span>
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">{item.updateText}</p>
                    <p className="text-xs text-neutral-500 mb-2">{item.series}</p>
                    <p className="text-xs text-neutral-400">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default WebtoonHomepage;


