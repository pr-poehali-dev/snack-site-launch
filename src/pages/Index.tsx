import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/projects/f099cda9-30fa-4f15-a0a0-f6dbbe7636bb/files/da7b333e-6610-489a-8bee-51ec0e6ddc2c.jpg",
      alt: "Домашний фуршетный стол с закусками"
    },
    {
      url: "https://cdn.poehali.dev/projects/f099cda9-30fa-4f15-a0a0-f6dbbe7636bb/files/a9f239fd-66b2-4d6a-9d39-2e5ae36a4b14.jpg",
      alt: "Закуски и канапе на обычной посуде"
    },
    {
      url: "https://cdn.poehali.dev/projects/f099cda9-30fa-4f15-a0a0-f6dbbe7636bb/files/361882c2-0ac2-4f0b-923f-b1c5cb7501f3.jpg",
      alt: "Фуршет на домашнем столе"
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold text-foreground">Фуршеты & Закуски</h1>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">Галерея</button>
            <button onClick={() => scrollToSection('delivery')} className="text-foreground hover:text-primary transition-colors">Доставка</button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in">
            Изысканные фуршеты для ваших мероприятий
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Профессиональное оформление и качественные продукты для незабываемых событий
          </p>
          <Button 
            size="lg" 
            className="animate-scale-in font-medium text-lg px-8"
            style={{ animationDelay: '0.2s' }}
            onClick={() => scrollToSection('gallery')}
          >
            Посмотреть примеры
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-12">О нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="ChefHat" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Профессионализм</h3>
              <p className="text-muted-foreground">Опытные специалисты с многолетним стажем в кейтеринге</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Качество</h3>
              <p className="text-muted-foreground">Только свежие продукты и проверенные поставщики</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Индивидуальный подход</h3>
              <p className="text-muted-foreground">Учитываем все пожелания и особенности вашего мероприятия</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-4">Фотогалерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Примеры оформления фуршетных столов</p>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-12">Доставка</h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">География доставки</h3>
                  <p className="text-muted-foreground">Осуществляем доставку по всему городу и области. Возможна организация выездного обслуживания.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Время доставки</h3>
                  <p className="text-muted-foreground">Доставка точно к назначенному времени. Минимальное время на подготовку заказа — 24 часа.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Package" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Условия</h3>
                  <p className="text-muted-foreground">Бесплатная доставка при заказе от 10 000 ₽. Предоставляем всю необходимую посуду и сервировку.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">Фуршеты & Закуски</h3>
          <p className="text-background/80 mb-6">Сделаем ваше мероприятие незабываемым</p>
          <div className="flex justify-center gap-6">
            <a href="tel:+79999999999" className="flex items-center gap-2 text-background/90 hover:text-background transition-colors">
              <Icon name="Phone" size={20} />
              +7 (999) 999-99-99
            </a>
            <a href="mailto:info@example.com" className="flex items-center gap-2 text-background/90 hover:text-background transition-colors">
              <Icon name="Mail" size={20} />
              info@example.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;