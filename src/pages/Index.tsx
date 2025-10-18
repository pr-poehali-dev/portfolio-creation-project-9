import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const portfolioProjects = [
  {
    id: 1,
    title: 'Современная квартира',
    category: 'apartment',
    beforeImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
    afterImage: 'https://cdn.poehali.dev/projects/7e7acce2-0e0a-46df-8f91-793ee89b28a4/files/5dfa54b2-e776-473c-b8a1-b1c131d7658d.jpg',
    description: 'Полный ремонт квартиры 85 м²'
  },
  {
    id: 2,
    title: 'Загородный дом',
    category: 'house',
    beforeImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
    afterImage: 'https://cdn.poehali.dev/projects/7e7acce2-0e0a-46df-8f91-793ee89b28a4/files/f93e60c4-5f7c-41b9-ab8b-819fa29fd3c3.jpg',
    description: 'Реконструкция загородного дома'
  },
  {
    id: 3,
    title: 'Кухня премиум класса',
    category: 'kitchen',
    beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    afterImage: 'https://cdn.poehali.dev/projects/7e7acce2-0e0a-46df-8f91-793ee89b28a4/files/e5c9d39c-a372-494e-ac66-499b3dfe0c07.jpg',
    description: 'Дизайнерская кухня с мрамором'
  },
  {
    id: 4,
    title: 'Ванная комната',
    category: 'bathroom',
    beforeImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
    afterImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800',
    description: 'Современная ванная комната'
  },
  {
    id: 5,
    title: 'Офисное пространство',
    category: 'office',
    beforeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    afterImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
    description: 'Ремонт офиса 120 м²'
  },
  {
    id: 6,
    title: 'Детская комната',
    category: 'apartment',
    beforeImage: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
    afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    description: 'Яркая детская комната'
  }
];

const services = [
  {
    icon: 'Home',
    title: 'Ремонт квартир',
    description: 'Комплексный ремонт квартир под ключ с гарантией качества'
  },
  {
    icon: 'Building2',
    title: 'Ремонт загородных домов',
    description: 'Реконструкция и ремонт частных домов и коттеджей'
  },
  {
    icon: 'Paintbrush',
    title: 'Дизайн интерьера',
    description: 'Авторские дизайн-проекты от профессиональных дизайнеров'
  },
  {
    icon: 'Hammer',
    title: 'Черновой ремонт',
    description: 'Качественная подготовка помещений к чистовой отделке'
  },
  {
    icon: 'Sparkles',
    title: 'Чистовая отделка',
    description: 'Финишная отделка с использованием премиум материалов'
  },
  {
    icon: 'Wrench',
    title: 'Инженерные работы',
    description: 'Монтаж электрики, сантехники, вентиляции и отопления'
  }
];

const testimonials = [
  {
    name: 'Анна Петрова',
    text: 'Прекрасная работа! Ремонт завершили точно в срок, качество на высоте. Особенно порадовало внимание к деталям.',
    rating: 5
  },
  {
    name: 'Михаил Соколов',
    text: 'Делали ремонт загородного дома. Профессиональная команда, современный подход. Рекомендую!',
    rating: 5
  },
  {
    name: 'Елена Волкова',
    text: 'Отличное соотношение цена-качество. Дизайнер помогла реализовать все наши идеи. Очень довольны результатом.',
    rating: 5
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isBeforeAfterMode, setIsBeforeAfterMode] = useState<{ [key: number]: boolean }>({});

  const categories = [
    { value: 'all', label: 'Все работы' },
    { value: 'apartment', label: 'Квартиры' },
    { value: 'house', label: 'Дома' },
    { value: 'kitchen', label: 'Кухни' },
    { value: 'bathroom', label: 'Ванные' },
    { value: 'office', label: 'Офисы' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === selectedCategory);

  const toggleBeforeAfter = (id: number) => {
    setIsBeforeAfterMode(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-secondary">РемонтПро</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => navigate('/price')} className="text-sm font-medium hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>

          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Ремонт квартир<br />и загородных<br />домов
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Создаём пространства мечты с гарантией качества и точными сроками
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('portfolio')}>
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/7e7acce2-0e0a-46df-8f91-793ee89b28a4/files/5dfa54b2-e776-473c-b8a1-b1c131d7658d.jpg"
                alt="Наши работы"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Наши лучшие проекты с фотографиями До и После</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <Badge
                key={cat.value}
                variant={selectedCategory === cat.value ? 'default' : 'outline'}
                className="cursor-pointer px-6 py-2 text-sm font-medium"
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => toggleBeforeAfter(project.id)}>
                    <img
                      src={isBeforeAfterMode[project.id] ? project.beforeImage : project.afterImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {isBeforeAfterMode[project.id] ? 'До' : 'После'}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-sm">Нажмите, чтобы переключить</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр ремонтных работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-8">
              РемонтПро — это команда профессионалов с 15-летним опытом в сфере ремонта и строительства. 
              Мы специализируемся на комплексном ремонте квартир и загородных домов, предлагая полный цикл работ 
              от проектирования до финишной отделки.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Завершённых проектов</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-xl mb-12 opacity-90">
            Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={28} />
              </div>
              <div className="font-semibold mb-2">Телефон</div>
              <a href="tel:+74951234567" className="opacity-90 hover:opacity-100">+7 (495) 123-45-67</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={28} />
              </div>
              <div className="font-semibold mb-2">Email</div>
              <a href="mailto:info@remontpro.ru" className="opacity-90 hover:opacity-100">info@remontpro.ru</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" size={28} />
              </div>
              <div className="font-semibold mb-2">Адрес</div>
              <div className="opacity-90">Москва, ул. Примерная, 15</div>
            </div>
          </div>

        </div>
      </section>

      <footer className="bg-secondary text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="opacity-75">© 2024 РемонтПро. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;