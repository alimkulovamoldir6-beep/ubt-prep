const COURSE = [
  { section: 'Компьютерлік жүйелер', topics: [
    { title: 'Компьютердің құрылғылары', lesson: 'Компьютердің аппараттық бөліктері деректерді енгізу, өңдеу, сақтау және шығаруға қызмет етеді. Процессор командаларды орындайды, жедел жад жұмыс үстіндегі деректерді уақытша сақтайды, ал жинақтауыш файлдарды ұзақ мерзімге сақтайды.', example: 'Пернетақта — енгізу құрылғысы; процессор — өңдеу құрылғысы; монитор — шығару құрылғысы.', q: 'Жұмыс үстіндегі бағдарламалар мен деректерді уақытша сақтайтын құрылғы?', options: ['SSD', 'Жедел жад (RAM)', 'Монитор', 'Пернетақта'], answer: 1, why: 'Жедел жад компьютер жұмыс істеп тұрған кезде қолданылатын деректерді уақытша сақтайды.' },
    { title: 'Компьютерлік желілер және ақпараттық қауіпсіздік', lesson: 'Компьютерлік желі құрылғылар арасында дерек алмасуға мүмкіндік береді. Жергілікті желі шектеулі аумақты қамтиды, ал интернет — өзара байланысқан желілер жүйесі. Қауіпсіздік үшін бірегей құпиясөз, көп факторлы растау және күмәнді сілтемелерден сақтану маңызды.', example: 'Үйдегі Wi‑Fi желісі — жергілікті желінің мысалы; веб-сайтқа кіру үшін браузер серверге сұраныс жібереді.', q: 'Фишинг хабарламасының негізгі мақсаты қандай?', options: ['Құрылғының жадын кеңейту', 'Пайдаланушыны алдап, деректерін алу', 'Интернет жылдамдығын арттыру', 'Файлды сығу'], answer: 1, why: 'Фишинг жалған сайт немесе хабарлама арқылы құпия ақпаратты қолға түсіруге тырысады.' }
  ]},
  { section: 'Ақпараттық процестер', topics: [
    { title: 'Ақпаратты ұсыну, өлшеу және кодтау', lesson: 'Компьютер ақпаратты екілік түрде — 0 және 1 биттер тізбегі ретінде өңдейді. 8 бит 1 байтты құрайды. Мәтін, сурет және дыбыс компьютерде сандық код арқылы сақталады.', example: '1 байт = 8 бит. Мәтіндегі таңбалар кодтау кестесіне сәйкес сандармен беріледі.', q: '1 байтта неше бит бар?', options: ['2', '4', '8', '16'], answer: 2, why: 'Байттың стандартты көлемі — 8 бит.' },
    { title: 'Есептеу жүйелері', lesson: 'Санау жүйесі сандарды белгілі бір негізге сүйеніп жазады. Ондық жүйенің негізі 10, екілік жүйенің негізі 2. Екілік жүйеде тек 0 және 1 цифрлары қолданылады.', example: '110₂ = 1×2² + 1×2¹ + 0×2⁰ = 6₁₀.', q: 'Екілік жүйедегі 101₂ саны ондық жүйеде нешеге тең?', options: ['4', '5', '6', '7'], answer: 1, why: '1×2² + 0×2¹ + 1×2⁰ = 5.' },
    { title: 'Компьютердің логикалық негіздері', lesson: 'Логикалық амалдар ақиқат (true) және жалған (false) мәндерімен жұмыс істейді. AND — екі шарт та ақиқат болса ақиқат; OR — кемінде біреуі ақиқат болса ақиқат; NOT мәнді терістейді.', example: 'true AND false = false; NOT false = true.', q: 'OR амалының нәтижесі қай кезде жалған болады?', options: ['Екі мән де жалған болғанда', 'Екі мән де ақиқат болғанда', 'Бір мән ақиқат болса', 'Ешқашан'], answer: 0, why: 'OR амалының нәтижесі тек екі операнд та жалған болғанда жалған болады.' }
  ]},
  { section: 'Компьютерлік ойлау', topics: [
    { title: 'Python тілінде алгоритмдерді программалау', lesson: 'Алгоритм — мақсатқа жету үшін орындалатын нақты қадамдар тізбегі. Python-да айнымалы мән сақтайды, шарт тармақталуды ұйымдастырады, цикл әрекеттерді қайталайды.', example: 'if score >= 50: print("Өтті") — шарт ақиқат болса хабарлама шығарылады.', q: 'Python тілінде шартты тексеретін түйінді сөз?', options: ['for', 'if', 'def', 'print'], answer: 1, why: 'if шарт ақиқат болған жағдайда тиісті код блогын орындайды.' },
    { title: 'Алгоритмдер және программалау: функция, рекурсия, жол, файл, сұрыптау, граф', lesson: 'Бұл тақырыпта функциялар кодты бөліктерге бөледі, рекурсия функцияның өзін шақыруын білдіреді, жолдар таңбалар тізбегін сақтайды, файлдар деректерді ұзақ мерзімге сақтайды. Сұрыптау элементтерді реттейді, ал граф төбелер мен қырлар арқылы байланыстарды модельдейді.', example: 'def square(x): return x*x — функция санның квадратын береді. Графта қалалар төбелермен, жолдар қырлармен көрсетіледі.', q: 'Рекурсивті функцияның тоқтауын қамтамасыз ететін шарт қалай аталады?', options: ['Базалық жағдай', 'Сұрыптау шарты', 'Файл режимі', 'Жол индексі'], answer: 0, why: 'Базалық жағдай орындалғанда функция өз-өзін шақыруды тоқтатады.' }
  ]},
  { section: 'Аппараттық және программалық қамтамасыз ету', topics: [
    { title: 'Аппараттық және программалық қамтамасыз ету', lesson: 'Аппараттық қамтамасыз ету — компьютердің физикалық құрылғылары. Программалық қамтамасыз ету құрылғыларға тапсырманы қалай орындау керегін айтады. Операциялық жүйе аппараттық ресурстар мен қолданбаларды басқарады.', example: 'Пернетақта — аппараттық құрал; операциялық жүйе мен мәтіндік редактор — программалар.', q: 'Операциялық жүйенің негізгі қызметтерінің бірі?', options: ['Құрылғылар мен бағдарламаларды басқару', 'Тек сурет салу', 'Интернет кабелін өндіру', 'Процессорды физикалық жөндеу'], answer: 0, why: 'Операциялық жүйе процессор, жад, файлдар және қолданбалардың жұмысын үйлестіреді.' }
  ]},
  { section: 'Ақпараттық процестер мен жүйелер', topics: [
    { title: 'Реляциялық деректер қоры', lesson: 'Реляциялық деректер қоры өзара байланысқан кестелерден тұрады. Жол жазбаны, баған өрісті білдіреді. Біріншілік кілт әр жазбаны бірегей анықтайды, сыртқы кілт кестелерді байланыстырады.', example: 'Оқушылар кестесіндегі ID — біріншілік кілт; бағалар кестесіндегі student_id — сыртқы кілт болуы мүмкін.', q: 'Кестедегі әр жазбаны бірегей анықтайтын өріс?', options: ['Сыртқы кілт', 'Біріншілік кілт', 'Сұраныс', 'Форма'], answer: 1, why: 'Біріншілік кілт жазбаның қайталанбайтын идентификаторы болады.' },
    { title: 'Деректер қорын жасау және SQL', lesson: 'SQL деректер қорындағы кестелерді құру, деректерді қосу және сұраныс жасау үшін қолданылады. SELECT деректерді таңдайды, INSERT жаңа жазба қосады, UPDATE жазбаны өзгертеді, DELETE жояды.', example: 'SELECT name FROM Students; — Students кестесінен name бағанын таңдайды.', q: 'Кестеден деректерді таңдау командасы?', options: ['SELECT', 'INSERT', 'DELETE', 'CREATE'], answer: 0, why: 'SELECT сұранысы көрсетілген бағандардағы деректерді оқиды.' },
    { title: 'IT үрдістері, стартап және 3D жобалау', lesson: 'Қазіргі IT бағыттарына жасанды интеллект, бұлттық есептеу, заттар интернеті және үлкен деректер жатады. Стартап — жаңа өнім не қызметті дамытатын жоба. 3D жобалау нысанның көлемді моделін құруға мүмкіндік береді.', example: 'Бұлттық сақтау файлдарды интернет арқылы әр құрылғыдан ашуға мүмкіндік береді.', q: 'Стартаптың негізгі мақсаты қандай?', options: ['Жаңа идеяны өнімге не қызметке айналдырып дамыту', 'Тек ескі құрылғыларды сақтау', 'Компьютерді өшіру', 'Файл кеңейтімін өзгерту'], answer: 0, why: 'Стартап жаңа шешімді жасап, оның сұранысын тексеріп, дамытады.' }
  ]},
  { section: 'Ақпараттық объектілерді құру және түрлендіру', topics: [
    { title: 'Ақпараттық объектілерді құру және түрлендіру', lesson: 'Ақпараттық объектілерге мәтіндік құжат, электрондық кесте, сурет, диаграмма және мультимедиа жатады. Құру мен өңдеу кезінде пішім, құрылым, дерек дәлдігі және оқылымдылық ескеріледі.', example: 'Электрондық кестеде формула ұяшықтардағы мәндерді автоматты есептейді.', q: 'Электрондық кестеде есептеуді автоматтандыру үшін не қолданылады?', options: ['Формула', 'Слайд ауысуы', 'Құпиясөз', 'Гиперсілтеменің түсі'], answer: 0, why: 'Формула деректерге амал қолданып, нәтижені автоматты есептейді.' },
    { title: 'Web-жобалау', lesson: 'Веб-бет құрылымы HTML арқылы беріледі, CSS сыртқы көрінісін безендіреді, JavaScript әрекеттесу қосады. Сайтты жобалағанда мазмұн иерархиясы, қолжетімділік және әр экранға бейімделу қарастырылады.', example: '<h1>Тақырып</h1> — HTML тақырып элементі; CSS оны түсі мен өлшемі бойынша безендіреді.', q: 'Веб-беттің стилі мен сыртқы көрінісін басқаратын тіл?', options: ['HTML', 'CSS', 'SQL', 'Python ғана'], answer: 1, why: 'CSS веб-бет элементтерінің түсін, өлшемін және орналасуын анықтайды.' }
  ]}
];

