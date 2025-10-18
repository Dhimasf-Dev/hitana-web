const craftsmanshipPillars = [
  {
    title: "Material Premium",
    description:
      "Kayu keras berkualitas tinggi dan material terbaik dari supplier terpercaya.",
  },
  {
    title: "Teknologi Modern",
    description:
      "Desain CAD presisi dan teknik produksi modern untuk hasil yang akurat.",
  },
  {
    title: "Sentuhan Artisan",
    description:
      "Finishing handmade dan detail custom yang memberikan karakter unik.",
  },
];

export const AdvantagesSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6">
      {/* Enhanced Header */}
      <div className="text-center space-y-6 mb-16">
        <span className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">
          Keunggulan kami
        </span>
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          Mengapa furniture custom Hitana berbeda?
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mx-auto">
          Kombinasi material premium, teknologi modern, dan sentuhan artisan untuk hasil terbaik.
        </p>
      </div>

      {/* Enhanced Decorative Background Elements */}
      <div className="relative">
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Enhanced Cards Grid */}
        <div className="relative grid gap-6 md:grid-cols-3">
          {craftsmanshipPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Enhanced Content */}
              <div className="relative z-10 space-y-6">
                {/* Enhanced Title */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  
                  {/* Decorative Line */}
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                    <div className="h-1 w-4 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full"></div>
                  </div>
                </div>
                
                {/* Enhanced Description */}
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
};
