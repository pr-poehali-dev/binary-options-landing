import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground">P</div>
            Pocket Option
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#conditions" className="text-sm font-medium hover:text-primary transition-colors">Условия</a>
            <a href="#instruments" className="text-sm font-medium hover:text-primary transition-colors">Инструменты</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </div>
          <Button>Начать торговлю</Button>
        </div>
      </nav>

      <section className="container py-20 md:py-32 animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Надёжная платформа для торговли бинарными опционами
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Профессиональные инструменты, прозрачные условия и быстрый вывод средств. Начните зарабатывать уже сегодня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Открыть демо-счёт
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Как это работает
              </Button>
            </div>
            <div className="mt-12 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Активных трейдеров</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$2M+</div>
                <div className="text-sm text-muted-foreground">Выплачено за месяц</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <Card className="border-2 shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>EUR/USD</CardTitle>
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="h-5 w-5 text-accent" />
                    <span className="text-accent font-semibold">+0.42%</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end gap-1">
                  {[65, 72, 68, 75, 70, 78, 82, 79, 85, 88, 84, 90, 87, 92, 95, 91, 96, 93, 98, 95, 100, 97, 102, 99, 105, 102, 108, 106, 110, 108].map((height, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-primary rounded-t transition-all hover:bg-primary/80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    <Icon name="ArrowUp" className="mr-2 h-4 w-4" />
                    Вверх
                  </Button>
                  <Button variant="destructive" className="w-full">
                    <Icon name="ArrowDown" className="mr-2 h-4 w-4" />
                    Вниз
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="container py-20 bg-muted/50">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Почему выбирают Pocket Option</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Современная платформа с максимальной прозрачностью и безопасностью
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "Shield",
              title: "Безопасность",
              description: "Лицензированный брокер с защитой средств клиентов и SSL-шифрованием данных"
            },
            {
              icon: "Zap",
              title: "Быстрое исполнение",
              description: "Сделки открываются моментально без задержек и проскальзываний"
            },
            {
              icon: "Wallet",
              title: "Вывод за 24 часа",
              description: "Быстрая обработка заявок на вывод средств любым удобным способом"
            },
            {
              icon: "TrendingUp",
              title: "До 92% прибыли",
              description: "Высокая доходность на популярные активы и турнирах"
            },
            {
              icon: "GraduationCap",
              title: "Обучение",
              description: "Бесплатные видеокурсы, вебинары и торговые стратегии для новичков"
            },
            {
              icon: "Smartphone",
              title: "Мобильные приложения",
              description: "Торгуйте где угодно с приложениями для iOS и Android"
            }
          ].map((feature, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow animate-scale-in border-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="conditions" className="container py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Торговые условия</h2>
          <p className="text-lg text-muted-foreground">Прозрачные и выгодные условия для всех трейдеров</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Минимальный депозит", value: "$50", icon: "DollarSign" },
            { label: "Минимальная сделка", value: "$1", icon: "Coins" },
            { label: "Максимальная прибыль", value: "92%", icon: "Percent" },
            { label: "Комиссия на вывод", value: "0%", icon: "BadgeCheck" }
          ].map((item, i) => (
            <Card key={i} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold text-primary">{item.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 border-primary/20 border-2">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon name="Clock" className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Экспирация</h3>
                <p className="text-sm text-muted-foreground">От 60 секунд до нескольких месяцев</p>
              </div>
              <div>
                <Icon name="BarChart3" className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Активы</h3>
                <p className="text-sm text-muted-foreground">100+ валютных пар, акций, криптовалют</p>
              </div>
              <div>
                <Icon name="Trophy" className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Турниры</h3>
                <p className="text-sm text-muted-foreground">Еженедельные турниры с призовым фондом</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="instruments" className="container py-20 bg-muted/50">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Торговые инструменты</h2>
          <p className="text-lg text-muted-foreground">Широкий выбор активов для диверсификации портфеля</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              category: "Валютные пары",
              icon: "DollarSign",
              items: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD"],
              color: "bg-blue-500/10 text-blue-600"
            },
            { 
              category: "Криптовалюты",
              icon: "Bitcoin",
              items: ["BTC/USD", "ETH/USD", "LTC/USD", "XRP/USD"],
              color: "bg-orange-500/10 text-orange-600"
            },
            { 
              category: "Акции",
              icon: "Building2",
              items: ["Apple", "Tesla", "Amazon", "Google"],
              color: "bg-purple-500/10 text-purple-600"
            },
            { 
              category: "Товары",
              icon: "Gem",
              items: ["Золото", "Серебро", "Нефть", "Газ"],
              color: "bg-amber-500/10 text-amber-600"
            }
          ].map((group, i) => (
            <Card key={i} className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg ${group.color} flex items-center justify-center mb-3`}>
                  <Icon name={group.icon as any} className="h-6 w-6" />
                </div>
                <CardTitle>{group.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="h-4 w-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="container py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-lg text-muted-foreground">Ответы на самые популярные вопросы</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                Как начать торговать на Pocket Option?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Зарегистрируйтесь на платформе, пополните счёт минимум на $50 и начните торговлю. Для новичков доступен демо-счёт с виртуальными средствами для практики без риска.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                Какие способы пополнения и вывода средств доступны?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Поддерживаются банковские карты, электронные кошельки (QIWI, WebMoney, PayPal), криптовалюты и банковские переводы. Вывод средств обрабатывается в течение 24 часов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                Есть ли мобильное приложение?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, Pocket Option предлагает бесплатные приложения для iOS и Android с полным функционалом платформы. Торгуйте в любое время и в любом месте.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                Безопасна ли платформа?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Pocket Option — лицензированный брокер с SSL-шифрованием данных. Средства клиентов хранятся на отдельных счетах и защищены международными стандартами безопасности.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                Какая максимальная доходность?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Доходность зависит от выбранного актива и времени экспирации. В среднем она составляет 80-92% от суммы сделки. Точный процент отображается перед открытием позиции.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                Предоставляете ли вы обучающие материалы?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, для всех пользователей доступны бесплатные видеоуроки, статьи, торговые стратегии и регулярные вебинары от профессиональных трейдеров.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="container py-20 bg-gradient-to-t from-primary/5 to-transparent">
        <Card className="border-primary/20 border-2">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать торговлю?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Откройте бесплатный демо-счёт и попробуйте все возможности платформы без риска
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Rocket" className="mr-2 h-5 w-5" />
                Открыть демо-счёт
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Связаться с поддержкой
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg mb-4">
                <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground">P</div>
                Pocket Option
              </div>
              <p className="text-sm text-muted-foreground">
                Надёжный брокер бинарных опционов с 2017 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Платформа</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Веб-платформа</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мобильные приложения</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Демо-счёт</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Турниры</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Обучение</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Видеоуроки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Торговые стратегии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вебинары</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка 24/7</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Pocket Option. Все права защищены. Торговля бинарными опционами сопряжена с риском.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