const topicHost = document.getElementById('topic-list');
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
topicHost.innerHTML = COURSE.map((group, gi) => `
  <section class="topic-group"><div class="group-head"><span class="group-no">${String(gi+1).padStart(2,'0')}</span><div><h3>${esc(group.section)}</h3><small>${group.topics.length} тақырып</small></div></div>
    <div class="group-topics">${group.topics.map((topic, ti) => {
      const id = `topic-${gi}-${ti}`;
      return `<article class="topic-item" id="${id}"><button class="topic-toggle" type="button" aria-expanded="false"><span>${esc(topic.title)}</span><span class="arrow">＋</span></button>
        <div class="lesson"><p>${esc(topic.lesson)}</p><div class="example"><b>Мысал:</b> ${esc(topic.example)}</div>
          <div class="mini-q"><strong>Өзіңді тексер: ${esc(topic.q)}</strong><div class="mini-options">${topic.options.map((o, oi) => `<label><input type="radio" name="mini-${id}" value="${oi}"><span>${esc(o)}</span></label>`).join('')}</div>
            <button class="mini-check" type="button" data-topic="${id}">Жауапты тексеру</button><p class="mini-feedback" aria-live="polite"></p></div>
        </div></article>`;
    }).join('')}</div></section>`).join('');

topicHost.addEventListener('click', async event => {
  const toggle = event.target.closest('.topic-toggle');
  if (toggle) {
    const item = toggle.closest('.topic-item'); item.classList.toggle('open');
    toggle.setAttribute('aria-expanded', item.classList.contains('open'));
    return;
  }
  const check = event.target.closest('.mini-check');
  if (check) {
    const item = document.getElementById(check.dataset.topic);
    const groupIndex = Number(check.dataset.topic.split('-')[1]);
    const topicIndex = Number(check.dataset.topic.split('-')[2]);
    const topic = COURSE[groupIndex].topics[topicIndex];
    const selected = item.querySelector(`input[name="mini-${check.dataset.topic}"]:checked`);
    const feedback = item.querySelector('.mini-feedback');
    if (!selected) { feedback.textContent = 'Алдымен бір жауапты таңдаңыз.'; feedback.style.color = '#bf4753'; return; }
    const right = Number(selected.value) === topic.answer;
    const name = document.getElementById('student-name').value.trim();
    const studentClass = document.getElementById('student-class').value.trim();
    if (!name || !studentClass) {
      feedback.textContent = 'Нәтижені мұғалімге жіберу үшін жоғарыдағы аты-жөніңіз бен сыныбыңызды толтырыңыз.';
      feedback.style.color = '#bf4753';
      document.getElementById('student-fields').scrollIntoView({behavior:'smooth',block:'center'});
      return;
    }
    const chosen = topic.options[Number(selected.value)];
    feedback.textContent = `${right ? 'Дұрыс!' : 'Қайта қарап көріңіз. Дұрыс жауап: ' + topic.options[topic.answer] + '.'} ${topic.why} Нәтиже кестеге жіберілуде…`;
    feedback.style.color = right ? '#16845c' : '#707d92';
    check.disabled = true;
    try {
      if (typeof GOOGLE_SCRIPT_URL === 'undefined' || !GOOGLE_SCRIPT_URL.startsWith('https://script.google.com/macros/s/')) throw new Error('missing_endpoint');
      await fetch(GOOGLE_SCRIPT_URL, {
        method:'POST', mode:'no-cors', headers:{'Content-Type':'text/plain;charset=utf-8'},
        body:JSON.stringify({
          studentName:name, studentClass,
          school:document.getElementById('student-school').value.trim(),
          subject:`Информатика — ${topic.title}`,
          score:right?1:0, total:1, percent:right?100:0, submittedAt:new Date().toISOString(),
          answers:[{question:topic.q,chosen,correct:topic.options[topic.answer],isCorrect:right}]
        })
      });
      feedback.textContent += ' Жіберілді.';
    } catch (error) {
      check.disabled = false;
      feedback.textContent += ' Кестеге жіберілмеді. Сілтемені тексеріңіз немесе кейін қайталаңыз.';
      feedback.style.color = '#bf4753';
    }
  }
});

document.getElementById('menu-toggle').addEventListener('click', () => document.querySelector('.header nav').classList.toggle('show'));
