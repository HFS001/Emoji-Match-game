# Emoji-Match-game

Objetivo do Jogo
O Emoji Match Game é um jogo interativo onde o jogador deve combinar três emojis iguais na horizontal ou vertical antes que o tempo acabe.  
O principal objetivo é obter a maior pontuação possível dentro de 60 segundos.

Jogo simples, divertido e ideal para ser apresentado na feira de projetos.

---

Como Funciona
- O jogador insere o nome e clica em "Start Game".
- O jogo inicia com uma grelha 8x8 de emojis aleatórios.
- O jogador pode arrastar com o rato (PC) ou tocar em dois emojis (telemóvel) para trocar os seus lugares.
- O sistema verifica constantemente se existem 3 emojis iguais em linha ou coluna.
  - Quando encontrados, são removidos, o jogador ganha +3 pontos e os emojis acima caem.
- O cronómetro de 60 segundos inicia automaticamente.
- Ao terminar o tempo, é apresentado o resultado final num modal interativo.
- O jogador pode jogar novamente ou voltar ao início.

---

Tecnologias Utilizadas
- HTML5 – estrutura da aplicação
- CSS3 + Media Queries – estilo moderno e responsivo
- JavaScript – lógica do jogo e manipulação do DOM
- Bootstrap 5 – design e responsividade
- sessionStorage – guardar o nome do jogador temporariamente

---

Lógica do Código
- O tabuleiro é criado com createBoard() utilizando DOM.
- Eventos dragstart, dragend, drop controlam movimentos no PC.
- Eventos touchstart, touchend, touchmove garantem compatibilidade com dispositivos móveis.
- A função checkRowForThree() e checkColumnForThree() detetam padrões válidos.
- A pontuação é atualizada automaticamente.
- setInterval() controla o cronómetro e o loop de verificação.

---

Estado Atual
Projeto completo e funcional, testado em:
- Computador (desktop/laptop)
- Telemóvel (Android, iOS)
- Navegadores modernos (Chrome, Safari, Firefox)

---

Autor
Desenvolvido por Haider Fahim  
Projeto de formação no curso Técnico de Programação de Sistemas de Informação – IEFP Leiria





Persian language Version 

بازی Emoji Match

هدف بازی  
بازی Emoji Match یک بازی تعاملی است که بازیکن باید سه ایموجی مشابه را به صورت افقی یا عمودی کنار هم قرار دهد، پیش از آنکه زمان تمام شود.  
هدف اصلی این است که در مدت زمان ۶۰ ثانیه، بیشترین امتیاز ممکن را کسب کند.

این بازی ساده، سرگرم‌کننده و مناسب برای ارائه در نمایشگاه پروژه‌ها طراحی شده است.

---

نحوه عملکرد بازی  
- بازیکن نام خود را وارد کرده و روی دکمه "Start Game" کلیک می‌کند.
- بازی با یک شبکه ۸×۸ از ایموجی‌های تصادفی آغاز می‌شود.
- در کامپیوتر: بازیکن با کشیدن و رها کردن (Drag & Drop) ایموجی‌ها را جابه‌جا می‌کند.  
  در موبایل: با لمس دو ایموجی، آن‌ها جابه‌جا می‌شوند.
- سیستم به‌طور پیوسته بررسی می‌کند که آیا ۳ ایموجی مشابه در یک ردیف یا ستون قرار دارند یا نه.
  - اگر چنین الگویی پیدا شود، آن‌ها حذف می‌شوند، بازیکن ۳ امتیاز می‌گیرد، و ایموجی‌های بالا جایگزین می‌شوند.
- تایمر ۶۰ ثانیه‌ای پس از شروع فعال می‌شود.
- در پایان زمان، امتیاز نهایی در یک پنجره مودال (Modal) نمایش داده می‌شود.
- بازیکن می‌تواند بازی را دوباره شروع کند یا به صفحه‌ی اول بازگردد.

---

فناوری‌های استفاده‌شده  
- HTML5 – ساختار اصلی بازی  
- CSS3 + Media Queries – طراحی واکنش‌گرا و ظاهری مدرن  
- JavaScript – منطق اصلی بازی و کنترل DOM  
- Bootstrap 5 – استایل‌دهی سریع و هماهنگ  
- sessionStorage – نگهداری نام بازیکن در طول جلسه

---

منطق کدنویسی بازی  
- شبکه بازی با تابع createBoard() ایجاد می‌شود.  
- رویدادهای dragstart, dragend, drop در کامپیوتر اعمال می‌شوند.  
- رویدادهای touchstart, touchend, touchmove از عملکرد در گوشی موبایل پشتیبانی می‌کنند.  
- توابع checkRowForThree() و checkColumnForThree() برای تشخیص ردیف‌ها و ستون‌های مشابه به کار می‌روند.  
- امتیاز بازیکن به‌صورت زنده به‌روزرسانی می‌شود.  
- setInterval() برای اجرای تایمر و منطق زمان‌بندی استفاده می‌شود.

---

وضعیت فعلی  
پروژه کامل و قابل اجرا است و روی پلتفرم‌های زیر تست شده:  
- رایانه رومیزی و لپ‌تاپ  
- گوشی‌های موبایل (Android و iOS)  
- مرورگرهای مدرن مانند Chrome، Safari و Firefox

---

توسعه‌دهنده  
توسعه یافته توسط Haider Fahim  
بخشی از پروژه‌ی دوره‌ی Técnico de Programação de Sistemas de Informação – IEFP Leiria


