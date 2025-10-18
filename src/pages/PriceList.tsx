import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const priceCategories = [
  {
    title: 'Черновые работы',
    icon: 'Hammer',
    services: [
      { name: 'Демонтаж стен (кирпич)', unit: 'м²', price: 'от 800' },
      { name: 'Демонтаж стен (бетон)', unit: 'м²', price: 'от 1500' },
      { name: 'Демонтаж перегородок', unit: 'м²', price: 'от 600' },
      { name: 'Вывоз мусора', unit: 'м³', price: 'от 1200' },
      { name: 'Стяжка пола', unit: 'м²', price: 'от 450' },
      { name: 'Штукатурка стен', unit: 'м²', price: 'от 500' }
    ]
  },
  {
    title: 'Электромонтажные работы',
    icon: 'Zap',
    services: [
      { name: 'Прокладка кабеля', unit: 'м.п.', price: 'от 150' },
      { name: 'Установка розеток', unit: 'шт', price: 'от 350' },
      { name: 'Установка выключателей', unit: 'шт', price: 'от 300' },
      { name: 'Монтаж распределительного щита', unit: 'шт', price: 'от 3500' },
      { name: 'Установка люстры', unit: 'шт', price: 'от 800' },
      { name: 'Установка светильников', unit: 'шт', price: 'от 400' }
    ]
  },
  {
    title: 'Сантехнические работы',
    icon: 'Droplet',
    services: [
      { name: 'Монтаж водопровода', unit: 'м.п.', price: 'от 600' },
      { name: 'Монтаж канализации', unit: 'м.п.', price: 'от 700' },
      { name: 'Установка ванны', unit: 'шт', price: 'от 2500' },
      { name: 'Установка душевой кабины', unit: 'шт', price: 'от 3000' },
      { name: 'Установка унитаза', unit: 'шт', price: 'от 1800' },
      { name: 'Установка раковины', unit: 'шт', price: 'от 1500' }
    ]
  },
  {
    title: 'Отделочные работы',
    icon: 'Paintbrush',
    services: [
      { name: 'Поклейка обоев', unit: 'м²', price: 'от 300' },
      { name: 'Покраска стен', unit: 'м²', price: 'от 250' },
      { name: 'Укладка ламината', unit: 'м²', price: 'от 400' },
      { name: 'Укладка плитки', unit: 'м²', price: 'от 800' },
      { name: 'Монтаж натяжных потолков', unit: 'м²', price: 'от 450' },
      { name: 'Установка плинтусов', unit: 'м.п.', price: 'от 150' }
    ]
  },
  {
    title: 'Ремонт под ключ',
    icon: 'Home',
    popular: true,
    services: [
      { name: 'Эконом класс', unit: 'м²', price: 'от 8000', description: 'Базовые материалы и отделка' },
      { name: 'Комфорт класс', unit: 'м²', price: 'от 12000', description: 'Качественные материалы' },
      { name: 'Бизнес класс', unit: 'м²', price: 'от 18000', description: 'Премиум материалы' },
      { name: 'Премиум класс', unit: 'м²', price: 'от 25000', description: 'Эксклюзивные решения' }
    ]
  },
  {
    title: 'Дизайн проекты',
    icon: 'Pencil',
    services: [
      { name: 'Обмерный план', unit: 'услуга', price: 'от 5000' },
      { name: 'Планировочное решение', unit: 'услуга', price: 'от 8000' },
      { name: 'Дизайн-проект (базовый)', unit: 'м²', price: 'от 1200' },
      { name: 'Дизайн-проект (полный)', unit: 'м²', price: 'от 2000' },
      { name: 'Авторский надзор', unit: 'месяц', price: 'от 30000' }
    ]
  }
];

const PriceList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-secondary cursor-pointer" onClick={() => navigate('/')}>
              РемонтПро
            </h1>
            <Button variant="outline" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">Прайс-лист</h2>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Цены на ремонтные работы и услуги. Точная стоимость рассчитывается после осмотра объекта
          </p>
          <div className="mt-8 p-4 bg-primary/10 rounded-xl inline-block">
            <p className="text-sm font-medium text-primary">
              <Icon name="Info" size={16} className="inline mr-2" />
              Все цены указаны в рублях
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {priceCategories.map((category, idx) => (
              <Card key={idx} className={`hover:shadow-lg transition-all duration-300 ${category.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon name={category.icon} className="text-primary" size={28} />
                      </div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                    </div>
                    {category.popular && (
                      <Badge className="bg-primary">Популярное</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.services.map((service, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
                        <div className="flex-1">
                          <div className="font-medium">{service.name}</div>
                          {service.description && (
                            <div className="text-sm text-muted-foreground mt-1">{service.description}</div>
                          )}
                        </div>
                        <div className="text-right ml-4">
                          <div className="font-bold text-primary whitespace-nowrap">{service.price} ₽</div>
                          <div className="text-sm text-muted-foreground">за {service.unit}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="text-center">
                <Icon name="FileText" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">Нужна точная смета?</h3>
                <p className="text-muted-foreground mb-6">
                  Свяжитесь с нами для бесплатного выезда специалиста и точного расчёта стоимости работ
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="tel:+74951234567">
                    <Button size="lg">
                      <Icon name="Phone" size={20} className="mr-2" />
                      +7 (495) 123-45-67
                    </Button>
                  </a>
                  <a href="mailto:info@remontpro.ru">
                    <Button size="lg" variant="outline">
                      <Icon name="Mail" size={20} className="mr-2" />
                      info@remontpro.ru
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Важная информация</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <Icon name="CheckCircle2" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold mb-2">Гарантия качества</h4>
                <p className="text-sm text-muted-foreground">
                  На все виды работ предоставляется гарантия от 1 до 3 лет
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon name="Calendar" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold mb-2">Соблюдение сроков</h4>
                <p className="text-sm text-muted-foreground">
                  Работаем строго по договору с фиксированными датами
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon name="Shield" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold mb-2">Официальный договор</h4>
                <p className="text-sm text-muted-foreground">
                  Все работы выполняются по официальному договору
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon name="Users" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold mb-2">Опытные мастера</h4>
                <p className="text-sm text-muted-foreground">
                  В команде работают специалисты с опытом от 5 лет
                </p>
              </CardContent>
            </Card>
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

export default PriceList;
